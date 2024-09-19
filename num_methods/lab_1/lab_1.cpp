#include <iostream>
#include <cmath>

using namespace std;

short k = 21;
float s = 0.02f*k;

float matrix[4][4] = {
    {8.3f, 2.62f+s, 4.1f, 1.9f},
    {3.92f, 8.45f, 7.78f-s, 2.46f},
    {3.77f, 7.21f+s, 8.04f, 2.28f},
    {2.21f, 3.65f-s, 1.69f, 6.69f}
};

float gauss_determinant(float mat[4][4], int n) {
    float det = 1.0f;

    for (int i = 0; i < n; i++) {
        if (mat[i][i] == 0) {
            cout << "0 on the main diagonal" << endl;
            return 0;
        }

        for (int j = i + 1; j < n; j++) {
            float ratio = mat[j][i] / mat[i][i];
            if (ratio!=0.0){
            for (int k = i; k < n; k++) {
                mat[j][k] -= ratio * mat[i][k];
            }
            }
        }
    }

    for (int i = 0; i < n; i++) {
        det *= mat[i][i];
    }

    return det;
}

int main() {
    float det = gauss_determinant(matrix, 4);

    if (det != 0) {
        cout << "\n\nDeterminant: " << det <<"\n\n" << endl;
    }

    return 0;
}
