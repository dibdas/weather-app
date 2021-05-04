




const API ={
    API_ID:'https://api.openweathermap.org/data/2.5/weather',
    KEY:'ced4960b4f29616c6327cdcc428f0897'
}
const get_weather=async(city)=>{
    const awaitdata = await fetch(`${API.API_ID}?q=${city}&units=metric&appid=${API.KEY}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
      });
}

const process_weather_data=(data)=>{
const obj_div = document.createElement('div')
  
  let obj_string =`humidity:${data.main.humidity}<br>`;
  obj_div.innerHTML = obj_string;
  weather-form-content.appendChild(obj_div);
  
  
  obj.pressure = {
    value: data.main.pressure,
    unit: 'hPa',
  };
  obj.wind = data.wind;
  [obj.weather] = data.weather;
  

  console.log(obj)
  return obj;


}


console.log(get_weather('delhi'))
get_weather('delhi')
console.log(process_weather_data)