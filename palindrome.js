var a=121;
var rem=0;
var rev=0;
var b=a;
while(a>0)
{
    rem=a%10;
    rev=rev*10+rem;
    a=parseInt(a/10);
}
if(rev==b)
{
    console.log("number is palindrome");
}
else{
    console.log("number is not palindrome");
}