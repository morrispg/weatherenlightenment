localStorage.setItem("City Name");
var score = localStorage.getItem("City Name");

console.log(searchForCity);

function searchForCity() {

}

element.addEventListener("click", searchForCity);

/* function myFunction() {
  document.getElementById("Search").innerHTML = "Search";
} */

search-button.addEventListener("click", function () {
	searchForCity();
});