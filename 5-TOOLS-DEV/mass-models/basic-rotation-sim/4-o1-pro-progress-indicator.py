import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from tqdm import tqdm

# --------------------------------------------------
# 1) Define the rigid body parameters and initial conditions
# --------------------------------------------------

# Principal moments of inertia
I1, I2, I3 = 50.0, 1.0, 0.5  # Example values

# Initial angular velocity in the body frame (rad/s)
omega0_body = np.array([0.1, 0.1, 20])

# Initial orientation as a quaternion (w, x, y, z)
# Start with no rotation: identity quaternion
q0 = np.array([1.0, 0.0, 0.0, 0.0])

# Combine everything into a state vector: [q0, q1, q2, q3, w1, w2, w3]
state0 = np.concatenate((q0, omega0_body))

# Total integration time (seconds)
t_max = 100.0
# Number of steps for integration
# wtf? I think reducing this makes the animation faster
num_steps = 1000
# Time array
time_eval = np.linspace(0, t_max, num_steps)

# --------------------------------------------------
# 2) Define ODE functions
# --------------------------------------------------

def euler_equations(t, state):
    """
    ODE function for the state = [q0, q1, q2, q3, w1, w2, w3].
    Return time derivatives of the state.
    """
    # Unpack state
    q = state[0:4]      # quaternion
    w = state[4:7]      # angular velocity in body frame
    qw, qx, qy, qz = q
    w1, w2, w3 = w

    # 1) Quaternion kinematics: dq/dt = 0.5 * Omega(q) * w
    dqdt = 0.5 * np.array([
        - (qx*w1 + qy*w2 + qz*w3),
         qw*w1 + qy*w3 - qz*w2,
         qw*w2 - qx*w3 + qz*w1,
         qw*w3 + qx*w2 - qy*w1
    ])

    # 2) Euler's equations in the body frame (no external torque):
    #    I1 * dw1/dt = (I2 - I3)* w2 * w3
    #    I2 * dw2/dt = (I3 - I1)* w3 * w1
    #    I3 * dw3/dt = (I1 - I2)* w1 * w2
    dw1dt = ((I2 - I3) * w2 * w3) / I1
    dw2dt = ((I3 - I1) * w3 * w1) / I2
    dw3dt = ((I1 - I2) * w1 * w2) / I3

    return np.concatenate((dqdt, [dw1dt, dw2dt, dw3dt]))

def quat_to_rotation_matrix(q):
    """
    Convert quaternion q = [qw, qx, qy, qz] to a 3x3 rotation matrix.
    """
    qw, qx, qy, qz = q / np.linalg.norm(q)  # ensure normalized
    R = np.array([
        [1 - 2*(qy**2 + qz**2),     2*(qx*qy - qz*qw),         2*(qx*qz + qy*qw)],
        [2*(qx*qy + qz*qw),         1 - 2*(qx**2 + qz**2),     2*(qy*qz - qx*qw)],
        [2*(qx*qz - qy*qw),         2*(qy*qz + qx*qw),         1 - 2*(qx**2 + qy**2)]
    ])
    return R

def normalize_quaternion(q):
    """
    Normalize quaternion to ensure it is a unit quaternion.
    """
    return q / np.linalg.norm(q)


# --------------------------------------------------
# 3) Manual Integration with RK4 + tqdm progress bar
# --------------------------------------------------
def rk4_step(func, t, y, dt):
    """
    One step of 4th-order Runge-Kutta for y'(t) = func(t, y).
    """
    k1 = func(t,         y)
    k2 = func(t + 0.5*dt, y + 0.5*dt*k1)
    k3 = func(t + 0.5*dt, y + 0.5*dt*k2)
    k4 = func(t + dt,     y + dt*k3)
    return y + (dt/6.0)*(k1 + 2*k2 + 2*k3 + k4)

# We will store the entire solution at discrete times in arrays
states = np.zeros((num_steps, len(state0)))
states[0] = state0
t_vals = np.zeros(num_steps)
t_vals[0] = 0.0

# Integrate in a loop
for i in tqdm(range(num_steps-1), desc="Integrating", ncols=80):
    dt = time_eval[i+1] - time_eval[i]
    y_current = states[i]
    t_current = t_vals[i]
    y_next = rk4_step(euler_equations, t_current, y_current, dt)
    # Normalize the quaternion part to avoid drift
    y_next[0:4] = normalize_quaternion(y_next[0:4])

    states[i+1] = y_next
    t_vals[i+1] = t_current + dt

