# 3D Mass Models

For rotational sims.

# Basic rotation sim applications

To model an object with three distinct principal moments of inertia rotating in 3D space, you’ll need a physics simulation or computational modeling software that supports rigid body dynamics. Here are some good options:

### 1. Physics Simulation & Numerical Computing:
- **MATLAB/Simulink** – You can use MATLAB’s ODE solvers (e.g., `ode45`) to solve Euler’s equations of motion for a rotating rigid body.
- **Python (SciPy, NumPy, SymPy, Matplotlib, VPython)** – SciPy’s `odeint` function can solve the Euler equations, and Matplotlib/VPython can visualize the motion.
- **Wolfram Mathematica** – Has built-in solvers for differential equations and supports symbolic computation for inertia tensor calculations.

### 2. Engineering & Multibody Dynamics Software:
- **ANSYS Mechanical** – Used for rigid/flexible body dynamics and can model rotational inertia effects.
- **MSC Adams** – A powerful multibody dynamics simulation tool.
- **COMSOL Multiphysics** – Can simulate rigid body motion with inertia effects.

### 3. Game Engines with Physics Engines:
- **Unity (with PhysX)** – Can model rigid body rotation and inertia effects in 3D.
- **Unreal Engine (with Chaos Physics)** – Supports complex physics-based simulations.
- **Blender (with Bullet Physics)** – Can be used for visualization and physics-based animations.

### 4. Specialized Physics Simulators:
- **Open Dynamics Engine (ODE)** – Open-source physics engine for simulating rigid body dynamics.
- **Bullet Physics** – Used in games, robotics, and physics simulations.

### 5. Custom Code Implementation:
If you want to solve the **Euler equations of motion** for an asymmetric rigid body numerically, you could write your own **Runge-Kutta** or **symplectic integrator** solver in Python, MATLAB, or C++.

# 3D Mass Models of Earth's Inner Layers (for a complete rotation sim)

There are several 3D mass models of Earth's inner layers, including the crust, mantle, outer core, and inner core. These models are used in geophysics, seismology, and planetary science to study Earth's internal structure, density variations, and geodynamic processes.

## **Types of 3D Mass Models**
### **1. Seismic Tomography Models**
These models use seismic wave velocities to infer density variations within Earth's interior.

- **PREM (Preliminary Reference Earth Model)** – A widely used 1D model but often extended into 3D.
- **LLNL-G3Dv3** – A 3D global seismic model.
- **GyPSuM (Global Lithosphere & Mantle Model)** – Incorporates temperature and composition.
- **SAW642AN, S40RTS, SEMUCB-WM1** – High-resolution seismic tomography models.

### **2. Geodynamic Models**
These models simulate mantle convection and core-mantle interactions based on density and heat flow.

- Used to understand plate tectonics, mantle plumes, and subduction zones.

### **3. Crustal and Lithospheric Models**
- **CRUST1.0** – A detailed model of Earth's crustal thickness.
- **Litho1.0** – Extends CRUST1.0 to include lithospheric structure.

## **Where to Find 3D Mass Models**
- **[Harvard Seismology Group](https://seismology.harvard.edu/)** – Provides global tomography models.
- **[IRIS (Incorporated Research Institutions for Seismology)](https://ds.iris.edu/ds/products/emc/)** – Hosts Earth models for research.
- **[LLNL (Lawrence Livermore National Laboratory)](https://geodynamics.org/)** – Provides 3D density models.
- **[CIG (Computational Infrastructure for Geodynamics)](https://geodynamics.org/)** – Offers open-source software for modeling.

Would you like help finding or visualizing a specific model?
