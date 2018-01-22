angular.module('app')
	.controller('registerController',['$scope','$state',function($scope,$state){
		$scope.gonews=function(StateName){
			$state.go('news');
		}

		$scope.gologin=function(StateName){
			$state.go('login');
		}
		
	}])