

// let sonuclass = document.getElementById("getID");
// let sonuId    = document.getElementsByClassName("getClass");

// let className = document.querySelector(".hello-class");
// let idName    = document.querySelector("#hello");
// let elements  = document.querySelector("h1");

// console.log(className);
// console.log(idName);
// console.log(elements);  


// console.log(sonuclass);
// console.log(sonuId);


// // increased number 

// let target = document.querySelector("input");


// target.addEventListener("click", ()=> {  
    
//     let add = document.querySelector(".value")

//     let calculate = add.innerHTML

//     add.innerHTML = parseInt(calculate) + 1
// })



// btns target 

 let button1 = document.querySelector(".btn1");
 let button2 = document.querySelector(".btn2");
 let button3 = document.querySelector(".btn3");

//  tabs targets 

let tab1 = document.querySelector(".tabs1");
let tab2 = document.querySelector(".tabs2");
let tab3 = document.querySelector(".tabs3");

button1.addEventListener('click', function(){ 

  tab1.classList.add("active")
  tab2.classList.remove("active")  
  tab3.classList.remove("active")     
  
  button1.classList.add("active-btn")
  button2.classList.remove("active-btn")  
  button3.classList.remove("active-btn")  


} )


button2.addEventListener('click', function(){ 

  tab2.classList.add("active")  
  tab1.classList.remove("active")  
  tab3.classList.remove("active") 
  
  button2.classList.add("active-btn")  
  button1.classList.remove("active-btn")  
  button3.classList.remove("active-btn")  


} )


button3.addEventListener('click', function(){ 

  tab3.classList.add("active") 
  tab1.classList.remove("active")      
  tab2.classList.remove("active") 

  button3.classList.add("active-btn")  
  button1.classList.remove("active-btn")  
  button2.classList.remove("active-btn")   

} )


