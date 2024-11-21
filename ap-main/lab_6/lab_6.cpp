// y = e^2x
// x є [0, 1]   n = 5  e = 0.0001
// кроком(b-a) /(k-1)
#include <iostream>
#include <cmath>
using namespace std;

float a = 0.0f;
float b = 1.0f;
short n = 5;
short k = 10;
float step = (b-a)/(k-1);
float e = 0.0001f;
float x = 0.5;

int factorial(int _n)
{
    int res = 1;
    for (int i = 2; i <= _n; i++)
        res *= i;
    return res;
}

inline float find_n_member(float _x, int _n){
    return pow(2 * _x, n)/factorial(_n);
}

float calculate_sum_for_n(float _x, int _n){
    float sum = 0;
    for(int i=0; i<_n; i++) sum+=find_n_member(_x, i);
    return sum;
}

float calculate_sum_for_e(float _x, float _e){
    float sum = 0;
    int _n = 0;
    do{
        sum += find_n_member(_x, _n);
        _n++;
    }while(find_n_member(_x, _n)-find_n_member(_x, _n+1) > _e);
    return sum;
}

int main(){
    for(int i = 0; i<=int((b-a)/step); i++){
        cout<<"\n for x: "<<a+i*step<<endl<<endl;
        cout<<"iteration over n: "<<calculate_sum_for_n(a+i*step, n)<<endl;
        cout<<"itaration while e: "<<calculate_sum_for_e(a+i*step, e)<<endl;
    }
    
    return 0;
}
