let marks =[97,87,99,98,97];
console.log(marks);
console.log(marks.length);
console.log(marks[3]);
marks[2]=28;
console.log(marks);
for(let i=0;i<marks.length;++i){
    console.log(marks[i]);
}
let toppers=["tarun","anand","abhinav","nandini","charvi","rohit"];
for(let topper of toppers){
    console.log("topper is ",topper);
    console.log(topper.toUpperCase());

}
/*let stmarks=[85,97,44,37,76,60];
let len=stmarks.length;
console.log(len);
let sum=0;
for(let val of stmarks){
    sum+=val;
    console.log(sum);
     
}
let avg = sum/len; 
console.log("average is :",avg);
console.log(`average marks of the student is ${avg}`);

let items = [250,645,300,900,50];
let idx=0;
for(let val of items){
    console.log(`value at each index is ${idx}=${val}`);
    let offer=val*0.1;
    items[idx]=items[idx]-offer;
    console.log(`items after discount is ${items[idx]}`);

    idx++;

}
let items = [250,645,300,900,50];
for(let i=0;i<items.length;++i){
    let offer=items[i]*0.1;
    items[i]=items[i]-offer;

}
console.log(items);
let toppers=["tarun","anand","abhinav","nandini","charvi","rohit"];
console.log("unshifting or addding an element to start of an array we get",toppers.unshift("bumrah"));// adds a element in the strating of the array
console.log(toppers);
let items = [250,645,300,900,50];
console.log("updated arrray  is ",toppers);
let add = toppers.push("kohli","sachin","dhoni");
console.log(" after push arrray  is ",toppers);
toppers.pop();
console.log("after pop arrray  is ",toppers);
console.log("coverting array to string we get ",toppers.toString());
console.log(" concatinating 2 strings we get",toppers.concat(items));
let shift =items.shift();
console.log("first deleted item is ",shift);// deletes the first item in the array
console.log("slicing the element we get ",toppers.slice(1,4));
let items = [250,645,300,900,50];
items.splice(1,2,22,33);//[from which element u want to change ,how many items u want to delete, replace new values with deleted  ones ]
console.log(items);
let companies =["blooberg","microsoft","uber","google","ibm","netflix"];
console.log(companies);
console.log(companies.shift());
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
console.log(companies.push("amazon"));
console.log(companies);*/

