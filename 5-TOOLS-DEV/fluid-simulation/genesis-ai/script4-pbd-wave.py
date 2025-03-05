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

    def create_scene(scene, height_field, water_level):
        """
        It should return the terrain
        """
        terrain = scene.add_entity(
            morph=gs.morphs.Terrain(
                height_field = height_field,
                pos=(0,0,0),
                horizontal_scale = horizontal_scale,
                vertical_scale = vertical_scale
            ),
        )

        # For each cell in the height_field, add a liquid column if the cell is below water_level
        fail_count = 0
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
                        # fail_count += 1
                        if height > horizontal_scale:
                            fail_count += 1
                        print(f"Error adding liquid column: lowx={lowx}, lowy={lowy}, lowz={lowz + 0.5}, height={height}. Exception: {e}")

        print(f'Fail count: {fail_count}')
        
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
                pos=(0, 0, 0),
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

                    # 4) Attempt to add a liquid column
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
                lower=(lowx,lowy,lowz + 0.01),  # center of each column
                upper=(lowx + horizontal_scale, lowy + horizontal_scale, lowz + height),       # each column is 0.1 wide, 0.4 tall, 0.4 deep
            ),
            surface=gs.surfaces.Default(
                color=(0.4, 0.8, 1.0),
                vis_mode='particle',
            ),
            # surface=gs.surfaces.Water()
        )


    terrain = create_scene_with_wave(scene, height_field, 10, "x-min", 20, 20)
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

    height_field = terrain.geoms[0].metadata["height_field"]
    rows = horizontal_scale * torch.arange(0, height_field.shape[0], 1, device="cuda").unsqueeze(1).repeat(
        1, height_field.shape[1]
    ).unsqueeze(-1)
    cols = horizontal_scale * torch.arange(0, height_field.shape[1], 1, device="cuda").unsqueeze(0).repeat(
        height_field.shape[0], 1
    ).unsqueeze(-1)
    heights = vertical_scale * torch.tensor(height_field, device="cuda").unsqueeze(-1)

    poss = torch.cat([rows, cols, heights], dim=-1).reshape(-1, 3)
    # scene.draw_debug_spheres(poss=poss, radius=0.05, color=(0, 0, 1, 0.7))
    for _ in range(500):
        # time.sleep(0.5)
        scene.step()

        cam.render()

    # stop recording and save video. If `filename` is not specified, a name will be auto-generated using the caller file name.
    cam.stop_recording(save_to_filename='pbd2.mp4', fps=60)


if __name__ == "__main__":
    main()
