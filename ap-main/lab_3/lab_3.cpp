#include <stdio.h>
#include <stdlib.h>
using namespace std;
#include <iostream>

int main()
{
    int a = 0, sum = 0, n = 0;
    while (sum < 20)
    {
        n += 1;   // Кількість циклів
        a += 2;   // Парне число
        sum += a; // Сума парних чисел
        printf("n = % d a = % d sum = % d\n", n, a, sum);
    }
    printf("Loops n = % d\n\n", n);

    /*...................................1...................................*/
    printf("TASK 1 ......................\n");
    a = 0, sum = 0, n = 0;
    while (a <= 21)
    {
        n += 1;
        a += 3;
        sum += a;
    }
    printf("Loops n = % d\t\tsum = %d\n\n", n, sum);


    /*...................................2...................................*/
    printf("TASK 2 ......................\n");
    int user_input;
    sum = 0, n = 0;
    while(sum<100)
    {
        printf("Enter number to add (current sum = %d, target: 100)", sum);
        scanf("%d", &user_input);
        sum+=user_input;
        n+=1;
    }
    printf("Loops n = % d\t\tsum = %d\n\n", n, sum);


    /*...................................3...................................*/
    printf("TASK 3 ......................\n");
    a = 0, sum = 0, n = 0;
    while (a <= 36)
    {
        n += 1;
        a += 4;
        sum += a;
        
    }
    printf("Loops n = % d\t\tsum = %d\n\n", n, sum);


    /*...................................4...................................*/
    printf("TASK 4 ......................\n");
    user_input = 0, sum = 0, n = 0;
    while(sum<50)
    {   
        printf("Enter number to add (current sum = %d, target: 50)", sum);
        scanf("%d", &user_input);
        sum+=user_input;
        n+=1;
    }
    printf("Loops n = % d\t\tsum = %d\n\n", n, sum);



    /*...................................5...................................*/
    printf("TASK 5 ......................\n");

    sum = 0, n = 0, a = 0, user_input = 0;
    printf("Enter number of cycles:");
    scanf("%d", &user_input);
    while (n<user_input)
    {
        n+=1;
        a +=5;
        sum+=a;
    }
    printf("Loops n = % d\t\tsum = %d\n\n", n, sum);


    getchar();
    puts("\nPress any key and Enter...\n");
    getchar();
    return 0;
}