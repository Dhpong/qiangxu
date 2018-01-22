angular.module('app')
	.controller('guideController',['$scope','$state',function($scope,$state){
		$scope.goregister=function(StateName){
			$state.go('register');
		}
		
	}])
