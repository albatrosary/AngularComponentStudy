function HeroDetailController() {
  this.name = 'Angular';
}

angular
  .module('heroApp')
  .component('bashDetail', {
    templateUrl: 'components/mater/bashDetail.html',
    controller: HeroDetailController
  });