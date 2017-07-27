function WeatherController($state) {
  var ctrl = this;

  ctrl.submitForm = function () {
    $state.go('weather', {
      cityName: this.cityName
    });
  }
}

angular
  .module('components.weather')
  .controller('WeatherController', WeatherController);