#include <iostream>
#include <cmath>

using namespace std;

float a = 0.1f;
float b = 16.0f;
float e = 0.01f;
float h = 0.1f;


float calculate_value(float x) {
    return log(x) + x;
}


void find_interval(float &a, float &b, float h) {
    float fa = calculate_value(a);
    b = a + h;
    float fb = calculate_value(b);

    while (fa * fb > 0 && b <= 16.0f) {
        a = b;
        fa = fb;
        b = a + h;
        fb = calculate_value(b);
    }
}


float find_root(float a, float b, float e) {
    float x, fa, fb, fx;

    do {
        x = (a + b) / 2.0f;
        fa = calculate_value(a);
        fx = calculate_value(x);

        if (fa * fx > 0) a = x;
        else b = x;
    } while (fabs(fx) >= e);

    return x;
}

int main() {
    find_interval(a, b, h);

    if (calculate_value(a) * calculate_value(b) <= 0) {
        float result = find_root(a, b, e);
        cout << "\n\n" << result << endl;
    } else cout << "Root not found" << endl;

    return 0;
}
