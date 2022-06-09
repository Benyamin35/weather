const button = document.querySelector(".button");
const input = document.getElementById("inputValue");
const country = document.querySelector(".country");
const city = document.querySelector(".city");
const weather_temp = document.querySelector(".weather_temp");
const weather_main = document.querySelector(".weather_main")
const weather_humidity = document.querySelector('.weather_humidity');
const weather_windSpeed = document.querySelector('.weather_windSpeed');
const weather_mainIcon = document.querySelector('.weather_main_icon'); 
const str = document.querySelector('.str');
const icon = document.querySelector('.open_Icon');


const form = document.querySelector('form');
form.addEventListener('submit', (e) => { 
  e.preventDefault();    
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e3485ab3e409e261d1828f32d0cc44f0`)
  .then ((resp) =>  { return resp.json() }) 
  .then ((data) => {
      const cityValue = data['name'];
      const countryValue = data.sys.country;
      const weather_tempValue = data['main']['temp'];   
      const weather_mainValue = data.weather[0].main;
      const weather_iconValue = data.weather[0].icon;
      const weather_humidityValue = data['main']['humidity'];
      const weather_windSpeedValue = data['wind']['speed'];

      
      function kelvinToCels(kelvin) {
        let temp = kelvin - 273.15;
        let floor = temp.toFixed(1);
        return floor;
        
      } 
      const floor = kelvinToCels(weather_tempValue);

      const weather_iconValueUrl = "http://openweathermap.org/img/w/" + weather_iconValue + ".png";
      const iconOriginal = $('.open_Icon').attr('src', weather_iconValueUrl);

      city.innerHTML = cityValue + ",";
      country.innerHTML = countryValue;
      weather_temp.innerHTML = floor +  "℃";
      weather_main.innerHTML = weather_mainValue;
      icon.innerHTML = iconOriginal;
      weather_humidity.innerHTML =  "Humidity:" + " "  + weather_humidityValue + "%"; 
      weather_windSpeed.innerHTML = "Wind Speed: " + " " + weather_windSpeedValue + " " + "km/h";

  })})


