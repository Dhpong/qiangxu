angular.module('app')
	.controller('aboutController',['$scope','$state',function($scope,$state){
		$scope.gohome=function(StateName){
			$state.go('home');
		}

		$scope.gomy=function(StateName){
			$state.go('my');
		}
		
	}])