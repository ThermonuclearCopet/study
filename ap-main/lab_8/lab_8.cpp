#include <iostream>
#include <cstring> 

using namespace std;

void blank_left(char *s, int n) {
    int len = strlen(s);
    if (len >= n) {
        return;
    }

    int spacesToAdd = n - len;

    for (int i = len - 1; i >= 0; --i) {
        s[i + spacesToAdd] = s[i];
    }

    for (int i = 0; i < spacesToAdd; ++i) {
        s[i] = ' ';
    }

}
int main() {
    const int maxSize = 100;
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