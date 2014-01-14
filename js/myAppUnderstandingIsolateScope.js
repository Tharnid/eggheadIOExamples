var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.leaveVoicemail = function(number, message) {
        alert("Number: " + number + " said: " + message)
    }
})

app.directive("phone", function() {
    return {
        restrict: "E",
        scope: {
            number: "@",
            network: "=",
            makeCall: "&"
        },
        template: '<div class="panel panel-default">Number: {{number}} <br> Network:<select ng-model="network" ng-options="net for net in networks">' +
          '<input type="text" ng-model="value">' +
          '<div class="btn btn-primary" ng-click="makeCall({number: number, message: value})">Call home!</div></div>',

        link: function(scope) {
            scope.networks = ["Verizon", "AT&T", "Sprint"];
            scope.network = scope.networks[0];
        }
    }
})