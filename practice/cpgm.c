#include<stdio.h>
int factorial(int n);
void main()
{
int n,res;
printf("Enter the value of n\n");
scanf("%d",&n);
res=factorial(n);
printf("The factorial of the number=%d\n",res);
}
int factorial(int n)
{
if(n==0)
return 1;
else
return n*factorial(n-1);
}