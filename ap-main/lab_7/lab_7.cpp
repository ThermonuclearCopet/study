#include <iostream>
#include <cstdlib>
#include <ctime>
#include <climits>

using namespace std;

// Функція для заповнення квадратної матриці випадковими числами
void fillMatrix(int** matrix, int size, int minVal, int maxVal) {
    srand(time(nullptr));
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            matrix[i][j] = minVal + rand() % (maxVal - minVal + 1);
        }
    }
}

// Функція для обчислення сум на всіх діагоналях
void calculateDiagonalSums(int** matrix, int size, int* diagonalSums) {
    int center = size - 1; // Індекс головної діагоналі у масиві diagonalSums

    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            diagonalSums[center + (i - j)] += matrix[i][j];
        }
    }
}

// Функція для пошуку мінімальної суми
int findMinSum(int* sums, int size) {
    int minSum = INT_MAX;
    for (int i = 0; i < size; ++i) {
        if (sums[i] < minSum) {
            minSum = sums[i];
        }
    }
    return minSum;
}

// Функція для пошуку максимальної суми
int findMaxSum(int* sums, int size) {
    int maxSum = INT_MIN;
    for (int i = 0; i < size; ++i) {
        if (sums[i] > maxSum) {
            maxSum = sums[i];
        }
    }
    return maxSum;
}

// Функція для виведення квадратної матриці
void printMatrix(int** matrix, int size) {
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            cout << matrix[i][j] << "\t";
        }
        cout << endl;
    }
}

// Функція для виведення одновимірного масиву
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

    // Виділення пам'яті для матриці
    int** matrix = new int*[size];
    for (int i = 0; i < size; ++i) {
        matrix[i] = new int[size];
    }

    // Виділення пам'яті для масиву сум діагоналей
    int diagonalCount = 2 * size - 1;
    int* diagonalSums = new int[diagonalCount]();

    // Заповнення та обробка матриці
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

    // Звільнення пам'яті
    for (int i = 0; i < size; ++i) {
        delete[] matrix[i];
    }
    delete[] matrix;
    delete[] diagonalSums;

    return 0;
}