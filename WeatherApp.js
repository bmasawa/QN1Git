const apiKey = 'b5f9c294dc0289afa8a1acac59eac869';
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('cityInput');

function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp} \xB0C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed}m/s`;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('weather-icon').innerHTML = `<i class="wi wi-${data.weather[0].icon}"></i>`;
        
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-container').textContent = 'Error fetching weather data.';
      });
  }

  searchButton.addEventListener('click', () => {
    //Event.defaultPrevented();
    const city = cityInput.value;
    fetchWeatherData(city);
  });


  function clearMe(){
    document.getElementById('cityInput').value = null;
    document.getElementById('city-name').textContent = null;
        document.getElementById('temperature').textContent = null;
        document.getElementById('humidity').textContent = null;
        document.getElementById('wind-speed').textContent = null;
        document.getElementById('description').textContent = null;
        document.getElementById('weather-icon').innerHTML = '';

  }