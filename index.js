/* global angular */
angular
  .module('heroApp', [
    'ngComponentRouter'
  ])
  .controller('mainCtrl', AppController);

AppController.$inject = ['$router'];
function AppController ($router) {
  $router.config([
    {path: '/home',    name:'Master',  component: 'bashDetail', useAsDefault: true},
    {path: '/about',   name:'Step2',   component: 'heroList'}
  ]);
}