angular.module('blogApp')
.controller('versionsCtrl',function(){
  var vm = this;
  var imagePath = 'https://material.angularjs.org/latest/img/list/60.jpeg';
  vm.openDetails = function(ev, id){
    
  }
  vm.todos = [
      {
        id: '1.0.1',
        face : imagePath,
        what: 'Brunch this weekend?',
        who: '1.0.1',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        id: '1.0.2',
        face : imagePath,
        what: 'Brunch this weekend?',
        who: '1.0.2',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        id: '1.0.3',
        face : imagePath,
        what: 'Brunch this weekend?',
        who: '1.0.3',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        id: '1.0.4',
        face : imagePath,
        what: 'Brunch this weekend?',
        who: '1.0.4',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        id: '1.0.5',
        face : imagePath,
        what: 'Brunch this weekend?',
        who: '1.0.5',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
})