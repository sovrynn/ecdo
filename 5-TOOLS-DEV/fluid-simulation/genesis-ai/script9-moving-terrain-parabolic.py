import argparse
import time

import numpy as np
import torch

import genesis as gs


def main():

    parser = argparse.ArgumentParser()
    parser.add_argument("-v", "--vis", action="store_true", default=True)
    parser.add_argument("-c", "--cpu", action="store_true", default=False)
    args = parser.parse_args()

    ########################## init ##########################
    gs.init(seed=0, backend=gs.cpu if args.cpu else gs.gpu)

    ########################## create a scene ##########################

    scene = gs.Scene(
        viewer_options=gs.options.ViewerOptions(
            camera_pos=(1,-1, 1),
            camera_lookat=(0, 0, 0.2),
            camera_fov=40,
        ),
        sim_options=gs.options.SimOptions(
            dt       = 4e-3,
            substeps = 10,
        ),
        # sph_options=gs.options.SPHOptions(
        #     lower_bound   = (0, 0, 0.0),
        #     upper_bound   = (6, 6, 6),
        #     particle_size = 0.01,
        # ),
        vis_options=gs.options.VisOptions(
            visualize_sph_boundary = True,
            shadow=False,
            lights = [
        {"type": "directional", "dir": (-1, -1, -1), "color": (1.0, 1.0, 1.0), "intensity": 5.0},
        {"type": "directional", "dir": (1, 1, 0), "color": (1.0, 1.0, 1.0), "intensity": 5.0}
    ]
        ),
        show_viewer = True,
        pbd_options=gs.options.PBDOptions(
            max_density_solver_iterations=5,
            max_viscosity_solver_iterations=5,
            lower_bound   = (0, 0, 0.0),
            upper_bound   = (6, 6, 6),
            # geom_type='sdf',
            particle_size=0.01,
        ),
    )

    # scene = gs.Scene(
    #     viewer_options=gs.options.ViewerOptions(
    #         camera_pos=(-5.0, -5.0, 10.0),
    #         camera_lookat=(5.0, 5.0, 0.0),
    #         camera_fov=40,
    #     ),
    #     show_viewer=args.vis,
    #     rigid_options=gs.options.RigidOptions(
    #         dt=0.01,
    #         constraint_solver=gs.constraint_solver.Newton,
    #     ),
    #     # vis_options=gs.options.VisOptions(
    #     vis_options=gs.options.VisOptions(
    #         visualize_sph_boundary = True,
    #     ),
    # )

    horizontal_scale = 0.01
    vertical_scale = 0.01
    ########################## entities ##########################

    # Create the 2D height field by repeating each row's value across all columns.
    height_field = array = [[(x + y) / 2 for x in range(100)] for y in range(100)]

    x_indices, y_indices = np.meshgrid(np.arange(100), np.arange(100))

    # Compute the array values
    array = (x_indices + y_indices) / 2
    height_field = array
    # Manually set the first 4x4 cells (rows 0-3, columns 0-3) to 50
    for i in range(4):
        for j in range(4):
            height_field[i][j] = 50

    # for row in height_field:
    #     print(row)

    TERRAIN_WIDTH = len(height_field)
    TERRAIN_LENGTH = len(height_field[0])
    RAMP_SCALE = 2.5
    WATER_LEVEL = 10

    def create_scene(scene, height_field, water_level):
        """
        It should return the terrain
        """
        terrain = scene.add_entity(
            morph=gs.morphs.Terrain(
                height_field = height_field,
                pos=(0,0,0),
                horizontal_scale = horizontal_scale,
                vertical_scale = vertical_scale,

            ),
        )

        # For each cell in the height_field, add a liquid column if the cell is below water_level
        fail_count = 0
        fail_count_all = 0
        count = 0
        for y, row in enumerate(height_field):
            for x, cell_value in enumerate(row):
                if cell_value < water_level:
                    lowx = horizontal_scale * x
                    lowy = horizontal_scale * y
                    lowz = cell_value * 0.01
                    height = (water_level - cell_value) * 0.01
                    try:
                        add_liquid_column(scene, lowx, lowy, lowz, height)
                    except Exception as e:
                        # Only increment fail_count if our 'height' is greater than the horizontal scale
                        # (following your original logic)
                        fail_count_all += 1
                        if height > horizontal_scale:
                            fail_count += 1
                        print(
                            f"Error adding liquid column: "
                            f"lowx={lowx}, lowy={lowy}, lowz={lowz + 0.5}, "
                            f"height={height}. Exception: {e}"
                        )

                    count += 1

        print(f'Fail count: {fail_count}')
        print(f'Fail count all: {fail_count_all}')
        print(f'Count all water column attempts: {count}')
        
        return terrain

    def create_scene_with_wave(scene, height_field, water_level, wave_direction, wave_width, wave_height):
        """
        Creates a terrain entity in the scene and adds liquid columns based on the height_field and water_level,
        with an added wave_offset that linearly interpolates from a border (wave_direction) inward.
        
        wave_direction: one of ["x-min", "x-max", "y-min", "y-max"]
        wave_width:     integer number of cells over which the wave height goes from wave_height down to 0
        wave_height:    the maximum extra water height (at the border) to be added to water_level
        """

        # Create the terrain
        terrain = scene.add_entity(
            morph=gs.morphs.Terrain(
                height_field=height_field,
                # pos=(-0.01 , -0.01 , -0.01),
                pos=(0,0,0),
                horizontal_scale=horizontal_scale,
                vertical_scale=vertical_scale
            ),
        )

        # Safely compute the domain dimensions (in cells)
        Ny = len(height_field)
        Nx = len(height_field[0]) if Ny > 0 else 0

        fail_count = 0
        fail_count_all = 0
        count = 0

        # Iterate over each cell of the height_field
        for y, row in enumerate(height_field):
            for x, cell_value in enumerate(row):

                # 1) Compute the wave offset based on wave_direction and wave_width
                wave_offset = 0.0

                if wave_direction == "x-min":
                    # Wave starts at x=0 and extends 'wave_width' cells into the domain
                    if x <= wave_width:
                        # Linearly interpolate from wave_height at x=0 to 0 at x=wave_width
                        wave_offset = wave_height * (1 - x / wave_width)

                elif wave_direction == "x-max":
                    # Wave starts at the right edge (x = Nx-1) and extends left 'wave_width' cells
                    if x >= Nx - wave_width and Nx > 0:
                        # Distance from right edge: (Nx - 1 - x)
                        wave_offset = wave_height * (1 - ((Nx - 1 - x) / wave_width))

                elif wave_direction == "y-min":
                    # Wave starts at y=0 and extends 'wave_width' cells upwards
                    if y <= wave_width:
                        wave_offset = wave_height * (1 - y / wave_width)

                elif wave_direction == "y-max":
                    # Wave starts at the top edge (y = Ny-1) and extends 'wave_width' cells down
                    if y >= Ny - wave_width and Ny > 0:
                        wave_offset = wave_height * (1 - ((Ny - 1 - y) / wave_width))

                # 2) Compute the *effective* water level at this cell (base + wave_offset)
                effective_water_level = water_level + wave_offset

                # 3) Check if this cell is below the effective water level
                if cell_value < effective_water_level:
                    # Convert x and y to world coordinates
                    lowx = horizontal_scale * x
                    lowy = horizontal_scale * y

                    # Scale the cell's terrain height and fluid height as needed
                    lowz = cell_value * 0.01
                    height = (effective_water_level - cell_value) * 0.01

                    try:
                        add_liquid_column(scene, lowx, lowy, lowz, height)
                    except Exception as e:
                        # Only increment fail_count if our 'height' is greater than the horizontal scale
                        # (following your original logic)
                        fail_count_all += 1
                        if height > horizontal_scale:
                            fail_count += 1
                        print(
                            f"Error adding liquid column: "
                            f"lowx={lowx}, lowy={lowy}, lowz={lowz + 0.5}, "
                            f"height={height}. Exception: {e}"
                        )

                    count += 1

        print(f'Fail count: {fail_count}')
        print(f'Fail count all: {fail_count_all}')
        print(f'Count all water column attempts: {count}')

        return terrain


    def add_liquid_column(scene, lowx, lowy, lowz, height):
        # This function assumes that the height is already in the same unit as the horizontal and vertical scale
        # print(f"lowx: {lowx}, lowy: {lowy}, lowz: {lowz}, height: {height}")
        scene.add_entity(
            material=gs.materials.PBD.Liquid(sampler="regular"),
            morph=gs.morphs.Box(
                # we add one to prevent the liquid from exploding and being unable to add above the terrain
                lower=(lowx,lowy,lowz + 0.01),  # center of each column
                upper=(lowx + horizontal_scale, lowy + horizontal_scale, lowz + height),       # each column is 0.1 wide, 0.4 tall, 0.4 deep
            ),
            surface=gs.surfaces.Default(
                color=(0.4, 0.8, 1.0),
                vis_mode='particle',
            ),
            # surface=gs.surfaces.Water()
        )

    def create_ramp(width, length, height):
        """
        Width is the size of the channel.
        Length the length of the ramp.
        Height in meters.
        Scale is the horizontal/vertical_scale.

        Create a 2D array of shape (width x length), where:
          - The first row is filled with `height`.
          - The last row is filled with `0`.
          - Rows in between are linearly interpolated between `height` and `0`.
          - Then, all values are multiplied by `scale`.
        
        Args:
            width (int)  : Number of rows in the resulting 2D array.
            length (int) : Number of columns in the resulting 2D array.
            height (float): The value at the top row (linearly scales down to 0).
            scale (float) : The scale factor applied to all values in the array.
        
        Returns:
            numpy.ndarray: A 2D NumPy array of shape (width, length) with the
                           specified properties.
        """
        # Create an array of row-values from `height` down to 0
        row_values = np.linspace(height, 0, length)
        
        # Initialize the 2D array
        arr = np.zeros((length, width), dtype=float)
        
        # For each row, fill all its columns with the interpolated value
        for i in range(length):
            arr[i, :] = row_values[i]
        
        return arr

    def add_ramp(scene):
        ramp_hf = create_ramp(TERRAIN_WIDTH, int(TERRAIN_WIDTH * 2.5), 200)

        # for row in ramp_hf:
        #     print(row)
        print(len(ramp_hf))
        print(len(ramp_hf[0]))

        terrain = scene.add_entity(
            morph=gs.morphs.Terrain(
                height_field=ramp_hf,
                pos=(-1 * TERRAIN_LENGTH * horizontal_scale * RAMP_SCALE, 0, WATER_LEVEL * horizontal_scale),
                # pos=(-1 * TERRAIN_LENGTH * horizontal_scale * RAMP_SCALE, 0, 0),
                horizontal_scale=horizontal_scale,
                vertical_scale=vertical_scale
            ),
        )

        return terrain

    # terrain = create_scene_with_wave(scene, height_field, WATER_LEVEL, "x-min", 20, 20)
    terrain = create_scene(scene, height_field, WATER_LEVEL)
    terrain_ramp = add_ramp(scene)

    # liquid = scene.add_entity(
    #     material=gs.materials.SPH.Liquid(rho=1.0, density_relaxation=1, viscosity_relaxation=0.002,sampler="regular"),
    #     morph=gs.morphs.Box(lower=(3, 3, 2), upper=(3.3, 3.3, 4.9)),
    # )
    ########################## build ##########################

    cam = scene.add_camera(
        res    = (1280, 960),
        pos    = (-1,1, 1),
        lookat = (0, 0, 0.2),
        fov    = 60,
        GUI    = False
    )


    # scene.build(n_envs=1)
    scene.build()
    cam.start_recording()

    # height_field = terrain.geoms[0].metadata["height_field"]
    # rows = horizontal_scale * torch.arange(0, height_field.shape[0], 1, device="cuda").unsqueeze(1).repeat(
    #     1, height_field.shape[1]
    # ).unsqueeze(-1)
    # cols = horizontal_scale * torch.arange(0, height_field.shape[1], 1, device="cuda").unsqueeze(0).repeat(
    #     height_field.shape[0], 1
    # ).unsqueeze(-1)
    # heights = vertical_scale * torch.tensor(height_field, device="cuda").unsqueeze(-1)
    # poss = torch.cat([rows, cols, heights], dim=-1).reshape(-1, 3)

    def create_parabolic_trajectory(start, end, n):
        """
        BTW if n is even it will have one less value in output
        Whereas if n is odd it will have the correct amount of values in output

        Create a parabolic array of n position values starting at 'start',
        ramping up (or down) to the midpoint ((start + end)/2), then ramping
        down (or up) to 'end' in a mirrored fashion.

        :param start: The starting value (float).
        :param end: The ending value (float).
        :param n: Total number of position values to generate (int).
        :return: A NumPy array of length n containing the parabolic trajectory.
        """

        # If we have fewer than 2 points, just return trivial array
        if n <= 1:
            return np.array([start] * n)
        elif n == 2:
            return np.array([start, end])
        
        # Calculate midpoint (halfway in value, not index)
        midpoint = (start + end) / 2.0
        
        # Number of points in the "first half" (including the midpoint)
        # so that the total will be n once we add the second half.
        first_half_count = (n + 1) // 2  # works for both even and odd n
        
        # Create a normalized time array from 0 to 1, for the first half
        # to form a parabolic ramp from start to midpoint:
        #    position = start + (midpoint - start) * (t^2)
        t = np.linspace(0.0, 1.0, first_half_count)
        positions_first_half = start + (midpoint - start) * (t**2)
        
        # Now compute the diffs in the first half
        diffs = np.diff(positions_first_half)
        
        # Mirror those diffs (reverse them) to ramp from midpoint down to end
        reversed_diffs = diffs[::-1]
        
        # Build the second half by cumulatively adding reversed diffs
        # starting from the last value of the first half (the midpoint).
        # We'll skip the very first element from this sequence so we don't
        # duplicate the midpoint.
        second_half_vals = [positions_first_half[-1]]
        for d in reversed_diffs:
            second_half_vals.append(second_half_vals[-1] + d)
        
        # second_half_vals now includes the midpoint as the first element
        # plus (first_half_count - 1) more points. We only need (n - first_half_count)
        # points to complete the total of n positions, *excluding* the repeated midpoint.
        needed_in_second_half = n - first_half_count
        # skip the first element (the repeated midpoint) and take the next needed_in_second_half
        positions_second_half = second_half_vals[1 : 1 + needed_in_second_half]
        
        # Concatenate both halves
        result = np.concatenate([positions_first_half, positions_second_half])
        
        return result

    positions = create_parabolic_trajectory(0,-1,501)
    
    # scene.draw_debug_spheres(poss=poss, radius=0.05, color=(0, 0, 1, 0.7))
    for i in range(500):
        # time.sleep(0.5)
        terrain.set_pos(positions[i])
        scene.step()

        cam.render()

    # stop recording and save video. If `filename` is not specified, a name will be auto-generated using the caller file name.
    cam.stop_recording(save_to_filename='s9.mp4', fps=60)


if __name__ == "__main__":
    main()
