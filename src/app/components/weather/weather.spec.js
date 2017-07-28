describe('Weather', function () {
  beforeEach(module('components.weather'));

  beforeEach(module(function ($stateProvider) {
    $stateProvider.state('app', { url: '/'});
  }));

  describe('WeatherService', function () {
    var WeatherService;

    beforeEach(inject(function($injector) {
      WeatherService = $injector.get('WeatherService');

      spyOn(WeatherService, 'getWeather')
      .and.callFake(function(cityName) {
        return { name: cityName };
      });
    }));

    it('should get the weather for a certain city', function() {
      expect(WeatherService.getWeather('London')).toEqual({ name: 'London' });
    });
  });
});
