var myApp = angular.module('myApp', []);

var myApp = angular.module('myApp', []);

myApp.factory('BigTen', function() {

	var BigTen = {};

	BigTen.schools = [
		{
			name: "Illinois",
			nickname: "Fighting Illini"
		},
		{
			name: "Indiana",
			nickname: "Hoosiers"
		},
		{
			name: "Iowa",
			nickname: "Hawkeyes"
		},
		{
			name: "Maryland",
			nickname: "Terrapins"
		},
		{
			name: "Michingan",
			nickname: "Wolverines"
		},
		{
			name: "Michigan State",
			nickname: "Spartans"
		},
		{
			name: "Minnesota",
			nickname: "Golden Gophers"
		},
		{
			name: "Nebraska",
			nickname: "Cornhuskers"
		},
		{
			name: "Northwestern",
			nickname: "Wildcats"
		},
		{
			name: "Ohio State",
			nickname: "Buckeyes"
		},
		{
			name: "Penn State",
			nickname: "Nittany Lions"
		},
		{
			name: "Purdue",
			nickname: "Boilermakers"
		},
		{
			name: "Rutgers",
			nickname: "Scarlet Knights"
		},
		{
			name: "Wisconsin",
			nickname: "Badgers"
		}		
	];

	return BigTen;

})

function BigTenCtrl($scope, BigTen) {
	$scope.bigten = BigTen;
}