import { apiKey } from '../../../api.config.json';

function WeatherService($http) {
  this.getWeather = function(cityName) {
    if(!apiKey) return;
    return $http
      .get(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${cityName}`)
      .then(function (res) {
        return res.data;
      })
      .catch(function (error) {
        return error;
      });
  };
}

angular
  .module('components.weather')
  .service('WeatherService', WeatherService);
