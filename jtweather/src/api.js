var apiKey="ad4c9a26c3a4d734c35a27c8ad716978";
var rootUrl= `api.openweathermap.org/data/2.5/forecast/daily?APPID=${apiKey}`;

var kelvinToF = function(kelvin){
  return Math.round((kelvin-273.15)* 1.8+ 32) + " ˚F";
}
var kelvinToC = function(kelvin){
  return Math.round((kelvin-273.15)) + " ˚C";
}

module.exports = function(lat,lon){
  var cnt=10;
  var url = `${rootUrl}&lat=${lat}&lon=${lon}&cnt=${cnt}`;
  // Fetch takes in url, returns a promise
  return fetch(url)
    .then(function(response){
      // json is a results of a promise
      return response.json();
    })
    .then(function(json){
      return{
        city: json.name,
        temperature: kelvinToC(json.main.temp),
        description: json.weather[0].description
      }
    });

};
