var a=135;
var rev=0;
var rem=0;
var sum=0;

while(a>0)
{
    rem=a%10;
    rev=(rev*10)+rem;
    sum=sum+rem;
    a=parseInt(a/10);
    
}
console.log(rev);
console.log(sum);