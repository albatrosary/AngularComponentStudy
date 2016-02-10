function HeroDetailController() {
  
}

angular
  .module('heroApp')
  .component('bashDetail', {
    templateUrl: 'components/mater/bashDetail.html',
    controller: HeroDetailController,
    // Component Routerを利用した場合にはタグ(<bash-detail>)のプロパティは取れない
    // Routerが<bash-detail></bash-detail>を動的に生成するため
    bindings: {
      hero: '='
    }
  });