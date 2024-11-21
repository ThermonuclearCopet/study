import numpy as np
import matplotlib.pyplot as plt

R1 = 5
R2 = 4
L1 = 0.01
C1 = 300e-6
C2 = 150e-6

U_max = 100
f = 50
t_end = 0.2
h = 0.00001

n_steps = int(t_end / h)

t = np.linspace(0, t_end, n_steps)
I1 = np.zeros(n_steps)
I2 = np.zeros(n_steps)
U2 = np.zeros(n_steps)
Uc1 = np.zeros(n_steps)

def u1(t):
    return U_max * np.sin(2 * np.pi * f * t)

for i in range(1, n_steps):
    U1 = u1(t[i-1])

    dI1_dt = (U1 - Uc1[i-1] - I1[i-1] * R1) / L1
    dI2_dt = (U2[i-1] - I2[i-1] * R2) / L1
    dU2_dt = (I1[i-1] - I2[i-1]) / C2
    dUc1_dt = I1[i-1] / C1

    I1_temp = I1[i-1] + h * dI1_dt
    I2_temp = I2[i-1] + h * dI2_dt
    U2_temp = U2[i-1] + h * dU2_dt
    Uc1_temp = Uc1[i-1] + h * dUc1_dt

    U1_next = u1(t[i])

    dI1_dt_next = (U1_next - Uc1_temp - I1_temp * R1) / L1
    dI2_dt_next = (U2_temp - I2_temp * R2) / L1
    dU2_dt_next = (I1_temp - I2_temp) / C2
    dUc1_dt_next = I1_temp / C1

    I1[i] = I1[i-1] + (h / 2) * (dI1_dt + dI1_dt_next)
    I2[i] = I2[i-1] + (h / 2) * (dI2_dt + dI2_dt_next)
    U2[i] = U2[i-1] + (h / 2) * (dU2_dt + dU2_dt_next)
    Uc1[i] = Uc1[i-1] + (h / 2) * (dUc1_dt + dUc1_dt_next)

plt.figure(figsize=(10, 6))
plt.plot(t, U2, label='U2 (C2)', color='blue')
#plt.plot(t, Uc1, label='Uc1 (C1)', color='red')
plt.xlabel('Time (s)')
plt.ylabel('U (v)')
plt.title('U(t)')
plt.grid(True)
plt.legend()
plt.show()
