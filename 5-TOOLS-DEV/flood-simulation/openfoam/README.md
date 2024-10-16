# OpenFOAM

[CFD (Computational fluid dynamics) simulator](https://www.openfoam.com/).

## AWS

https://aws.amazon.com/blogs/hpc/getting-the-best-openfoam-performance-on-aws/

## Basics

Using OpenFOAM has three steps:
1. Creating a mesh
2. Running the solver
3. Viewing the results

ECDO demands a sim with a custom terrain, and moving water/terrain. Let's see how we can accomplish that.

## Step 1: Mesh

The mesh defines the physical structures in the sim. It doesn't necessarily define fluid parameters such as volume or speed; you'd have to specify those in separate configuration files (`transportProperties`?).

In order to create custom terrain, we'll have to use a special kind of mesh, potentially `snappyHexMesh`. We'd have to define the terrain geometry in an STL file, potentially created by other software ie CAD software.

In order to create moving terrain, we need to use a dynamic mesh: http://www.wolfdynamics.com/training/movingbodies/OF2021/dynamicmeshes_2021_OF8.pdf
- Probably a sliding mesh, but potentially moving domain

## Step 2: Solver

OpenFOAM has several different solvers, suited with different capabilities, that optimize the sim to get the results. There are steady-state solvers, transient flow solvers, fluid compression solvers, etc. For our purposes it seems we'd have to use transient flow solvers to model the acceleration of the land into the water. Alternatively, we could simply give the water a starting velocity, although that might not be as accurate.

OpenFOAM's transient flow solver seems to be `pisoFoam`.

You need to define boundary conditions for the sim, such as velocity, pressure, temperature, etc. You also need to solve what variables you want to solver for ie velocity, pressure, turbulence, etc.

## Step 3: Viewing the results

ParaView.

## How to run

On Linux it runs natively, on other OSs you need to run the solver in a Docker container. Not that difficult.
