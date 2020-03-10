function palin(x)
{
var y=x;
var rem=0;
var rev=0;
while(x>0)
{
    rem=x%10;
    rev=rev*10+rem;
    x=parseInt(x/10);
    
}
if(rev==y)
{
    return("palindrome");
}
else
{
    return("not palindrome");
}
}
var a=123;
var z=palin(a);
  console.log(z);
