export default function WeatherApi (city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20e21884cea017c9581d62521fee3738`)
  .then(response => response.ok ? response.json() : Promise.reject(response))
  .catch(err => {
      console.log('Некорректный ответ от сервера');
  });
}