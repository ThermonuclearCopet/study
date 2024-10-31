#include <iostream>
#include <cmath>


double f(double x) {
    return x * sqrt(x * x + 3);
}

double simpson(double a, double b, int n) {
    double h = (b - a) / n;
    double integral = f(a) + f(b);

    for (int i = 1; i < n; i++) {
        double x = a + i * h;
        if (i % 2 == 0) {
            integral += 2 * f(x);
        } else {
            integral += 4 * f(x);
        }
    }

    integral *= h / 3;
    return integral;
}

int main() {
    double a = 1.0;
    double b = 2.0;
    int n = 1000;

    double result = simpson(a, b, n);
    std::cout << "result: " << result << std::endl;

    return 0;
}
