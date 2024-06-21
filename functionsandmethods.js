/*function tarun(age,gender){
     
    console.log("scout op bolteeee");
    console.log(age,gender);
    console.log("jhbsdfkjhsdfkjjndfidfdfjed");
}
tarun(23,"male");
function add(a,b){
    let c =a+b;
    console.log(c);
}
add(4,5);
function mul(c,d){
    return c*d;
}
const multiply =(c,d) =>{
    console.log(c*d);
};
multiply(2,3);
function countvow(str){
    let count=0;
    for(let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            count++;
        }
    }
    console.log("count is ",count);
}
countvow("aeioughftijkil");
let arrowc=(str)=>{
    counts=0;
    for(let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            counts++;
        }
    }
    console.log("count is ",counts);
}
arrowc("jhsddfiu");
let a=[1,2,3,4,5];
a.forEach(function printval(val){// for each is a method used in the arrays to take function as a parameter
    console.log(val);

});
let arr=["tarun","anand","abhinav"];
arr.forEach((value,idx,arr)=>{//can take 3 parametres i.e(value,index of the position,array)
    console.log(value,idx,arr);// modern way of writing for each function.

});
let array =[1,2,3,4,5,6,7,8,9,10];
console.log("squares of the numbers are");
for(let i=1;i<=array.length;i++){
    array.forEach((i)=>{
       
    });console.log(i*i);
}
let arrrays=[22,44,66,88,100];
arrrays.map((num)=>{
    console.log(num);
});
let narray=(num)=>{
    console.log(num*num);
}
arrrays.forEach(narray);
let b=[1,2,3];
let c= b.map((val)=>{
    return val*3;
});console.log(c);
let dhinkachika =[11,22,33,44,55,66,77,88,99,100];
let dhinka=dhinkachika.filter((val)=>{
    return val % 2==0;
});console.log(dhinka);
let tarun =[23,27,48,90,60];
let anand = tarun.reduce((a,b)=>{
    return a<b ? a:b;
}); console.log(anand);
let marks =[99,88,77,90, 92,100];
let grt=marks.filter((val)=>{
    return val>=90;
});
console.log(grt);*/
let number =prompt("enter the number ");
let array =[];
for(let i=1;i<=number;i++){
    array[i-1]=i;
}console.log(array);

let sum = array.reduce((a,b)=>{
    return a+b;
});
console.log(sum);
let mul = array.reduce((c,d)=>{
    return c*d;
});
console.log(mul);
