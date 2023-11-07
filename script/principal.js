const screenHours = document.querySelector('.hours');

const updateClock = () => {
    const date = new Date();
    const tokyoTime = date.toLocaleTimeString('fr-FR', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
    });

    screenHours.textContent = `${tokyoTime}`;
}

updateClock();
setInterval(updateClock, 1000);

const weatherIcons = {
    'Thunderstorm': 'wi wi-thunderstorm',
    'Drizzle': 'wi wi-sleet',
    'Rain': 'wi wi-rain',
    'Snow': 'wi wi-snow',
    'Clear': 'wi wi-day-sunny',
    'Clouds': 'wi wi-cloudy',
    'Mist': 'wi wi-fog',
    'Dust': 'wi wi-dust',
    'Fog': 'wi wi-fog'
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getWeather() {
    const meteo = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=b347e169f18399286933d386e1e72a79&units=metric&lang=fr')
        .then(response => response.json())
        .then(json => json);

    console.log(meteo)

    displayWeather(meteo);
}

const displayWeather = (data) => {
  const name = data.name;
  const temp = data.main.temp;
  const conditions = data.weather[0].main;
  const description = data.weather[0].description;

  document.querySelector('.meteo__city').textContent = name.slice(-5);
  document.querySelector('.meteo__temperature').textContent = Math.round(temp);
  document.querySelector('.meteo__description').textContent = capitalize(description);
  document.querySelector('i.wi').className = weatherIcons[conditions];
}









