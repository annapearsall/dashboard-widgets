// API key. Replace with your API key
const APIKEY = 'ca4f7a2048f3631e2b48dfec851bfeff';
// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // convert sunrise unix timestamp to normal time format
  let sunriseUnix = `${data.sys.sunrise}`;

  var sunriseDate = new Date(sunriseUnix * 1000);
  var sunriseHours = sunriseDate.getHours();
  var sunriseMinutes = "0" + sunriseDate.getMinutes();
  const sunriseGotAmOrPM = sunriseHours >= 12 ? 'PM' : 'AM';
  var sunriseFormattedTime = sunriseHours + ':' + sunriseMinutes.substr(-2) + ' ' + sunriseGotAmOrPM;

  // convert sunset unix timestamp to normal time format
  let sunsetUnix = `${data.sys.sunset}`;

  var sunsetDate = new Date(sunsetUnix * 1000);
  var sunsetHours = sunsetDate.getHours();
  var sunsetMinutes = "0" + sunsetDate.getMinutes();
  const sunsetGotAmOrPM = sunsetHours >= 12 ? 'PM' : 'AM';
  var sunsetFormattedTime = sunsetHours + ':' + sunsetMinutes.substr(-2) + ' ' + sunsetGotAmOrPM;

console.log(sunriseFormattedTime);
  // Template to output
  const template = `
    <h1>Weather</h1>
    <data value="${data.name}" class="city">${data.name}</data> <br>
    <data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data> <br>
    <img class="weaicon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder"><br>
    <img class="icon" src="Sunrise.png" alt="sunrise icon"><br>
    <data value="${data.sys.sunrise}" class="sunrise">${sunriseFormattedTime}</data> <br>
    <img class="icon" src="Sunset.png" alt="sunrise icon"><br>
    <data value="${data.sys.sunset}" class="sunset">${sunsetFormattedTime}</data>
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});
