const apiKey = "f49a63ca184298cf290066f7e836eb38";
const Base_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const inputData = document.querySelector("inputText");
const search = document.querySelector("search-icon");
const btn = document.querySelector("#btn");




// const input = document.querySelector("inputText");

const getdata = async (cityname)=>{
    try{
       // const cityname = "bengaluru";
    const response = await fetch(Base_url+cityname+`&appid=${apiKey}`);
    if(!response){
    console("error in fetching the data ");
    }
    const data = await response.json();
   console.log(data.main.humidity);
   
    console.log("the total api details willl bve " + data);
    console.log(data.main);
}
    catch(error){
        console.log(error);
    }
} 

btn.addEventListener("click", (btn)=>{
    btn.preventDefault();
    console.log("data is fetching . . . . . . ");
    //The error suggests that the JavaScript is trying to access
    // an element (cityInput) that doesn’t exist in the DOM at 
    //the time the script is executed. This often happens if the 
    //script is loaded before the HTML is fully rendered.
    const inputData = document.querySelector("#inputText");
   // console.log( document.querySelector("inputText"));
     const city = inputData.value.trim();
     if(!city){
        console.log("input city is not fetched ");
     }else{
        console.log("The inputed data will be "+ city);

     }
     
    getdata(city);
    
});



















// async function getdata (){
//     try{
//         const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=f49a63ca184298cf290066f7e836eb38");
       
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
// console.log(data);
// console.log(main.humidity)
//     }
//     catch(error){
//         console.error('There has been a problem with your fetch operation:', error);

//     }
// }
// getdata();


// const apiKey = "f49a63ca184298cf290066f7e836eb38";
// const Base_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
// const input = document.querySelector("#inputText");

// async function getdata() {
//     try {
//         // Fixed variable name: changed `responce` to `response`
//         const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=tiptur&appid=f49a63ca184298cf290066f7e836eb38");
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         // Use the correctly named variable
//         const data = await response.json();
//         console.log(data); // You can log or process the data as needed
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// getdata();

