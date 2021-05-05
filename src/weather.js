
const card = document.createElement('div');
card.setAttribute('class', 'card text-center w-50 m-auto');

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
let obj_string =`humidity:${humidity}%<br/>weather:${weather[0].description}<br/>
temp:${da.main.temp}<br/>pressure:${pressure} hpa<br/>wind:${wind.speed}mps<br/> feels_like:${da.main.feels_like}`;
obj_div.innerHTML=" ";
obj_div.innerHTML = obj_string;
if (document.querySelector('#weather-data') !== 'null'){
  card.appendChild(obj_div)
  weatherContent.appendChild(card)
}
console.log(weather);
console.log(wind);
console.log(pressure);
console.log(da);

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