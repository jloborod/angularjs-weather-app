var weather = {
  bindings: {
    cityName: '<',
    data: '<'
  },
  templateUrl: './weather.html',
  controller: 'WeatherController'
}

angular
  .module('components.weather')
  .component('weather', weather)
  .config(function ($stateProvider) {
    $stateProvider
      .state('weather', {
        parent: 'app',
        url: 'weather/:cityName',
        component: 'weather',
        params: {
          cityName: null
        },
        resolve: {
          data: function (WeatherService, $transition$) {
            var params = $transition$.params();
            if (!params.cityName) return;
            return WeatherService.getWeather(params.cityName);
          }
        }
      })
  });
