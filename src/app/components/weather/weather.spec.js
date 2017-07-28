describe('Weather', function () {
  beforeEach(module('components.weather'));

  beforeEach(module(function ($stateProvider) {
    $stateProvider.state('app', { url: '/'});
  }));

  describe('WeatherService', function () {
    var WeatherService;

    beforeEach(inject(function($injector) {
      WeatherService = $injector.get('WeatherService');

      spyOn(WeatherService, 'getWeather');
      WeatherService.getWeather('London');
    }));

    it('should get the weather for a certain city', function() {
      expect(WeatherService.getWeather).toHaveBeenCalledWith('London');
    });
  });
});
