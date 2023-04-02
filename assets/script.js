
var citysubmit = $(".submitcity");
var searchedcity = $("#searchedcity");
var forecast = $(".realsearchresults");

var forecastitem = document.createElement("div");
forecastitem.setAttribute("style", "width: 80%");
forecastitem.setAttribute("style", "justify-content: space-between");
var forecastname = document.createElement("h1");
var forecasttemp = document.createElement("h1");
var forecasthumi = document.createElement("h1");
var forecastwind = document.createElement("h1");


var today = dayjs();


$(".submitcity").click(function(event) {
    event.preventDefault();
    console.log("I dont work until i have to");
    let tempcity = searchedcity.val().replace(/\s+/g, '_');
    var tempapi_tocoords = "http://api.openweathermap.org/geo/1.0/direct?q=" + tempcity + "&limit=&appid=2aed98a0f47156774905a6b832070e7d";
    console.log(tempapi_tocoords);
    displayforecast(tempapi_tocoords);
    localweather(searchedcity.val());
})

function displayforecast(url1) {
        fetch(url1)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data[0]);
                console.log(data);
                let templat = data[0].lat;
                let templon = data[0].lon;
                var gettheweather = "https://api.openweathermap.org/data/2.5/weather?lat=" + templat + "&lon=" + templon + "&appid=2aed98a0f47156774905a6b832070e7d";
                fetch(gettheweather)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (data) {
                    console.log(data);
                    var currenttemp = Math.floor(((data.main.temp - 273.15) * 1.8) + 32);
                    var currentcloud = data.weather[0].icon;
                    forecast.append(forecastitem);
                    forecastitem.append(" Wind " +data.wind.speed);
                    forecastitem.append(" Humidity " +data.main.humidity);
                    forecastitem.append(" Temperature " + currenttemp);
                    forecastitem.append(currentcloud);
                    
                })
            })

        
}

$(function () {
    $("#currentday").text(today.format("MMM D, YYYY"));
    $("#1").text(today.add(1, 'day').format("MMM D, YYYY"));
    $("#2").text(today.add(2, 'day').format("MMM D, YYYY"));
    $("#3").text(today.add(3, 'day').format("MMM D, YYYY"));
    $("#4").text(today.add(4, 'day').format("MMM D, YYYY"));
    $("#5").text(today.add(5, 'day').format("MMM D, YYYY"));

})

var citylist = [];

function localweather(city) {
    citylist.shift(city);
    localStorage.setItem("citys", JSON.stringify(citylist));
    console.log(citylist);
} 
