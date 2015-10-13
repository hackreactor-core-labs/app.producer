angular.module('producer.main', [])

.controller('mainController', function ($scope, Template, Roles) {
  $scope.template = {role: '', event: '', description: ''};
  $scope.roles = [];
  $scope.submitTemplate = function() {
    $scope.template.event = $scope.tags.reduce(function(eventList, currEvent) {
      return eventList+= currEvent.abbreviation;
    }, '');
    var template = {
      role: $scope.template.role,
      event: $scope.template.event,
      description: $scope.template.description
    };
    Template.submitTemplate(template);
  };

  $scope.tags = [];

  $scope.loadTags = function($query) {
    return Template.eventsList($query);
  };
});

$scope.getRoles = function() {
    Roles.getRoles(function(roles){
      roles.forEach(function(role){
        $scope.roles.push(role.name);
      });
    })
  }
  $(function() {
    $(".roles-input").autocomplete({
      source: $scope.roles
    });
  });
});
