describe('App', function() {
  beforeEach(module('ui.router'));
  beforeEach(module('common'));

  beforeEach(module(function ($stateProvider) {
    $stateProvider.state('weather', { url: '/weather' })
  }));

  describe('Routes', function () {
    var $state, $location, $rootScope;

    function goTo(url) {
      $location.url(url);
      $rootScope.$digest();
    }

    beforeEach(inject(function ($injector) {
      $state = $injector.get('$state');
      $location = $injector.get('$location');
      $rootScope = $injector.get('$rootScope');
    }));

    it('should redirect to weather state', function() {
      goTo('/app');

      expect($state.current.name).toEqual('weather');
    });
  });
});