function rev(x)
{
var rem=0;
var rev=0;
while(x>0)
{
rem=x%10;
rev=rev*10+rem;
x=parseInt(x/10);
}
console.log("reverse is "+rev);
}
var a=123;
rev(a);