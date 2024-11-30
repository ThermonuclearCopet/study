#include <iostream>
#include <vector>

using namespace std;

// Функція для введення та виведення матриці
void inputAndDisplayMatrix(vector<vector<int> >& matrix) { // Пробіл між дужками
    cout << "Введіть елементи матриці (" << matrix.size() << " x " << matrix[0].size() << "): \n";
    for (size_t i = 0; i < matrix.size(); ++i) {
        for (size_t j = 0; j < matrix[i].size(); ++j) {
            cin >> matrix[i][j];
        }
    }

    cout << "Введена матриця: \n";
    for (const auto& row : matrix) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
}

// Завдання 1: Сума додатних непарних елементів у стовпцях
int sumPositiveOddColumns(const vector<vector<int> >& matrix) { // Пробіл між дужками
    int sum = 0;
    for (size_t j = 0; j < matrix[0].size(); ++j) {
        for (size_t i = 0; i < matrix.size(); ++i) {
            if (matrix[i][j] > 0 && matrix[i][j] % 2 != 0) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}

// Завдання 2: Кількість парних елементів у рядках
int countEvenRows(const vector<vector<int> >& matrix) { // Пробіл між дужками
    int count = 0;
    for (const auto& row : matrix) {
        for (int val : row) {
            if (val % 2 == 0) {
                ++count;
            }
        }
    }
    return count;
}

// Завдання 3: Сума непарних елементів у рядках
int sumOddRows(const vector<vector<int> >& matrix) { // Пробіл між дужками
    int sum = 0;
    for (const auto& row : matrix) {
        for (int val : row) {
            if (val % 2 != 0) {
                sum += val;
            }
        }
    }
    return sum;
}

// Завдання 4: Добуток елементів у діагоналі
int productDiagonal(const vector<vector<int> >& matrix) { // Пробіл між дужками
    int product = 1;
    for (size_t i = 0; i < matrix.size(); ++i) {
        if (i < matrix[i].size()) {
            product *= matrix[i][i];
        }
    }
    return product;
}

int main() {
    // Введіть розмір матриці
    int rows, cols;
    cout << "Введіть кількість рядків і стовпців: ";
    cin >> rows >> cols;

    vector<vector<int> > matrix(rows, vector<int>(cols)); // Пробіл між дужками

    // Введення та виведення матриці
    inputAndDisplayMatrix(matrix);

    // Обчислення завдань
    cout << "Сума додатних непарних елементів у стовпцях: " 
         << sumPositiveOddColumns(matrix) << endl;
    cout << "Кількість парних елементів у рядках: " 
         << countEvenRows(matrix) << endl;
    cout << "Сума непарних елементів у рядках: " 
         << sumOddRows(matrix) << endl;
    cout << "Добуток елементів у діагоналі: " 
         << productDiagonal(matrix) << endl;

    return 0;
}