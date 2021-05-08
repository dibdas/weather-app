const card = document.createElement('div');
card.setAttribute('class', 'card bg-dark text-white text-center w-50 m-auto');


const API = {
  API_ID: 'https://api.openweathermap.org/data/2.5/weather',
  KEY: 'ced4960b4f29616c6327cdcc428f0897',
  API_GRIPHY: 'https://api.giphy.com/v1/gifs/random?',
  GIPHY_KEY: 'iO1ed13erOjW4NbbYZqqYs6mNYlvpggR',

};


const get_weather = async (city) => { // eslint-disable-line 
  const awaitdata = await fetch(`${API.API_ID}?q=${city}&units=metric&appid=${API.KEY}`, { mode: 'cors' }) // eslint-disable-line 
    .then((response) => response.json())
    .then((data) => process_weather_data(data)) // eslint-disable-line 
    .catch((error) => {
      console.error('Error:', error); // eslint-disable-line 
    });
};

const process_weather_data = (data) => { // eslint-disable-line 
  const obj_div = document.getElementById('weather-data') || document.createElement('div'); // eslint-disable-line 
  obj_div.id = 'weather-data';
  const weatherContent = document.querySelector('.weather-form-content');
  const { weather, wind } = data;
  const {
    pressure, humidity, feels_like: feelsLike, temp,
  } = data.main;
  const e = document.getElementById('customSwitch1');
  let category = 0;
  let feels = 0;

  const url =`${API.GIPHY_KEY}&s=${weather}`
  
  
  
  e.addEventListener('change', () => {
    const { checked } = e;
    if (checked == false) { // eslint-disable-line 
      category = temp;
      feels = feelsLike;
    } else {
      category = Math.round(temp * (9 / 5) + 32);
      feels = Math.round(feelsLike * (9 / 5) + 32);
    }

    const objs = `city:${data.name},${data.sys.country}<br/>humidity:${humidity}%<br/>weather:${weather[0].description}
    <br/>temperature:${category}</br>pressure:${pressure} hpa<br/>wind:${wind.speed}mps
    <br/> feels like:${feels}<br/><span class="lg">
    <img src="http://openweathermap.org/img/w/${weather[0].icon}.png"></span><br/>`; //eslint-disable-line
    obj_div.innerHTML = ' ';
    obj_div.innerHTML = objs; // eslint-disable-line 
    if (document.querySelector('#weather-data') !== 'null') {
      card.appendChild(obj_div);
      weatherContent.appendChild(card);
    }
  });
  e.click();
};
get_weather('london');
async function getImg(url) {
  let images;
  const gang = document.getElementById('#weather-change');
  const response = await fetch(url, { mode: 'cors' })
    .then((res) => res.json())
    //console.log(response)
    .then((item) => {
    //console.log(item )
     console.log(item)
     const{bitly_gif_url}=item.data.bitly_gif_url;
    console.log(bitly_gif_url)})
     
    //let{images}=Object.values(item.images)
    //console.log(images)
    //gang.setAttribute('style', `background:url(${images[0].url})`);
    
    .catch((error) => {
      console.error('Error:', error);
    });
}



const inputlocation = document.querySelector('#weather-form');

inputlocation.addEventListener('submit', (e) => {
  e.preventDefault();
  const { city } = inputlocation;
  get_weather(city.value);
  inputlocation.reset();
  getImg(`https://api.giphy.com/v1/gifs/translate?api_key=iO1ed13erOjW4NbbYZqqYs6mNYlvpggR&s={weather}`)
  
});

export default process_weather_data; // eslint-disable-line 
