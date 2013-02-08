'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
    	templateUrl: 'templates/home.html',
    	controller: HomeCtrl
    });
    $routeProvider.when('/about', {
    	templateUrl: 'templates/about.html',
    	controller: AboutCtrl
    });
    $routeProvider.when('/projects', 
    	{templateUrl: 'templates/projects.html', 
    	controller: ProjectsCtrl
    });
    $routeProvider.when('/contact', {
    	templateUrl: 'templates/contact.html', 
    	controller: ContactCtrl
    }); 
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

 


 myApp.run(function($rootScope) {
	  $rootScope.marianoGuay = function() {
	    console.log('marianoGuay Jodido Perro');
	  }
	 
	 /**
	 * Wrapper for angular.isArray, isObject, etc checks for use in the view
	 *
	 * @param type {string} the name of the check (casing sensitive)
	 * @param value {string} value to check
	 */
	$rootScope.is = function(type, value) {
		return angular['is'+type](value);
	};
	/**
	 * Wrapper for $.isEmptyObject()
	 *
	 * @param value	{mixed} Value to be tested
	 * @return boolean
	 */
	$rootScope.empty = function(value) {
		return $.isEmptyObject(value);
	};

  	/**
	 * Debugging Tools
	 *
	 * Allows you to execute debug functions from the view
	 */
	$rootScope.log = function(variable) {
		console.log(variable);
	};
	$rootScope.alert = function(text) {
		alert(text);
	};

});

