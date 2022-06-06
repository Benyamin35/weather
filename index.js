const button = document.querySelector(".button");
const input = document.getElementById("inputValue");

button.addEventListener('click', function (){
      
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e3485ab3e409e261d1828f32d0cc44f0')
.then (function (resp) {return resp.json() }) 
.then (function (data){ 
    console.log(data)})

.catch (err => alert ("Wrong city name!"))})
