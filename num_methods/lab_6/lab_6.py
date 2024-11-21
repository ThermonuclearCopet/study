import numpy as np
import matplotlib.pyplot as plt


C1 = 10e-6 
C2 = 20e-6
Lmax = 2
Lmin = 0.2
Imin = 1
Imax = 2
R1 = 83
R2 = 93
R3 = 80


def L2(i2):
    if abs(i2) <= Imin:
        return Lmax
    else:
        return Lmin


def u1(t, a=0.004):
    T = 2 * a
    t_mod = t % T
    if 0 <= t_mod < a:
        return 10 * t_mod / a
    elif a <= t_mod < 2 * a:
        return 10 - 20 * (t_mod - a) / a
    elif 2 * a <= t_mod < T:
        return -10 + 10 * (t_mod - 2 * a) / a
    else:
        return 0


def f(t, y):
    i1, q1, i2, q2 = y
    L2_val = L2(i2)


    di2_dt = (u1(t) - R1 * i1 - q1 / C1 - L2_val * i2) / L2_val
    

    di1_dt = (q2 / C2 + R2 * i2 + R3 * i2) / L2_val
    

    dq1_dt = i1
    dq2_dt = i2

    return np.array([di1_dt, dq1_dt, di2_dt, dq2_dt])

def runge_kutta_3(y0, t0, t_end, h):
    t = t0
    y = y0
    times = [t]
    results = [y]
    u2_values = []

    while t < t_end:
        i2 = y[2]
        q2 = y[3]
        di2_dt = (u1(t) - R1 * y[0] - y[1] / C1 - L2(i2) * i2) / L2(i2)
        u2 = L2(i2) * di2_dt + R2 * i2 + q2 / C2
        u2_values.append(u2)


        K1 = h * f(t, y)
        K2 = h * f(t + h / 3, y + K1 / 3)
        K3 = h * f(t + 2 * h / 3, y + 2 * K2 / 3)
        y = y + (K1 + 3 * K3) / 4
        t += h

        times.append(t)
        results.append(y)


    i2 = y[2]
    q2 = y[3]
    di2_dt = (u1(t) - R1 * y[0] - y[1] / C1 - L2(i2) * i2) / L2(i2)
    u2 = L2(i2) * di2_dt + R2 * i2 + q2 / C2
    u2_values.append(u2)

    return np.array(times), np.array(results), np.array(u2_values)


y0 = np.array([0, 0, 0, 0])
t0 = 0
t_end = 0.02
h = 1e-5


times, results, u2_values = runge_kutta_3(y0, t0, t_end, h)


i1 = results[:, 0]
q1 = results[:, 1]
i2 = results[:, 2]
q2 = results[:, 3]


u_C1 = q1 / C1
u_C2 = q2 / C2


u1_values = [u1(t) for t in times]


plt.figure(figsize=(14, 10))


plt.subplot(2, 2, 1)
plt.plot(times, u1_values, label="u1(t)", color="blue")
plt.xlabel("Час (s)")
plt.ylabel("u1 (V)")
plt.title("Вхідна напруга u1(t)")
plt.grid()
plt.legend()


plt.subplot(2, 2, 2)
plt.plot(times, u_C1, label="u_C1(t)", color="orange")
plt.plot(times, u_C2, label="u_C2(t)", color="green")
plt.xlabel("Час (s)")
plt.ylabel("Напруга (V)")
plt.title("Напруги на конденсаторах")
plt.grid()
plt.legend()


plt.subplot(2, 2, 3)
plt.plot(times, i1, label="i1(t)", color="red")
plt.plot(times, i2, label="i2(t)", color="purple")
plt.xlabel("Час (s)")
plt.ylabel("Струм (A)")
plt.title("Струми через індуктивності")
plt.grid()
plt.legend()


plt.subplot(2, 2, 4)
plt.plot(times, u2_values, label="u2(t)", color="brown")
plt.xlabel("Час (s)")
plt.ylabel("u2 (V)")
plt.title("Вихідна напруга u2(t)")
plt.grid()
plt.legend()

plt.tight_layout()
plt.show()