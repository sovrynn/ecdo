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
            camera_pos=(-2,-2, 1),
            camera_lookat=(0, 0, 0.1),
            camera_fov=40,
        ),
        sim_options=gs.options.SimOptions(
            dt       = 4e-3,
            substeps = 10,
        ),
        sph_options=gs.options.SPHOptions(
            lower_bound   = (-0.5, -0.5, 0.0),
            upper_bound   = (6, 6, 6),
            particle_size = 0.01,
        ),
        vis_options=gs.options.VisOptions(
            visualize_sph_boundary = True,
            shadow=False,
            lights = [
        {"type": "directional", "dir": (-1, -1, -1), "color": (1.0, 1.0, 1.0), "intensity": 5.0},
        {"type": "directional", "dir": (1, 1, 0), "color": (1.0, 1.0, 1.0), "intensity": 5.0}
    ]
        ),
        show_viewer = True,
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
    height_field = np.zeros([40, 40])
    heights_range = np.arange(-10, 20, 10)
    height_field[5:35, 5:35] = 200 + np.random.choice(heights_range, (30, 30))
    ########################## entities ##########################
    rows, cols = 10, 10

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

    terrain = scene.add_entity(
        morph=gs.morphs.Terrain(
            height_field = height_field,
            pos=(0,0,0),
            horizontal_scale = 0.01,
            vertical_scale = 0.01
        ),
    )
    scene.add_entity(
        material=gs.materials.SPH.Liquid(sampler="regular"),
        morph=gs.morphs.Box(
            lower=(0.9,0.9,1.2),  # center of each column
            upper=(0.91, 0.91, 1.25),       # each column is 0.1 wide, 0.4 tall, 0.4 deep
        ),
        surface=gs.surfaces.Default(
            color=(0.4, 0.8, 1.0),
            vis_mode='particle',
        ),
    )
    # liquid = scene.add_entity(
    #     material=gs.materials.SPH.Liquid(rho=1.0, density_relaxation=1, viscosity_relaxation=0.002,sampler="regular"),
    #     morph=gs.morphs.Box(lower=(3, 3, 2), upper=(3.3, 3.3, 4.9)),
    # )
    ########################## build ##########################

    cam = scene.add_camera(
        res    = (1280, 960),
        pos    = (0,0, 1),
        lookat = (1, 1, 1),
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
    cam.stop_recording(save_to_filename='terrain_custom_sph3.mp4', fps=60)


if __name__ == "__main__":
    main()
