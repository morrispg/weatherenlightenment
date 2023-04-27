const searchbar = document.querySelector("#search-bar1")

const searchButton = document.querySelector("#search-button")

const cityName = document.querySelector("#city-name")

const temperature = document.querySelector("#temperature")

const wind = document.querySelector("#wind")

const humidity = document.querySelector("#humidity")

const fiveDay = document.querySelector(".five-day")

function showFiveDay(data){
  console.log (data)
  fiveDay.innerHTML = ""
  for(let i=0; i<data.list.length; i=i+8){
    console.log(data.list[i])
    const html = `<div class="card col-2">
    <div class="card-title">
      <p>${data.list[i].dt_txt}</p>
    </div>
    <div class="card-body">
      <p>wind ${data.list[i].wind.speed}</p>
      <p>humidity ${data.list[i].main.humidity}</p>
      <p>temperature ${data.list[i].main.temp}</p>
      <img src = https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png>
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

//When I look for city save into array 
//Check if city is in an Array Push city into array after search
//// If there is no search term return the function
// var searchHistory  = []
/* if (searchHistory.indexOf(search) !== -1) {
  return;
}
searchHistory.push(search); 

Turn array into string (can only save strings in local storage)

Save localStorage.setItem("history", JSON.stringify(searchHistory))

localSotrage.getItem render with forLoop
*/