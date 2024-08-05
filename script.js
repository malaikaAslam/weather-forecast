let base_url="https://api.openweathermap.org/data/2.5/weather?q={London}&appid=6256f4ee266f3f148af959364241b59f" ;
let searchBtn= document.querySelector(".search-btn");
let city=document.getElementById("city");
let tempp= document.querySelector(".temp");
let countryy= document.querySelector(".country");
let percentage=document.querySelector(".per");
let speeds=document.querySelector(".speed");
let weatherImg=document.querySelector(".weather-img");



searchBtn.addEventListener("click",()=>{
let newCity=city.value.trim();
console.log(newCity);
getWeather(newCity);
});

 const getWeather= async(newCity)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(newCity)}&appid=6256f4ee266f3f148af959364241b59f&units=metric`;
       
    let response= await fetch(url);
        let data=  await response.json();
        console.log(data);
            display(data,newCity);
 }


 

    const display = (data) => {
        if (data.cod === 200) {
            tempp.innerHTML = `${data.main.temp} &deg;C`;
            countryy.innerText = `${data.name}, ${data.sys.country}`;
            percentage.innerHTML = `${data.main.humidity}% <br> Humidity`;
            speeds.innerHTML = `${data.wind.speed} km/h <br> Wind Speed`;
            updateWeatherImage(data);
        } else {
            console.error("Error:", data.message);
            alert("City not found. Please check the spelling or try a different city.");

        }
    };

   const updateWeatherImage=(data)=>{
   
  if(data.weather[0].main=="Clouds")  {
    weatherImg.src='./images/cloudd.png';
  }  
  else if(data.weather[0].main=="Clear"){
    weatherImg.src='./images/clear.png';
    }
   else if(data.weather[0].main=="Rain"){
        weatherImg.src='./images/rain.png';
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImg.src='./images/drizzle.png';
        }
   else if(data.weather[0].main=="Sun"){
            weatherImg.src='./images/hot sun.png';
            }
    else if(data.weather[0].main=="Mist"){
                weatherImg.src='./images/mist.png';
                }
    else if(data.weather[0].main=="Snow"){
            weatherImg.src='./images/snow.png';
     }
     else if(data.weather[0].main=="Storm"){
        weatherImg.src='./images/storm.png';
 }
 else if(data.weather[0].main=="Smoke"){
    weatherImg.src='./images/night.png';
}
else if(data.weather[0].main=="Heavy rain"){
    weatherImg.src='./images/heavy.png';
}
     else{
        weatherImg.src=`./images/pic.png`;
     }
    }
