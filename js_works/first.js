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
let myfun =(a,b) =>{
    return a+b;}

console.log(myfun(10,20));


   
const obj ={
    m1:80,
    m2:69,
    m3:33,
};
let arr=[10,12,34,45,67];
arr.forEach((x,indx) =>{
    x=x+100;
    console.log(x,indx);
});
console.log(arr);
let mapps =arr.map(  (val) =>{ 

    return val*100;

});
console.log("the manuplated arry of arr :",mapps);
console.log("----------------------------------------------------");
const big = arr.reduce((largest,current) =>{
     return largest <  current;

});
const big1 = arr.reduce((largest,current) =>{
    return largest>current ?largest:current;

});


//=-=-------------------documents -------
console.log(big);
console.log(big1);
let something = document.querySelector("#byid");
console.log(something);
let get = something.getAttribute("#byid");
console.log(get);
