
const card = document.createElement('div');
card.setAttribute('class', 'card bg-dark text-white text-center w-50 m-auto');




const API ={
  API_ID:'https://api.openweathermap.org/data/2.5/weather',
  KEY:'ced4960b4f29616c6327cdcc428f0897'
}
const get_weather=async(city)=>{
  const awaitdata = await fetch(`${API.API_ID}?q=${city}&units=metric&appid=${API.KEY}`,{mode: 'cors'})
  .then(function(response){
      return response.json();
  })
  .then(data => process_weather_data(data))
  .catch((error) => {
      console.error('Error:', error);
    });
}

const process_weather_data=(da)=>{
const obj_div = document.getElementById('weather-data') || document.createElement('div');
obj_div.id = 'weather-data'
const weatherContent = document.querySelector('.weather-form-content');
const { weather, wind } = da;
const { pressure,humidity } = da.main;

const e = document.getElementById("sel1");
var category= 0;
e.addEventListener('click',function(){  
var value = e.options[e.selectedIndex].value;
 if(value=='F'){
   category=Math.round(da.main.temp* (9/5) + 32);
 }
 else{
   category=da.main.temp
 }

let obj_string =`humidity:${humidity}%<br/>weather:${weather[0].description}
<br/>temperature:${category}<br/>pressure:${pressure} hpa<br/>wind:${wind.speed}mps
<br/> feels_like:${da.main.feels_like}`;
obj_div.innerHTML=" ";
obj_div.innerHTML = obj_string;
if (document.querySelector('#weather-data') !== 'null'){
  card.appendChild(obj_div)
  weatherContent.appendChild(card)
}
})

}

get_weather('london')
const inputlocation = document.querySelector('#weather-form')
inputlocation.addEventListener('submit',e=>{
  e.preventDefault();
  const{city}=inputlocation;
  get_weather(city.value);
  inputlocation.reset()

})


export default process_weather_data;