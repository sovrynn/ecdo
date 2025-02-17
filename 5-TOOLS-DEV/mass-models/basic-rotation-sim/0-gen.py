import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

###############################################################################
# 1. Define helpers for quaternions and the rigid body ODEs
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
    # Quaternion representing angular velocity
    # (0, ωx, ωy, ωz)
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
    
    # Extract moments of inertia
    # I1, I2, I3 = moment of inertia about body axes e1, e2, e3
    
    # --- 1) Compute dq/dt ---
    dqdt = quat_omega_dot(q, omega)
    
    # --- 2) Compute dw/dt using Euler's equations in the body frame ---
    # I1 dωx/dt = (I2 - I3) ωy ωz
    # I2 dωy/dt = (I3 - I1) ωz ωx
    # I3 dωz/dt = (I1 - I2) ωx ωy
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
I1, I2, I3 = 1.0, 2.0, 3.0   # moments of inertia
# Initial quaternion (no rotation from global frame)
q_init = np.array([1.0, 0.0, 0.0, 0.0])
# Initial angular velocity in body frame
omega_init = np.array([2.0, 1.0, 0.0])  # rad/s

# Combine into initial state
y0 = np.concatenate([q_init, omega_init])

# Time span for integration
t_span = (0, 10)  # from t=0 to t=10 seconds
t_eval = np.linspace(t_span[0], t_span[1], 300)  # for output times

###############################################################################
# 3. Solve the ODE
###############################################################################
sol = solve_ivp(euler_equations, t_span, y0, t_eval=t_eval, args=(I1, I2, I3),
                rtol=1e-9, atol=1e-9)

# Extract solution
q_solutions = sol.y[0:4, :].T   # shape (len(t_eval), 4)
omega_solutions = sol.y[4:7, :].T  # shape (len(t_eval), 3)

# Normalize quaternions (small drifts may occur numerically)
for i in range(len(q_solutions)):
    q_solutions[i] = normalize_quaternion(q_solutions[i])


###############################################################################
# 4. Prepare data for 3D visualization
###############################################################################
# We'll represent a simple rectangular box in its body frame (centered at origin).
# Dimensions of box: length 2a x 2b x 2c (just for example)
a, b, c = 1.0, 0.5, 0.3
# 8 corners of the box in the body frame:
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

# Function to convert a quaternion q and a vector v (in body frame) into the global frame
def rotate_vector_by_quaternion(q, v):
    """
    Rotates vector v in the body frame to global frame using quaternion q.
    q is assumed to be [w, x, y, z] in the standard Hamilton convention.
    Rotation is p' = q * p * q_conjugate, with p = (0, v).
    """
    # Represent v as a pure quaternion
    p = np.concatenate([[0.0], v])
    # q_conjugate
    q_conj = np.array([q[0], -q[1], -q[2], -q[3]])
    # rotate
    return quat_mult(quat_mult(q, p), q_conj)[1:]  # discard the w-part

def get_box_in_global_frame(q):
    """
    Given the quaternion q, rotate all corners of the box to global frame.
    """
    global_points = []
    for corner in box_body:
        global_points.append(rotate_vector_by_quaternion(q, corner))
    return np.array(global_points)


###############################################################################
# 5. Set up the animation using matplotlib
###############################################################################
fig = plt.figure(figsize=(6,6))
ax = fig.add_subplot(111, projection='3d')
ax.set_xlim([-2, 2])
ax.set_ylim([-2, 2])
ax.set_zlim([-2, 2])
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
ax.set_title('Rigid Body Rotation')

# We'll plot the box by connecting its corners with lines:
# Edges of a cuboid:
edges = [
    (0,1), (0,2), (0,4),  (1,3), (1,5),  (2,3), (2,6),
    (3,7), (4,5), (4,6), (5,7),  (6,7)
]

# Initialize line objects
lines = []
for _ in edges:
    line, = ax.plot([], [], [], 'b-', linewidth=2)
    lines.append(line)

def init():
    # initialization function
    for line in lines:
        line.set_data([], [])
        line.set_3d_properties([])
    return lines

def update(frame):
    # frame is the index in q_solutions
    q = q_solutions[frame]
    # get box corners in global frame
    corners_global = get_box_in_global_frame(q)
    
    # update each edge
    for line, (start_idx, end_idx) in zip(lines, edges):
        xdata = [corners_global[start_idx, 0], corners_global[end_idx, 0]]
        ydata = [corners_global[start_idx, 1], corners_global[end_idx, 1]]
        zdata = [corners_global[start_idx, 2], corners_global[end_idx, 2]]
        line.set_data(xdata, ydata)
        line.set_3d_properties(zdata)
    
    return lines

ani = FuncAnimation(fig, update, frames=len(t_eval), init_func=init, blit=False, interval=30)

plt.show()

ani.save("rotation.mp4") 