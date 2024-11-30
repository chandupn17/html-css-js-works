const apiKey = "f49a63ca184298cf290066f7e836eb38";
const Base_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";
const input = document.querySelector("#inputText");

const getdata = async ()=>{
    try{
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=f49a63ca184298cf290066f7e836eb38");
    if(!response){
    console("error in fetching the data ");
    }
    const data = await response.json();
    console.log(data);
    for(let dataItm in data.wind){
        if(data.wind === data.wind.deg){
            console.log("hello gdsc");
            console.log(dataItm);
        }
    }
    // console.log(data.wind);
 
}
    catch(error){
        console.log(error);
    }
}
 
getdata();



















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

