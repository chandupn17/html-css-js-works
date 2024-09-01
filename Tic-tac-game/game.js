let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#rest-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0= true; //player 

const winpatt =[
    [0, 1, 2],
    [0,3,6],// index 0
    [0, 4, 8],//    1
    [1, 4, 7],//2
    [2, 5, 8],//3
    [2, 4, 6],//4
    [3, 4, 5],//5
    [6, 7, 8],//6
]; 

const disable = ()=>{
    for(let box of boxes){
        box.disabled =true;
    }

};

const showwinner = (winner) =>{
    msg.innerText = `Congruglation , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
};
//boxes is array of class with same name .box
//for each is loop with itrative variable box 
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
    // console.log("euuev");
   if(turn0){ //if true it will execute if false it 
    box.innerText ="o";// execute else statmet 
    turn0=false;
   }else{
    box.innerText ="x";
    turn0=true;
   }
   box.disabled = true;// This will work if `box` is a button or input element
   checkwiner();
    });  
});

//function with no parameterrs 
const checkwiner = ()=>
{
    for(let pattern of winpatt){
 //pattern are sub array of array main array winpatt 
     let posval1 =   boxes[pattern[0]].innerText;
     let posval2 =   boxes[pattern[1]].innerText;
     let posval3 =   boxes[pattern[2]].innerText;
    if(posval1!="" && posval2!="" && posval3!=""){
        if(posval1===posval2 && posval2===posval3){
            console.log("winner",posval1);
            showwinner(posval1); 
            return; // will return if we got winner
        }
    }
    }
  }
  const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText ="";
    }
    };
    const resetGame =()=>{
        turn0 =true;
        enableBoxes();
        msgContainer.classList.add("hide");
    };
  newGameBtn.addEventListener("click", resetGame);
  
  reset_btn.addEventListener("click", resetGame);