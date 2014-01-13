var app = angular.module("twitterApp", []);

app.controller("AppCtrl", function($scope) {
	$scope.loadMoreTweets = function() {
		alert("Loading more tweets!!!");
	},

	$scope.deleteTweets = function () {
		alert("Deleting tweets!!!");	
	}
});

app.directive("enter", function() {
	return function (scope, element, attrs) {
		element.bind("mouseenter", function() {
			console.log("enter!!!");
			// scope.loadMoreTweets();
			// scope.$apply("loadMoreTweets()")
			scope.$apply(attrs.enter);
		})
	}
})