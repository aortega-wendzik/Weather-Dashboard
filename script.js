const apiUrls = [
  'https://api.openweathermap.org/data/2.5/forecast?lat=37.392529&lon=-5.994072&appid=9694518a7a56fac30129d3e86c6ac9cb', // Seville, Spain
  'https://api.openweathermap.org/data/2.5/forecast?lat=40.712776&lon=-74.005974&appid=9694518a7a56fac30129d3e86c6ac9cb', // New York, USA
  'https://api.openweathermap.org/data/2.5/forecast?lat=35.689487&lon=139.691711&appid=9694518a7a56fac30129d3e86c6ac9cb', // Tokyo, Japan
  'https://api.openweathermap.org/data/2.5/forecast?lat=-33.868820&lon=151.209290&appid=9694518a7a56fac30129d3e86c6ac9cb', // Sydney, Australia
  'https://api.openweathermap.org/data/2.5/forecast?lat=51.507351&lon=-0.127758&appid=9694518a7a56fac30129d3e86c6ac9cb' // London, UK
];
 // Get the weather-info element from the HTML document
const weatherInfo = document.getElementById("weather-info");

// Loop through the array of API URLs
apiUrls.forEach(function (apiUrl) {
  // Make the GET request
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract the relevant data from the response
      const cityName = data.city.name;
      const date = data.list[0].dt_txt;
      const weatherIcon = data.list[0].weather[0].icon;
      const temperature = data.list[0].main.temp;
      const humidity = data.list[0].main.humidity;
      const windSpeed = data.list[0].wind.speed;

      // Create a new div element for each city
      const cityDiv = document.createElement("div");
      // Give it a unique id based on the city name
      cityDiv.id = cityName + "-div";
      // Give it a common class name for styling
      cityDiv.className = "city-div";

      // Create HTML elements to display the information
      const cityNameP = document.createElement("p");
      cityNameP.textContent = `City: ${cityName}`;
      const dateP = document.createElement("p");
      dateP.textContent = `Date: ${date}`;
      const weatherIconImg = document.createElement("img");
      weatherIconImg.src = `https://openweathermap.org/img/w/${weatherIcon}.png`; // Use 'https' protocol
      const temperatureP = document.createElement("p");
      temperatureP.textContent = `Temperature: ${temperature} K`;
      const humidityP = document.createElement("p");
      humidityP.textContent = `Humidity: ${humidity}%`;
      const windSpeedP = document.createElement("p");
      windSpeedP.textContent = `Wind Speed: ${windSpeed} m/s`;

      // Append the elements to the cityDiv element
      cityDiv.appendChild(cityNameP);
      cityDiv.appendChild(dateP);
      cityDiv.appendChild(weatherIconImg);
      cityDiv.appendChild(temperatureP);
      cityDiv.appendChild(humidityP);
      cityDiv.appendChild(windSpeedP);

      // Append the cityDiv element to the weatherInfo element
      weatherInfo.appendChild(cityDiv);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
