function displayTemperature(response) {}

let apiKey = "00a006d0f0de6b3a3c074d8ac7d952d7";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=${apiKey}&units=metric";

axios.get(apiUrl).then(displayTemperature);
