angular.module('app')
	.controller('resetpaypasswordController',['$scope','$state',function($scope,$state){
		$scope.gologin=function(StateName){
			$state.go('login');
		}
		
	}])