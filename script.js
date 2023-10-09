document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    const searchButton = document.getElementById('searchButton');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    searchButton.addEventListener('click', () => {
        const city = cityInp.value.trim();

        if (city === '') {
            alert('Please enter a city name.');
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then((data) => {
                displayWeather(data);
            })
            .catch((error) => {
                weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    });

    function displayWeather(data) {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        const html = `
            <h2>Weather in ${cityName}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${weatherDescription}</p>
        `;

        weatherInfo.innerHTML = html;
    }
});