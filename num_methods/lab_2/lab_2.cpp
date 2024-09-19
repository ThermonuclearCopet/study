/*
x є[−1;1]

x^3 + 6x^2 + 9x + 1=0
f' = 9 + 12x + 3x^2

*/

#include <iostream>
#include <stdlib.h>
#include <stdio.h>
#include <cmath>
using namespace std;

short a = -1;
short b = 1;
float e = 0.01f;



float calculate_point(float x){
   return pow(x, 3) + 6*pow(x, 2) + 9*x + 1; 
}


float find_root(float _a, float _b, float _e){
    float x0 = (_a+_b)/2.0f;
    if (fabs(_b-_a) < 2*_e || fabs(calculate_point(x0)) < e)
    {
        return x0;
    }
    float start_pos_a = calculate_point(_a);
    float midle_pos = calculate_point(x0);
    float end_pos_b = calculate_point(_b);
    if (start_pos_a > 0 && midle_pos < 0 || start_pos_a < 0 && midle_pos > 0){
        return find_root(_a, x0, _e);
    }
    if (midle_pos > 0 && end_pos_b < 0 || midle_pos < 0 && end_pos_b > 0){
        return find_root(x0, _b, _e);
    }
    return x0;
}

int main(){
    float root = find_root(a, b, e);
    cout << "\n\nroot = " << root << "\n\n" << endl;
    return 0;
}


