var behavior = angular.module("behaviorApp", []);

behavior.directive("enter", function() {
	// restrict: "A", // no restriction it defaults to A
	// you can return the function
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			element.addClass(attrs.enter);
			console.log("I'm inside of you!!!");
		})
	}

});

behavior.directive("leave", function() {
	// restrict: "A", // no restriction it defaults to A
	// you can return the function
	return function(scope, element, attrs) {
		element.bind("mouseleave", function() {
			element.removeClass(attrs.enter);
			console.log("I'm outside of you!!!");
		})
	}

});

