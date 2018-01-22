angular.module('app')
	.controller('searchpasswordController',['$scope','$state',function($scope,$state){
		$scope.gologin=function(StateName){
			$state.go('login');
		}
		
	}])