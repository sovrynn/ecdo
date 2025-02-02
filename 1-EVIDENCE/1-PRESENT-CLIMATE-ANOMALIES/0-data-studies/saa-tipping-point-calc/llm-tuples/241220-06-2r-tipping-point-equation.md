## Explanation of the Tipping Point Equation

The paper uses an equation originally proposed by Voight (1989) to model systems that approach a tipping point. The equation is:

\[
\frac{d^{2}y}{dt^{2}} = a \left(\frac{dy}{dt}\right)^{\alpha}
\]

### Parameters:
- \( y(t) \): A measure of the system's cumulative "damage," deformation, or relevant quantity.
- \( \frac{dy}{dt} \): The rate of change of \( y(t) \).
- \( \frac{d^{2}y}{dt^{2}} \): The rate of acceleration of \( y(t) \)'s change.
- \( a \): A positive constant (empirical parameter).
- \( \alpha \): A positive constant (empirical parameter, typically between 1 and 2).

---

### Why It Models a Tipping Point:
- As the system nears a critical transition, \( y(t) \) accelerates, potentially becoming infinite or very large at a critical time \( t_c \).
- This behavior is characteristic of systems approaching a "critical transition" or tipping point, where small changes have disproportionately large effects.

---

### Resulting Curve and Behavior:
1. **Power-Law Growth**  
   Integrating the equation produces a solution that accelerates as \( t \to t_c \):

   \[
   y(t) = A + B(t_c - t)^p
   \]

   - \( t_c \): Critical time when the system transitions or "fails."
   - \( p = \frac{2-\alpha}{\alpha-1} \): Power-law exponent, often less than 1.
   - \( A \) and \( B \): Constants determined by the initial conditions and data.

2. **Log-Periodic Oscillations (Optional Refinement)**  
   In some systems, fluctuations around the power-law trend are modeled using:

   \[
   y(t) = A + B(t_c - t)^p \left\{ 1 + D\cos[2\pi f \ln(t_c - t) + \phi] \right\}
   \]

   - \( D \): Magnitude of fluctuations.
   - \( f \): Frequency of the oscillations.
   - \( \phi \): Phase shift.

---

### Graphical Interpretation:
- The curve of \( y(t) \) starts gently, showing slow growth.
- As \( t \to t_c \), \( y(t) \) accelerates sharply, creating a "tipping" shape where the system undergoes rapid and often irreversible change.

---

### Application in the Paper:
The authors applied this model to the geomagnetic field (e.g., South Atlantic Anomaly) and global sea level rise, finding strong evidence for critical behavior and predicting a "critical time" \( t_c \) around 2034. This time represents the point of no return for a potential geomagnetic transition.
