//fallback url in case we can't get location. 
var seattle = 'http://api.openweathermap.org/data/2.5/weather?lat=47.6036&lon=-122.329&units=imperial';

$(document).ready(function() {
  //get the location. If successful, get weather and reverse geocode.
  navigator.geolocation.getCurrentPosition(success, error, options);

  var options = {
    enableHighAccuracy: false,
    timeout: 3000,
    maximumAge: 18000
  };

  function success(pos) {
    var crd = pos.coords,
      lat = crd.latitude,
      lon = crd.longitude,
      loc = lat + "," + lon,
      geocodingAPI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + loc,
      weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial';

    reverseGeocode(geocodingAPI);
    getWeather(weatherAPI);
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    alert("Please enable location to get your weather. Redirecting you to Seattle.");
    document.getElementById("city").innerHTML = "Seattle, WA";
    getWeather(seattle);
  };
});

//get the city and state and add it to the top of the page
function reverseGeocode(url) {

  $.get(url, function(result) {
    //look for city, state, and country based on types specified in the JSON
    if (result.status === "ZERO_RESULTS") {
      document.getElementById("city").innerHTML = "Location Unknown";
      return;
    }
    var city = "",
      state = "",
      country = "",
      locData = result.results[0];

    for (var i = locData.address_components.length - 1; i >= 0; i--) {
      var ac = locData.address_components[i];
      if (ac.types.indexOf("locality") >= 0) city = ac.long_name;
      if (city == '' && ac.types.indexOf("administrative_area_level_2") >= 0) city = ac.long_name;
      if (ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
      if (ac.types.indexOf("country") >= 0) country = ac.long_name;
    }
    //Handle empty data
    if (city == '' || country == '') {
      document.getElementById("city").innerHTML = "Location Unknown";
    } else if (country === "United States" && city != '' && state != '') {
      document.getElementById("city").innerHTML = city + ", " + state;
    } else {
      document.getElementById("city").innerHTML = city + ", " + country;
    }
  });

}

//getWeather based on url from 
function getWeather(url) {
  $.get(url, function(result) {
    //store the temperature, weather description, wind speed, wind direction, and country
    var city = result.name,
      description = result.weather[0].description,
      id = result.weather[0].id,
      speed = (result.wind.speed * 0.86897624190816).toFixed(2),
      deg = result.wind.deg,
      country_short = result.sys.country;

    //also used by the F/C button
    temp = result.main.temp.toFixed(0);
    temp_c = ((temp - 32) * (5 / 9)).toFixed(0);

    //Get wind compass direction. If API returns null, assume 0 degrees.
    if (deg) {
      var val = Math.floor((deg / 22.5) + 0.5),
        arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"],
        wind_dir = arr[(val % 16)];
    } else {
      var wind_dir = "N";
    }
    //Change icons and background according to weather conditions

    var background_id = [299, 499, 599, 699, 799, 800, 999]
    var background_icon = ["thunderstorm",
      "sprinkle",
      "rain",
      "snow",
      "fog",
      "night-clear",
      "cloudy"
    ]
    var background_img = ["http://i.imgur.com/4qUdU7P.jpg",
      "http://i.imgur.com/osnykRh.jpg",
      "http://i.imgur.com/mCgRhZg.jpg",
      "http://i.imgur.com/f38GZs9.jpg",
      "http://i.imgur.com/pyM5SVR.jpg",
      "http://i.imgur.com/ME2vQOt.jpg",
      "http://i.imgur.com/L0yCoKL.jpg"
    ]
    for (i = 0; i < background_id.length; i++) {
      if (id <= background_id[i]) {
        var icon_class = background_icon[i];
        document.body.background = background_img[i];
      }
    }

    //if location is disabled, make the background Seattle.
    if (url == seattle) {
      document.body.background = "http://i.imgur.com/YLOxiNR.jpg";
    }

    //determine F or C based on country and add temperature to the page.
    var fahrenheit = ['US', 'BS', 'BZ', 'KY', 'PL'];
    if (fahrenheit.indexOf(country_short) > -1) {
      celsius = false;
      document.getElementById("temperature").innerHTML = temp + "° F";
    } else {
      celsius = true;
      document.getElementById("temperature").innerHTML = temp_c + "° C";
    }

    //If Google reverse geocode API couldn't get city name, 
    //use openWeatherMap's less user-friendly data instead.
    //since both reverseGeocode() and getWeather() run async
    //this may complete before reverseGeocode finishes... Need
    //to juggle async longer term - this is a nice to have feature for now.
    if (document.getElementById("city").innerHTML === "Location Unknown") {
      document.getElementById("city").innerHTML = city + ", " + country_short;
    }

    //write final weather and wind conditions to the page
    document.getElementById("wind-speed").innerHTML = '<i style="font-size: 2em" class="wi wi-wind wi-from-' + wind_dir.toLowerCase() + '"></i><br>' + wind_dir + ' ' + speed + " knots";
    document.getElementById("description").innerHTML = '<i style="font-size: 2em" class="wi wi-' + icon_class + '"></i><br>' + description;

  });
}

//toggle between celsius / fahrenheit
function convert() {
  if (celsius == false) {
    document.getElementById("temperature").innerHTML = temp_c + "° C";
    celsius = true;
  } else {
    document.getElementById("temperature").innerHTML = temp + "° F";
    celsius = false;
  }
}