/*let div = document.querySelector("ul");
console.dir(div);
console.log(div);
console.log(div.innerText);
console.log(div.innerHTML);
 /*let d=div.innerText ="ggwp";
 console.log(d);
 let change = div.innerHTML="<p>this is a paragraph</p>";
 console.log(change);
 console.log(div.textContent);
 let h2 = document.querySelector("h2");
 console.log(h2);
 h2.innerText=h2.innerText +"from tarun the legend";
 let body = document.querySelector("body");
 console.log(body);
 console.dir(body);
 let box = document.getElementById("box");
 console.log (box);
 box.innerText="tarun";
 console.log (box);
 let ox = document.getElementById("ox");
 console.log (ox);
 ox.innerText="neymar";
 console.log (ox);
 let x = document.getElementById("x");
 console.log (x);
 x.innerText="ronaldo and messi";
 console.log (x);
 let divs= document.querySelectorAll(".box");
 console.log(divs);
 divs[0].innerText="tarun";
 divs[1].innerText="ronaldo";
 divs[2].innerText="neymar and messi";*/
 let divs= document.querySelectorAll(".box");
 console.log(divs);
 let idx=0;
 for(div of divs){
    div.innerText=`RONALDO MESSI NEYMAR ${idx}`;
    div.innerText=`RONALDO MESSI NEYMAR ${idx}`;
    div.innerText=`RONALDO MESSI NEYMAR ${idx}`;
    div.innerText=`RONALDO MESSI NEYMAR ${idx}`;
    
    idx++;
 }
 

 
