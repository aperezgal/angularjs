'use strict';

/* Controllers */


function HomeCtrl($scope) {
	//Call Global Function
	$scope.marianoGuay();
}



function AboutCtrl($scope) {
}


function ProjectsCtrl($scope) {
   $scope.projects = [
      {"name":"Three.js", "description":"Project 01 description"},
      {"name":"Backbone", "description":"Project 02 description"},
      {"name":"Angular", "description":"Project 03 description"},
      {"name":"SVG", "description":"Project 04 description"},
      {"name":"Others", "description":"Project 05 description"}
   ];
}


function ContactCtrl($scope) {
}
