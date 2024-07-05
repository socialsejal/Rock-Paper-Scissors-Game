let n= prompt("enter the numbers of array");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
let newarray=arr.reduce((pre, curr) =>{
    return (pre* curr);
})
console.log(newarray);

