
var citysubmit = $(".submitcity");
var searchedcity = $("#searchedcity");




$(".submitcity").click(function(event) {
    event.preventDefault();
    console.log("I dont work until i have to");
    let tempcity = searchedcity.val().replace(/\s+/g, '');
    var tempapi_tocoords = "http://api.openweathermap.org/geo/1.0/direct?q=" + tempcity + "&limit=&appid=2aed98a0f47156774905a6b832070e7d";
    console.log(tempapi_tocoords);
    getcoorddata(tempapi_tocoords);
   
})

function getcoorddata(url1) {
    fetch(url1)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}