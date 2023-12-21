const inputBox = document.querySelector(".input");
const searchBtn = document.querySelector(".icon");
const weather__img = document.querySelector(".weather__img img");

const dataFatch = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=066344b0f25bd7f684fedba940641c3b&units=metric`;
  const responce = await fetch(url);
  const data = await responce.json();
  if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weather__img.src = "./images/clouds.png";
    }
    if (data.weather[0].main == "Clear") {
      weather__img.src = "./images/clear.png";
    }
    if (data.weather[0].main == "Rain") {
      weather__img.src = "./images/rain.png";
    }
    if (data.weather[0].main == "Drizzle") {
      weather__img.src = "./images/mist.png";
    }
  }
  document.querySelector(".error").style.display = "block";
};
searchBtn.addEventListener("click", () => {
  dataFatch(inputBox.value);
  inputBox.value = "";
});
