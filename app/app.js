"use strict";

var walletApp = angular.module('walletApp', ['ngRoute']);

walletApp.config( function( $routeProvider ) {
  $routeProvider.when( "/", {
	    templateUrl: "app/partials/dashboard.html",
	    controller: "dashboardCtrl"
  	}).when("/in", {
  		templateUrl: "app/partials/in.html",
	    controller: "dashboardCtrl"
  	}).when("/out", {
  		templateUrl: "app/partials/out.html",
	    controller: "dashboardCtrl"
  	}).when("/grocery-list", {
  		templateUrl: "app/partials/grocery-list.html",
	    controller: "dashboardCtrl"
  	}).when("/reminders", {
  		templateUrl: "app/partials/reminders.html",
	    controller: "dashboardCtrl"
  	});
});