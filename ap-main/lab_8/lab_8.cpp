#include <iostream>
#include <cstring> // Для роботи з рядками

using namespace std;

// Функція для додавання пробілів ліворуч
void blank_left(char *s, int n) {
    int len = strlen(s); // Довжина поточного рядка
    if (len >= n) {
        // Якщо довжина рядка більша або дорівнює n, нічого не робимо
        return;
    }

    // Кількість пробілів, які потрібно додати
    int spacesToAdd = n - len;

    // Зсуваємо рядок вправо на spacesToAdd символів
    for (int i = len - 1; i >= 0; --i) {
        s[i + spacesToAdd] = s[i];
    }

    // Заповнюємо початок рядка пробілами
    for (int i = 0; i < spacesToAdd; ++i) {
        s[i] = ' ';
    }

    // Завершальний символ '\0' залишається на місці
}

int main() {
    const int maxSize = 100; // Максимальний розмір рядка
    char str[maxSize];

    cout << "Введіть рядок: ";
    cin.getline(str, maxSize);

    int n;
    cout << "Введіть бажану довжину рядка: ";
    cin >> n;

    blank_left(str, n);

    cout << "Результат: '" << str << "'" << endl;

    return 0;
}