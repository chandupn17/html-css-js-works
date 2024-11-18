//-------------------------------------------------------------------------
// let marks = alert("good morning please ensure to subscribe ");
// let student = {
//    name: "chandu ",
//     age : 22,
//     role : "ceo",
//     company_name : "1week.org",
// };
// console.log(student.company_name);
// for ( let key in  student ){
//     console.log("key atribute will b-",key);
//     console.log("key atribute values -",student[key]);
// }-
//--guess the number game ---------------------------------------------------------------------
// let num =28;
// let valu = prompt("guess the number ");
// while(valu != num){

//     valu = prompt("no, please enter the correct number");
// }
// console.log(" congragulation , your guess is correct ");
// let comp1="@";
// let comp2 = prompt("Enter your full name");
// // console.log(comp2.length);
// let comp3= comp2.length;
// let username = comp1+comp2+comp3;
// console.log(" Your user name will be ---",username);

//-----------------array operation-------------
// let arr  = ["mabh","wbwb","webdevelopment","wg","qegwr"];
// let arr2=["chandu ","punith","chandru"];
// // arr=arr+arr2;
// let arr1= arr.concat(arr2);
// arr1.unshift("cmamamam");
// arr1.slice(1,4);
// console.log(arr1);
// console.log(arr1.slice(0,4));

//-------parctice question-------
// let arra =["bloomberg","microsoft","uber","google","ibm","neflix"];
// console.log(arra);
// // arra.shift();
// // console.log(arra);
// arra.splice(2,1,"ola");
// console.log(arra);
// arra.push("Amazon");
// console.log(arra);git 


// function ver(mesg){
//     let count =0;
//     for (const i of mesg){
//         if( i === "a" ||
//             i === "e" ||
//             i === "i" || 
//             i ==="o" ||
//             i ==="u"){
//             console.log(i,"\n");
//             count++;

//         }

//     }
//     return count;
// }
// let count = ver("chandu");

// console.log("the number of owels in chandu world will be ",count);
// function one (mes){
//     mes=mes*10;

// }



// ------ important for each function --------
// inn js function can passed as paramertr to another function 


///----------------------------------------
// let arr=[12,34,45,3];
// arr.forEach( function one(valu){
//     valu=valu*10;
//     // arr[valu]= arr[valu]*10;
//     console.log(valu);
//     console.log(arr);


// });
// console.log(arr);
// let divchange = document.querySelector("div");
// let myfun =(a,b) =>{
//     return a+b;}

// console.log(myfun(10,20));


   
// const obj ={
//     m1:80,
//     m2:69,
//     m3:33,
// };
// let arr=[10,12,34,45,67];
// arr.forEach((x,indx) =>{
//     x=x+100;
//     console.log(x,indx);
// });
// console.log(arr);
// let mapps =arr.map(  (val) =>{ 

//     return val*100;

// });
// console.log("the manuplated arry of arr :",mapps);
// console.log("----------------------------------------------------");
// const big = arr.reduce((largest,current) =>{
//      return largest <  current;

// });
// const big1 = arr.reduce((largest,current) =>{
//     return largest>current ?largest:current;

// });


// //=-=-------------------documents -------
// console.log(big);
// console.log(big1);
// let something = document.querySelector("#byid");
// console.log(something);
// let get = something.getAttribute("#byid");
// console.log(get);
//----------------get attribute --------

// let div = document.querySelector("#byid");
// console.log(div.getAttribute("class"));

//---------events------------;
// let even = document.querySelector("#btn");
// even.onclick = (e)=>
// {
//     console.log("theank you for clicking");

// }
// even.ondbclick = (e)=>{
//     console.log(" double click");
// }
//--------------------
// const node = document.getElementById('btn');

// // Add double-click event listener
// node.addEventListener('dblclick', function() {
//     alert('Node double-clicked!');
// });

//-------  mode-changer -------
// let currmode = "light";
// let body= document.querySelector("body");
// let btn = document.querySelector(".mode");

// btn.addEventListener("click",()=>{
//     if(currmode==="light"){
//         body.classList.remove("light");
//         // body.style.backgroundColor= "black";
//    body.classList.add("dark");
//         currmode="dark";

//     }else{
//         body.classList.remove("dark");
//         body.classList.add("light");
//         currmode="light";

//     }
//     console.log(currmode);
// });

    

//---- Practice mode changer------
// 
// let body = document.querySelector("body");
// let btn = document.querySelector(".mode");
// let currentMode = "light";

// btn.addEventListener("click", ()=>{
//     if(currentMode==="light"){
//         currentMode="dark";
//         body.classList.remove("light");
//         body.classList.add("dark");
//         }else{
//             currentMode="light";
//             body.classList.remove("dark");
//             body.classList.add("light");
            
//         }


// });
// let count =0;

// let clic = document.querySelector(".btn");
// let counting = document.querySelector("h3");

// addEventListener("click", ()=>{
//     count++;
//     counting.textContent = count;
// // counting.innerText=count;
// //       clic.prepend("counting");
// });
// alert("click on count button to count your countings");
// Get the elements
// const overlay = document.getElementById('overlay');
// const customAlert = document.getElementById('customAlert');
// const closeButton = document.getElementById('closeButton');

// // Function to show the custom alert
// function showCustomAlert() {
//   overlay.style.display = 'block';
//   customAlert.style.display = 'block';
// }

// // Function to hide the custom alert
// function hideCustomAlert() {
//   overlay.style.display = 'none';
//   customAlert.style.display = 'none';
// }

// // Add event listener to close the alert
// closeButton.addEventListener('click', hideCustomAlert);
// let array = [1,2,3,4,5,5,6,6,7];
// array.forEach(element => {
//   //console.log("huu"+element);
// });


// let btn = document.querySelector("#btn");
// // btn.onclick = (e)=>{
// // console.log("clicked once"  );
// // };
// function call(){
//   console.log("function id called");
// }
// btn.addEventListener("click",(call)=>
// {
//   console.log("good hogthr");
// });
//  
// const calll = (x) =>{
// //----------------------------------------------------
//   function call(x,func){
//     //2s
//   setTimeout( () =>{
//     func();
//     console.log(" data is loding ");
//     console.log(x);
//     //func();

//   },1000);
//   console.log("ggggg  " + x);
// }

// call(1, ()=>{
//   console.log(" call a function");

// });

// setTimeout(call,6000);
// //--------promises----------------------------------------------------
// const getdata = (dataId, func)=>{
  
//   setTimeout(()=>{
//     console.log("data one is ", dataId);
//     if(func){
//       func();
//     }
//   },2000);
//   // getdata(5);
//  }


// getdata(1 , ()=>{
//   getdata(2 , ()=>{
//     getdata(3);
//   });
// });
//-----------------------------------------------------

const url = 10;


const getFacts = async () =>{
console.log("getting data . . . . .");
let response = await fetch(url);
console.log(response);

};