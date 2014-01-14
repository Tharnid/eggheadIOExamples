var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {

});

app.directive("panel panel-default", function() {
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="panel panel-default" ng-transclude>This is a panel component</div>'
    }
})