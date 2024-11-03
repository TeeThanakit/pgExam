#include <stdio.h>

double findCapacity(double initCapa, int day)
{
    for (int i = 1; i <= day; i++)
    {
        initCapa /= 3.0;
    }

    return initCapa;
}

int main()
{
    int day;
    scanf("%d", &day);
    printf("%.2lf", findCapacity(5832, day));
    return 0;
}