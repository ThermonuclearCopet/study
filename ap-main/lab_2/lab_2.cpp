#include <stdio.h>
#include <stdlib.h>

using namespace std;

#include <iostream>

int main()
{
    int n;
    puts("Input number:");
    scanf("%d", &n);
    if(n%2==0) printf("number %d even \n", n);
    else printf("number %d is odd\n\n", n);

    printf(n > 100 ? "number %d greater than 100\n" : (n<100? "number %d is less than 100\n" : "number %d is equal 100\n"), n);
    printf(n < 20 ? "number %d less than 20\n" : "number %d equal or greater than 20\n", n);

    printf(n%10 == 3 ? "number %d ends with 3\n" : "number %d is not ends with 3\n", n);
    printf(n%10 == 0 ? "number %d ends with 0\n" : "number %d is not ends with 0\n", n);
    printf(n%5 == 0 ? "number %d is divisible by 5 without a remainder\n" : "number %d is not divisible by 5 without a remainder\n", n);
    
    getchar();
    puts("\nPress any key and Enter...\n");
    getchar();
    return 0;
}


