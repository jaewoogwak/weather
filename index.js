const cityList = ["Seoul", "New York", "Paris", "Alaska", "Los Angeles"];

const getCityWeatherData = async (cityName) => {
  const temp = document.getElementsByClassName("temp")[0];
  const weather = document.getElementsByClassName("weather")[0];
  const city = document.getElementsByClassName("city")[0];
  city.innerHTML = "Loading...";
  weather.innerHTML = "Loading...";
  temp.innerHTML = "Loading...";
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0be87df02cd14b1d08489cd0372b5b0e`
  );
  city.innerHTML = `${cityName}`;
  weather.innerHTML = `${data.data.weather[0].main}`;
  temp.innerHTML = `${(data.data.main.feels_like - 273.15).toFixed(1)}도`;
};

const setCity = () => {
  const cities = document.getElementsByClassName("cities")[0];
  cities.innerHTML = cityList
    .map(
      (city) =>
        `<button class = "citySelector" onclick="getCityWeatherData(this.innerText)">${city}</button>`
    )
    .join("");
};

setCity();
