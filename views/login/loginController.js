angular.module('app')
	.controller('loginController',['$scope','$state',function($scope,$state){
		$scope.goregister=function(StateName){
			$state.go('register');
		}

		$scope.gohelp=function(StateName){
			$state.go('help');
		}

		$scope.gohome=function(StateName){
			$state.go('home');
		}
		
	}])
