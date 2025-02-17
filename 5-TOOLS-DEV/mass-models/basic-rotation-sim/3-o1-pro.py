import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from scipy.integrate import solve_ivp

# --------------------------------------------------
# 1) Define the rigid body parameters and initial conditions
# --------------------------------------------------

# Principal moments of inertia
I1, I2, I3 = 50.0, 1.0, 1.0  # Example values

# Initial angular velocity in the body frame (rad/s)
omega0_body = np.array([0, 0.1, 0.8])

# Initial orientation as a quaternion (w, x, y, z)
# Start with no rotation: identity quaternion
q0 = np.array([1.0, 0.0, 0.0, 0.0])

# Combine everything into a state vector: [q0, q1, q2, q3, w1, w2, w3]
state0 = np.concatenate((q0, omega0_body))

# Total integration time (seconds)
t_max = 10.0
# Number of time steps (for storing solution, including 0)
num_steps = 50000
time_eval = np.linspace(0, t_max, num_steps)

# --------------------------------------------------
# 2) Define the equations of motion
# --------------------------------------------------

def quat_to_rotation_matrix(q):
    """
    Convert quaternion q = [qw, qx, qy, qz] to a 3x3 rotation matrix.
    Note: This assumes q is normalized.
    """
    qw, qx, qy, qz = q
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

def euler_equations(t, state, I1, I2, I3):
    """
    ODE function for the state = [q0, q1, q2, q3, w1, w2, w3].
    """
    # Unpack state
    q = state[0:4]      # quaternion
    w = state[4:7]      # angular velocity in body frame
    qw, qx, qy, qz = q
    w1, w2, w3 = w

    # 1) Quaternion kinematics: dq/dt = 0.5 * Omega(q) * w
    #    where Omega(q) * w = [0, w1, w2, w3]^T convolved with quaternion
    #    We can write it explicitly:
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

    return np.concatenate((dqdt, np.array([dw1dt, dw2dt, dw3dt])))

# --------------------------------------------------
# 3) Integrate the ODE
# --------------------------------------------------
sol = solve_ivp(
    fun=lambda t, y: euler_equations(t, y, I1, I2, I3),
    t_span=(0, t_max),
    y0=state0,
    t_eval=time_eval,
    rtol=1e-9, atol=1e-9
)

# Extract solution
q_sol = sol.y[0:4, :].T   # shape (num_steps, 4)
w_sol = sol.y[4:7, :].T   # shape (num_steps, 3)

# Normalize quaternions to prevent drift
for i in range(len(q_sol)):
    q_sol[i] = normalize_quaternion(q_sol[i])

# --------------------------------------------------
# 4) Determine the constant angular momentum in inertial frame
#    L_inertial = R(t)*[I1 w1, I2 w2, I3 w3]_body
#    but it's constant, so just compute from the initial state
# --------------------------------------------------
# Initial rotation matrix
R0 = quat_to_rotation_matrix(q_sol[0])
# L_body0 = [I1*w1, I2*w2, I3*w3]
L_body0 = np.array([I1*omega0_body[0],
                    I2*omega0_body[1],
                    I3*omega0_body[2]])
# Convert to inertial frame
L_inertial = R0 @ L_body0
# It's constant in the inertial frame (no external torques)

# --------------------------------------------------
# 5) Create a 3D shape (rectangular prism) to visualize the body
#    We'll define its vertices in the body frame centered at origin
# --------------------------------------------------
# Dimensions of the box
lx, ly, lz = 2.0, 1.0, 0.5  # half-lengths in x, y, z directions

# 8 corners of the rectangular prism in body coordinates
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

# List of edges (pairs of vertex indices)
edges = [
    (0,1), (0,2), (0,4),
    (7,3), (7,5), (7,6),
    (1,3), (1,5),
    (2,3), (2,6),
    (4,5), (4,6),
    (5,1), (6,2), (3,1), (3,2),
    (6,4), (5,4)
]
# Some edges are repeated in the above to ensure connectivity

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

# We also plot the three principal axes in the BODY frame (unit vectors)
# In the body frame, these are (1,0,0), (0,1,0), (0,0,1).
# We'll transform them into the inertial frame using the same rotation matrix
body_axes = np.eye(3)

# Plot placeholders for the principal axes
# Each axis will be drawn from origin to 1 unit in length
body_axis_lines = []
colors_axes = ['r', 'g', 'b']  # X=red, Y=green, Z=blue
for i in range(3):
    ax_line, = ax.plot([], [], [], '-', color=colors_axes[i], lw=2, 
                       label=f'Body Axis {["X","Y","Z"][i]}')
    body_axis_lines.append(ax_line)

# Plot the constant angular momentum vector in inertial frame
L_mag = np.linalg.norm(L_inertial)
# We'll scale it so it is visible on the same axes
L_scale = 1.5  # scale factor
L_vec = (L_inertial / L_mag) * L_scale

# We'll plot that as a single line from origin to L_inertial
(L_line,) = ax.plot([], [], [], 'm-', lw=2, label='Angular Momentum')

# --------------------------------------------------
# 7) Update function for animation
# --------------------------------------------------
def update(frame):
    # frame is the index in time
    q = q_sol[frame]
    R = quat_to_rotation_matrix(q)  # body-to-inertial
    
    # 1) Update the rectangular prism edges
    corners_inertial = (R @ corners_body.T).T  # rotate each corner
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
        # Draw from origin to axis_inertial
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
# It seems that reducing the interval speeds up the ani, and increasing it slows it down
ani = FuncAnimation(fig, update, frames=num_steps, 
                    interval=1, blit=False, repeat=True)

# Add a legend to label the principal axes & angular momentum
ax.legend(loc='upper left')

plt.tight_layout()
plt.show()

ani.save("rotation.mp4") 