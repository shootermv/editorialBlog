var app = angular.module('blogApp', ['ngMaterial', 'ui.router']);
app.config(function($mdThemingProvider,$stateProvider, $urlRouterProvider, $mdIconProvider) {
  //
  // For any unmatched url, redirect to /versions
  $urlRouterProvider.otherwise("/versions");
  //
  // Now set up the states
  $stateProvider
    .state('versions', {
      url: "/versions",
      controller:'versionsCtrl',
      controllerAs:'ctrl',
      templateUrl: "versions.html"
    })
    
    .state('versions.detail', {
      url: "/:id",
      views:{
        '@':{
          templateUrl:"versiondetail.html"
        }
      }
    })  
    
    
    .state('guides', {
      url: "/guides",
      templateUrl: "guides.html"
    })
    
    
    .state('developers', {
      url: "/developers",
      templateUrl: "developers.html"
    }) ;   
    
    
  $mdThemingProvider.theme('default')
   
   $mdIconProvider.iconSet('communication', 'https://material.angularjs.org/latest/img/icons/sets/communication-icons.svg', 24);
   
   
});
app.controller('MainCtrl', function($scope, $state) {
    var vm = this;
    vm.currentSection = 'versions';
    
   
    vm.sections=[{name:'versions', icon:'home', selected:true}, {name:'guides', icon:'alarms'}, {name:'developers',icon:'face'}]; 
    vm.goToSection = function(item){
      vm.sections.forEach(function(section){
        section.selected =false;
      })
      item.selected = true;
      vm.currentSection = item.name;
      $state.go(item.name)
    }
  
});
