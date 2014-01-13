var app = angular.module("superhero", []);

app.directive("superman", function() {
	return {
		// restrict: "A", // A for Attributes
		restrict: "C", // C for Class
		restrict: "M", // C for Comment
		link: function () {
			alert("I am working stronger!!!");
		}
	}
});


app.directive("flash", function() {
	return {
		// restrict: "A", // A for Attributes
		//restrict: "C", // C for Class
		// restrict: "M", // C for Comment
		restrict: "A", 
		link: function () {
			alert("I am working faster!!!");
		}
	}
});