# Extract solution
q_sol = states[:, 0:4]  # shape (num_steps, 4)
w_sol = states[:, 4:7]  # shape (num_steps, 3)


# --------------------------------------------------
# 4) Determine the constant angular momentum in inertial frame
#    L_inertial = R(0)*[I1 w1, I2 w2, I3 w3]_body
# --------------------------------------------------
R0 = quat_to_rotation_matrix(q_sol[0])
L_body0 = np.array([I1*omega0_body[0],
                    I2*omega0_body[1],
                    I3*omega0_body[2]])
L_inertial = R0 @ L_body0  # constant in inertial frame
L_mag = np.linalg.norm(L_inertial)
# We'll scale the vector for drawing
L_scale = 1.5
L_vec = (L_inertial / L_mag) * L_scale

# --------------------------------------------------
# 5) Create a 3D shape (rectangular prism) to visualize the body
# --------------------------------------------------
lx, ly, lz = 2.0, 1.0, 0.5  # half-sizes along x,y,z in the BODY frame

corners_body = np.array([
    [+lx, +ly, +lz],
    [+lx, +ly, -lz],
    [+lx, -ly, +lz],
    [+lx, -ly, -lz],
    [-lx, +ly, +lz],
    [-lx, +ly, -lz],
    [-lx, -ly, +lz],
    [-lx, -ly, -lz],
])

edges = [
    (0,1), (0,2), (0,4),
    (7,3), (7,5), (7,6),
    (1,3), (1,5),
    (2,3), (2,6),
    (4,5), (4,6),
    # Some duplicates to fully outline the box
    (5,1), (6,2), (3,1), (3,2),
    (6,4), (5,4)
]

body_axes = np.eye(3)  # X, Y, Z in body frame

# --------------------------------------------------
# 6) Set up Matplotlib figure and animation
# --------------------------------------------------
fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot(111, projection='3d')

ax.set_xlim(-3, 3)
ax.set_ylim(-3, 3)
ax.set_zlim(-3, 3)
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
ax.set_title('Rotation of a 3D Rigid Body')

# Plot placeholders for the rotating box edges
lines = []
for _ in edges:
    line, = ax.plot([], [], [], 'k-')  # black edges
    lines.append(line)

# Plot placeholders for the principal axes
colors_axes = ['r', 'g', 'b']  # X=red, Y=green, Z=blue
body_axis_lines = []
for i in range(3):
    ax_line, = ax.plot([], [], [], '-', color=colors_axes[i], lw=2, 
                       label=f'Body Axis {["X","Y","Z"][i]}')
    body_axis_lines.append(ax_line)

# Plot the constant angular momentum vector in inertial frame
(L_line,) = ax.plot([], [], [], 'm-', lw=2, label='Angular Momentum')

# --------------------------------------------------
# 7) Update function for animation
# --------------------------------------------------
def update(frame):
    q = q_sol[frame]
    R = quat_to_rotation_matrix(q)  # body-to-inertial
    
    # 1) Update the rectangular prism edges
    corners_inertial = (R @ corners_body.T).T
    for line, (i1, i2) in zip(lines, edges):
        pt1 = corners_inertial[i1]
        pt2 = corners_inertial[i2]
        line.set_data_3d([pt1[0], pt2[0]],
                         [pt1[1], pt2[1]],
                         [pt1[2], pt2[2]])
    
    # 2) Update the body principal axes
    for i in range(3):
        axis_body = body_axes[:, i]  # e.g. [1,0,0], etc.
        axis_inertial = R @ axis_body
        body_axis_lines[i].set_data_3d(
            [0, axis_inertial[0]],
            [0, axis_inertial[1]],
            [0, axis_inertial[2]],
        )
    
    # 3) Angular momentum vector line (constant in inertial frame)
    L_line.set_data_3d([0, L_vec[0]],
                       [0, L_vec[1]],
                       [0, L_vec[2]])
    
    return lines + body_axis_lines + [L_line]

# --------------------------------------------------
# 8) Create the animation
# --------------------------------------------------
from matplotlib.animation import FuncAnimation

ani = FuncAnimation(fig, update, frames=num_steps, 
                    interval=200, blit=False, repeat=True)

ax.legend(loc='upper left')
plt.tight_layout()
plt.show()

ani.save("rotation-progress.mp4") 