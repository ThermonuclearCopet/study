#include <stdio.h>
#include <curses.h>
#include <stdlib.h>

int main()
{
    puts("My first program");
    char s = 't';
    printf("Symbol %c=(%d)10S  =(%#o)8S", s, s, s);
    printf(" =(%#x)16S size char=%lu bait\n", s, sizeof(s));
    int a = 78;
    printf("'a=%d size int=%lu bait\n", a, sizeof(a));
    float b = 56.23f;
    printf("b=%f=%e size float=%lu bait\n", b, b, sizeof(b));
    printf("\nTroshchuk\n\n");

    short c = 10;
    long d = 7000000;
    double e = 4395.9032;
    printf("c=%hd size short=%lu bait\n", c, sizeof(c));
    printf("d=%ld size long=%lu bait\n", d, sizeof(d));
    printf("e=%e size long=%lu bait\n", e, sizeof(e));
    

    puts("\nPress any key and Enter...\n");
    getchar();
    return 0;
}