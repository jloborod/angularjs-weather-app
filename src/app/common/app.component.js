var app = {
  templateUrl: './app.html'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('app', {
        redirectTo: 'weather',
        url: '/',
        component: 'app'
      });
    $urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  });