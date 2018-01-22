angular.module('app')
	.controller('assessController',['$scope','$state',function($scope,$state){
		$scope.gomy=function(StateName){
			$state.go('my');
		}

		

		
	}])