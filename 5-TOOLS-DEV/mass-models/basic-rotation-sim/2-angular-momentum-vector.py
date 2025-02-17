import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

###############################################################################
# 1. Quaternion and ODE helper functions
###############################################################################

def quat_mult(q, r):
    """
    Multiply two quaternions q and r.
    q, r are arrays of shape (4,): [q0, q1, q2, q3]
    Returns the product quaternion p = q*r
    """
    w0, x0, y0, z0 = q
    w1, x1, y1, z1 = r
    
    w = w0*w1 - x0*x1 - y0*y1 - z0*z1
    x = w0*x1 + x0*w1 + y0*z1 - z0*y1
    y = w0*y1 - x0*z1 + y0*w1 + z0*x1
    z = w0*z1 + x0*y1 - y0*x1 + z0*w1
    return np.array([w, x, y, z])

def quat_omega_dot(q, omega):
    """
    Given the current quaternion q and angular velocity omega (in body frame),
    return dq/dt in global frame.
    dq/dt = 0.5 * [0, omega] ⨂ q
    """
    w_omega = np.array([0.0, omega[0], omega[1], omega[2]])
    dqdt = 0.5 * quat_mult(w_omega, q)
    return dqdt

def euler_equations(t, y, I1, I2, I3):
    """
    ODE system for a rigid body with principal moments of inertia I1, I2, I3.
    State y = [q0, q1, q2, q3, wx, wy, wz], where q is quaternion, w is angular velocity.
    Returns dydt.
    """
    q0, q1, q2, q3, wx, wy, wz = y
    q = np.array([q0, q1, q2, q3])
    omega = np.array([wx, wy, wz])
    
    # Quaternion derivative
    dqdt = quat_omega_dot(q, omega)
    
    # Euler's equations in the body frame
    dwx_dt = ((I2 - I3)/I1) * wy * wz
    dwy_dt = ((I3 - I1)/I2) * wz * wx
    dwz_dt = ((I1 - I2)/I3) * wx * wy
    
    return np.concatenate([dqdt, [dwx_dt, dwy_dt, dwz_dt]])

def normalize_quaternion(q):
    """
    Normalize the quaternion to ensure it remains a unit quaternion.
    """
    norm_q = np.linalg.norm(q)
    if norm_q < 1e-15:
        return np.array([1.0, 0.0, 0.0, 0.0])
    return q / norm_q

###############################################################################
# 2. Define initial conditions and parameters
###############################################################################
I1, I2, I3 = 1.0, 2.0, 3.0   # Moments of inertia
# Initial quaternion (no rotation from global frame)
q_init = np.array([1.0, 0.0, 0.0, 0.0])
# Initial angular velocity in body frame
omega_init = np.array([2.0, 1.0, 0.0])  # rad/s

# Combine into initial state
y0 = np.concatenate([q_init, omega_init])

# Time span for integration
t_span = (0, 10)  # from t=0 to t=10
t_eval = np.linspace(t_span[0], t_span[1], 300)  # sampling times

###############################################################################
# 3. Solve the ODE
###############################################################################
sol = solve_ivp(
    euler_equations,
    t_span, 
    y0, 
    t_eval=t_eval, 
    args=(I1, I2, I3),
    rtol=1e-9, 
    atol=1e-9
)

# Extract solution
q_solutions = sol.y[0:4, :].T      # shape (len(t_eval), 4)
omega_solutions = sol.y[4:7, :].T  # shape (len(t_eval), 3)

# Normalize quaternions to avoid drift
for i in range(len(q_solutions)):
    q_solutions[i] = normalize_quaternion(q_solutions[i])

###############################################################################
# 4. Define geometry for visualization (box and axes)
###############################################################################
# Rectangular box corner coordinates in the BODY frame
a, b, c = 1.0, 0.5, 0.3
box_body = np.array([
    [ a,  b,  c],
    [ a,  b, -c],
    [ a, -b,  c],
    [ a, -b, -c],
    [-a,  b,  c],
    [-a,  b, -c],
    [-a, -b,  c],
    [-a, -b, -c]
])

# Edges of the cuboid
edges = [
    (0,1), (0,2), (0,4),
    (1,3), (1,5),
    (2,3), (2,6),
    (3,7),
    (4,5), (4,6),
    (5,7),
    (6,7)
]

# Principal axes in the BODY frame
e1_body = np.array([1.0, 0.0, 0.0])
e2_body = np.array([0.0, 1.0, 0.0])
e3_body = np.array([0.0, 0.0, 1.0])

###############################################################################
# 5. Rotation helper
###############################################################################
def rotate_vector_by_quaternion(q, v):
    """
    Rotates vector v in the body frame to global frame using quaternion q.
    q is [w, x, y, z].
    p' = q * p * q_conjugate, with p = (0, v).
    """
    p = np.concatenate([[0.0], v])  # pure quaternion
    q_conj = np.array([q[0], -q[1], -q[2], -q[3]])
    return quat_mult(quat_mult(q, p), q_conj)[1:]  # discard scalar part

