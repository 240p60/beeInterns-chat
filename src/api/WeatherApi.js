export default function WeatherApi (city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20e21884cea017c9581d62521fee3738`)
  .then(response => response.json())
  .catch(err => {
      console.log(err);
  });
}