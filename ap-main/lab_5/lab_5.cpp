#include <stdio.h>
#include <stdlib.h>
using namespace std;
#include <iostream>

int arr[4][3] = {{2, 3, 4}, {7}, {1, 9}, {8, 4, 10}}, s1[4], s2[3];
int main()
{

    puts("Array arr [4][3] ");
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 3; j++)
            printf("%5d", arr[i][j]);
        printf("\n");
    }
    printf("\n Sum elements strings\n");
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 3; j++)
            s1[i] += arr[i][j];
        printf("s1[%d]=%d\n", i, s1[i]);
    }
    printf("\n Sum elements columns\n");
    for (int j = 0; j < 3; j++)
    {
        for (int i = 0; i < 4; i++)
            s2[j] += arr[i][j];
        printf("'s2[%d]=%d\n", j, s2[j]);
    }

    /*...................................1...................................*/
    printf("TASK 1 ......................\n");
    int cols = 5, rows = 4;
    int arr_t1[rows][cols];
    int t1_s_col[cols];
    for (int i = 0; i < rows; i++)
    {
        char input[256];
        printf("Enter the elements of row %d: ", i);
        fgets(input, sizeof(input), stdin);

        char *token = strtok(input, " ");
        for (int j = 0; j < cols; j++)
        {
            if (token != NULL)
            {
                arr_t1[i][j] = atoi(token);
                token = strtok(NULL, " ");
            }
        }
    }

    printf("\nArray:\n");
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            printf("%d ", arr_t1[i][j]);
        }
        printf("\n");
    }

    for (int j = 0; j < cols; j++)
    {
        t1_s_col[j] = 0;
        for (int i = 0; i < rows; i++)
            t1_s_col[j] += (arr_t1[i][j] % 2 != 0 && arr_t1[i][j] >= 0) ? arr_t1[i][j] : 0;
        printf("col %d =%d\n\n\n", j, t1_s_col[j]);
    }

    /*...................................2...................................*/
    printf("\n\nTASK 2 ......................\n");
    cols = 3, rows = 6;
    int arr_t2[rows][cols];
    int t2_s_row[rows];
    for (int i = 0; i < rows; i++)
    {
        char input[256];
        printf("Enter the elements of row %d: ", i);
        fgets(input, sizeof(input), stdin);

        char *token = strtok(input, " ");
        for (int j = 0; j < cols; j++)
        {
            if (token != NULL)
            {
                arr_t2[i][j] = atoi(token);
                token = strtok(NULL, " ");
            }
        }
    }

    printf("\nArray:\n");
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            printf("%d ", arr_t2[i][j]);
        }
        printf("\n");
    }

    for (int i = 0; i < rows; i++)
    {
        t2_s_row[i] = 0;
        for (int j = 0; j < cols; j++)
            t2_s_row[i] += (arr_t2[i][j] % 2 == 0 && arr_t2[i][j] > 0) ? 1 : 0;
        printf("row %d=%d\n", i, t2_s_row[i]);
    }

    /*...................................3...................................*/
    printf("TASK 3 ......................\n");
    cols = 5, rows = 3;
    int arr_t3[rows][cols];
    int t3_s_col[cols];
    for (int i = 0; i < rows; i++)
    {
        char input[256];
        printf("Enter the elements of row %d: ", i);
        fgets(input, sizeof(input), stdin);

        char *token = strtok(input, " ");
        for (int j = 0; j < cols; j++)
        {
            if (token != NULL)
            {
                arr_t3[i][j] = atoi(token);
                token = strtok(NULL, " ");
            }
        }
    }

    printf("\nArray:\n");
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            printf("%d ", arr_t3[i][j]);
        }
        printf("\n");
    }

    for (int j = 0; j < cols; j++)
    {
        t3_s_col[j] = 0;
        for (int i = 0; i < rows; i++)
            t3_s_col[j] += (arr_t3[i][j] % 2 == 0) ? 0 : 1;
        printf("col %d =%d\n\n\n", j, t3_s_col[j]);
    }

    /*...................................4...................................*/
    printf("\n\nTASK 4 ......................\n");
    cols = 3, rows = 5;
    int arr_t4[rows][cols];
    int t4_s_row[rows];
    for (int i = 0; i < rows; i++)
    {
        char input[256];
        printf("Enter the elements of row %d: ", i);
        fgets(input, sizeof(input), stdin);

        char *token = strtok(input, " ");
        for (int j = 0; j < cols; j++)
        {
            if (token != NULL)
            {
                arr_t4[i][j] = atoi(token);
                token = strtok(NULL, " ");
            }
        }
    }

    printf("\nArray:\n");
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            printf("%d ", arr_t4[i][j]);
        }
        printf("\n");
    }

    for (int i = 0; i < rows; i++)
    {
        t4_s_row[i] = 0;
        for (int j = 0; j < cols; j++)
            t4_s_row[i] += (arr_t4[i][j] < 0) ? 1 : 0;
        printf("row %d=%d\n", i, t4_s_row[i]);
    }

    /*...................................5...................................*/
    printf("TASK 5 ......................\n");
    cols = 5, rows = 4;
    int arr_t5[rows][cols];
    int t5_s_col[cols];
    for (int i = 0; i < rows; i++)
    {
        char input[256];
        printf("Enter the elements of row %d: ", i);
        fgets(input, sizeof(input), stdin);

        char *token = strtok(input, " ");
        for (int j = 0; j < cols; j++)
        {
            if (token != NULL)
            {
                arr_t5[i][j] = atoi(token);
                token = strtok(NULL, " ");
            }
        }
    }

    printf("\nArray:\n");
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            printf("%d ", arr_t5[i][j]);
        }
        printf("\n");
    }

    for (int j = 0; j < cols; j++)
    {
        t5_s_col[j] = 1;
        for (int i = 0; i < rows; i++)
            t5_s_col[j] *= (arr_t5[i][j] >= 1 && arr_t5[i][j] <= 5) ? arr_t5[i][j] : 1;
        printf("'col %d =%d\n\n\n", j, t5_s_col[j]);
    }

    return 0;
}
