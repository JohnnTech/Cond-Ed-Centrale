const apiKey = "3bdc0e59cbdaf18c6b4e48bb9cbc052f";
const city = "Santo Antônio do Descoberto";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    document.getElementById("temperature").textContent = `${temperature}°C`;
    document.getElementById("weather-description").textContent =
      description.charAt(0).toUpperCase() + description.slice(1);
  })
  .catch((error) => console.error("Erro ao buscar dados da API:", error));

fetch(forecastUrl)
  .then((response) => response.json())
  .then((data) => {
    const forecastElement = document.getElementById("forecast");
    forecastElement.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const forecast = data.list[i * 8]; // 8 intervals per day
      const date = new Date(forecast.dt_txt).toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      const temp = forecast.main.temp;
      const desc = forecast.weather[0].description;
      forecastElement.innerHTML += `<p>${date}: ${temp}°C, ${
        desc.charAt(0).toUpperCase() + desc.slice(1)
      }</p>`;
    }
  })
  .catch((error) => console.error("Erro ao buscar dados da API:", error));
