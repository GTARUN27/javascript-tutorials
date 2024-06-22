let modebtn = document.querySelector("#mode");
let mode = document.querySelector("body");
//modebtn.addEventListener("click", () =>{
   // console.log("you are trying to change the mode" );
//});
let currentmode = "light";
modebtn.addEventListener("click", () =>{
    if(currentmode==="light"){
        currentmode ="dark";
        mode.classList.add("dark");
        mode.classList.remove("light");
        //document.querySelector("body").style.backgroundColor="black";
    }else{
        currentmode="light";
        mode.classList.add("light");
        mode.classList.remove("dark");
       // document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentmode);
});
