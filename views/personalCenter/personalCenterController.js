angular.module('app')
	.controller('personalCenterController',['$scope','$state',function($scope,$state){
		$scope.goregister=function(StateName){
			$state.go('register');
		}
		
	}])
