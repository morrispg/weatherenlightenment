const searchbar = document.querySelector("#search-bar1")

const searchButton = document.querySelector("#search-button")

const cityName = document.querySelector("#city-name")

const temperature = document.querySelector("#temperature")

const wind = document.querySelector("#wind")

const humidity = document.querySelector("#humidity")

const fiveDay = document.querySelector(".five-day")

function showFiveDay(data){
  console.log (data)
  for(let i=0; i<data.list.length; i=i+8){
    console.log(data.list[i])
    const html = `<div class="card col-2">
    <div class="card-title">
      <h3>${data.list[i].dt_txt}</h3>
    </div>
    <div class="card-body">
      <p></p>
    </div>
  </div>`
  fiveDay.insertAdjacentHTML("beforeend", html)
  }

}
function showWeather(data){
  cityName.textContent=data.city.name
  temperature.textContent=`temp: ${data.list[0].main.temp} degrees`
  wind.textContent=`wind: ${data.list[0].wind.speed} mph`
  humidity.textContent=`humidity: ${data.list[0].main.humidity} %`
}
function getWeather(){
  fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${searchbar.value}&appid=c82064eb7e58f2184dc24d4908b28cf9&units=imperial`)
  .then (response => {
    return response.json()
  }).then(data => {
    showWeather(data)
  showFiveDay(data)
  })
}

function save(){
  var cityName = document.getElementById('cityName').value;
  sessionStorage.setItem(cityName);
  display();
  cityName.value="";
}

function display(){
  var display_data = document.getElementById('display_data');
  for(var i = 0; i < sessionStorage.length; i++){
    var a = sessionStorage.cityName(i);
    var b = sessionStorage.getItem(a);
    display_data.innerHTML += a+" - "+b+"<br>";
  }
}
searchButton.addEventListener("click", getWeather)