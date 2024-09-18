#include <stdio.h>
#include <stdlib.h>
using namespace std;
#include <iostream>

int main()
{
    int min, arr[10] = {4, 2, -3, 8, 12, 1, -2, 9, 0, 15};
    for (int i = 0; i < 10; i++)
        printf("arr[%d]=%3d %p\n", i, arr[i], &arr[i]);
    printf("Size massiv arr: %d bait\n", sizeof(arr));
    min = arr[0];
    for (int i = 0; i < 10; i++)
        if (arr[i] < min)
            min = arr[i];
    printf("min = %d\n\n\n", min);

    /*...................................1...................................*/
    printf("TASK 1 ......................\n");
    int n = 0;
    float average_sum = 0;
    int arr_t1[6] = {};
    for (int i = 0; i < 6; i++)
        scanf("%d", &arr_t1[i]);
    for (int j : arr_t1)
    {
        average_sum += j;
        if (j != 0)
            n++;
    }
    average_sum /= n;
    printf("Average=%f\n\n", average_sum);

    /*...................................2...................................*/
    printf("TASK 2 ......................\n");
    int arr_t2[8];
    average_sum = 0;
    n = 0;
    for (int i = 0; i < 8; i++)
        scanf("%d", &arr_t2[i]);
    min = arr[0];
    for (int i = 0; i < 10; i++)
        if (arr[i] < min)
            min = arr[i];
    for (int j : arr_t2)
    {
        average_sum += j;
        n++;
    }
    average_sum -= min;
    average_sum /= n - 1;
    printf("Average=%f\n\n", average_sum);

    /*...................................3...................................*/
    printf("TASK 3 ......................\n");
    int arr_t3[5];
    average_sum = 0;
    n = 0;
    for (int i = 0; i < 5; i++)
        scanf("%d", &arr_t3[i]);
    for (int j : arr_t3)
    {
        if (j >= 0)
            average_sum += j, n++;
    }
    average_sum /= n;
    printf("Average=%f\n\n", average_sum);

    /*...................................4...................................*/
    printf("TASK 4 ......................\n");
    int arr_t4[6];
    average_sum = 0;
    n = 0;
    for (int i = 0; i < 6; i++)
        scanf("%d", &arr_t4[i]);
    for (int j : arr_t4)
    {
        if (j % 2 == 0)
            average_sum += j, n++;
    }
    average_sum /= n;
    printf("Average=%f\n\n", average_sum);

    /*...................................5...................................*/
    printf("TASK 5 ......................\n");
    int arr_t5[7];
    int sum = 0;
    for (int i = 0; i < 7; i++)
        scanf("%d", &arr_t5[i]);
    for (int j : arr_t5)
    {
        if (j < 0)
            sum += pow(j, 2);
    }
    printf("Sum=%d\n\n", sum);

    getchar();
    puts("Press any key");
    getchar();
    return 0;
}