def get_box_in_global_frame(q):
    """
    Rotate box corners (BODY -> GLOBAL).
    """
    return np.array([rotate_vector_by_quaternion(q, corner) for corner in box_body])

###############################################################################
# 6. Set up the animation
###############################################################################
fig = plt.figure(figsize=(7, 7))
ax = fig.add_subplot(111, projection='3d')

ax.set_xlim([-2, 2])
ax.set_ylim([-2, 2])
ax.set_zlim([-2, 2])
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
ax.set_title('Rigid Body Rotation with Principal Axes & Angular Momentum')

# We'll plot the edges of the box as before:
lines_box = []
for _ in edges:
    line, = ax.plot([], [], [], 'b-', linewidth=2)
    lines_box.append(line)

# We'll also plot:
#   - 3 lines for the principal axes (red, green, blue)
#   - 1 line for the angular velocity axis (magenta)
#   - 1 line for the angular momentum (black)
colors_axes = ['r', 'g', 'b', 'm', 'k']
labels_axes = [
    'Principal Axis 1 (I1)',
    'Principal Axis 2 (I2)',
    'Principal Axis 3 (I3)',
    'Angular Velocity \u03C9',
    'Angular Momentum L'
]
lines_axes = []
for color, label in zip(colors_axes, labels_axes):
    ln, = ax.plot([], [], [], color=color, linewidth=3, label=label)
    lines_axes.append(ln)

# Combine all line objects (so we can init and update them together)
all_lines = lines_box + lines_axes

# Add a legend that shows the axes
ax.legend(loc='upper left')

def init():
    # Initialize lines to empty
    for line in all_lines:
        line.set_data([], [])
        line.set_3d_properties([])
    return all_lines

def update(frame):
    """
    For each frame:
      1) Rotate the box corners and update box edges.
      2) Rotate principal axes e1,e2,e3 and update their lines.
      3) Compute and rotate angular velocity axis (omega).
      4) Compute and rotate angular momentum L.
    """
    q = q_solutions[frame]
    omega_body = omega_solutions[frame]
    
    # --- 1) Update box edges ---
    corners_global = get_box_in_global_frame(q)
    for line, (i1, i2) in zip(lines_box, edges):
        xdata = [corners_global[i1, 0], corners_global[i2, 0]]
        ydata = [corners_global[i1, 1], corners_global[i2, 1]]
        zdata = [corners_global[i1, 2], corners_global[i2, 2]]
        line.set_data(xdata, ydata)
        line.set_3d_properties(zdata)
    
    # --- 2) Rotate principal axes e1, e2, e3 into global frame ---
    e1_global = rotate_vector_by_quaternion(q, e1_body)
    e2_global = rotate_vector_by_quaternion(q, e2_body)
    e3_global = rotate_vector_by_quaternion(q, e3_body)
    # lines_axes[0..2] => e1, e2, e3
    for axis_global, line in zip([e1_global, e2_global, e3_global], lines_axes[:3]):
        line.set_data([0, axis_global[0]], [0, axis_global[1]])
        line.set_3d_properties([0, axis_global[2]])
    
    # --- 3) Angular velocity axis (lines_axes[3]) ---
    # We'll normalize omega for direction only
    omega_norm = np.linalg.norm(omega_body)
    if omega_norm > 1e-12:
        axis_body = omega_body / omega_norm
    else:
        axis_body = np.array([0.0, 0.0, 0.0])
    axis_global = rotate_vector_by_quaternion(q, axis_body)
    
    # Scale for visibility
    axis_tip = 1.5 * axis_global
    line_omega = lines_axes[3]
    line_omega.set_data([0, axis_tip[0]], [0, axis_tip[1]])
    line_omega.set_3d_properties([0, axis_tip[2]])
    
    # --- 4) Angular momentum L (lines_axes[4]) ---
    # In the body frame: L_body = (I1*wx, I2*wy, I3*wz)
    L_body = np.array([I1*omega_body[0], I2*omega_body[1], I3*omega_body[2]])
    L_norm = np.linalg.norm(L_body)
    if L_norm > 1e-12:
        L_body_unit = L_body / L_norm
    else:
        L_body_unit = np.array([0.0, 0.0, 0.0])
    
    # Rotate L into global frame
    L_global = rotate_vector_by_quaternion(q, L_body_unit)
    # Scale for visibility
    L_tip = 1.5 * L_global
    line_L = lines_axes[4]
    line_L.set_data([0, L_tip[0]], [0, L_tip[1]])
    line_L.set_3d_properties([0, L_tip[2]])
    
    return all_lines

ani = FuncAnimation(
    fig, 
    update, 
    frames=len(t_eval), 
    init_func=init, 
    blit=False, 
    interval=30
)

plt.show()

ani.save("rotation.mp4") 