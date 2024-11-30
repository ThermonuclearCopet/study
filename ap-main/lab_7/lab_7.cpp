#include <iostream>
#include <cstdlib>
#include <ctime>
#include <climits>

using namespace std;

void fillMatrix(int** matrix, int size, int minVal, int maxVal) {
    srand(time(nullptr));
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            matrix[i][j] = minVal + rand() % (maxVal - minVal + 1);
        }
    }
}

void calculateDiagonalSums(int** matrix, int size, int* diagonalSums) {
    int center = size - 1;

    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            diagonalSums[center + (i - j)] += matrix[i][j];
        }
    }
}

int findMinSum(int* sums, int size) {
    int minSum = INT_MAX;
    for (int i = 0; i < size; ++i) {
        if (sums[i] < minSum) {
            minSum = sums[i];
        }
    }
    return minSum;
}


int findMaxSum(int* sums, int size) {
    int maxSum = INT_MIN;
    for (int i = 0; i < size; ++i) {
        if (sums[i] > maxSum) {
            maxSum = sums[i];
        }
    }
    return maxSum;
}


void printMatrix(int** matrix, int size) {
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            cout << matrix[i][j] << "\t";
        }
        cout << endl;
    }
}


void printArray(int* array, int size) {
    for (int i = 0; i < size; ++i) {
        cout << array[i] << " ";
    }
    cout << endl;
}

int main() {
    int size;
    cout << "Введіть розмір квадратної матриці: ";
    cin >> size;

    int** matrix = new int*[size];
    for (int i = 0; i < size; ++i) {
        matrix[i] = new int[size];
    }

    int diagonalCount = 2 * size - 1;
    int* diagonalSums = new int[diagonalCount]();

    fillMatrix(matrix, size, -20, 20);

    cout << "Заповнена матриця:\n";
    printMatrix(matrix, size);

    calculateDiagonalSums(matrix, size, diagonalSums);

    cout << "\nСуми на діагоналях:\n";
    printArray(diagonalSums, diagonalCount);

    int minSum = findMinSum(diagonalSums, diagonalCount);
    int maxSum = findMaxSum(diagonalSums, diagonalCount);

    cout << "\nНайменша сума: " << minSum << endl;
    cout << "Найбільша сума: " << maxSum << endl;

    for (int i = 0; i < size; ++i) {
        delete[] matrix[i];
    }
    delete[] matrix;
    delete[] diagonalSums;

    return 0;
}