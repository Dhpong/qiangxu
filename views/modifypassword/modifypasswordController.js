angular.module('app')
	.controller('modifypasswordController',['$scope','$state',function($scope,$state){
		$scope.goregister=function(StateName){
			$state.go('register');
		}

		$scope.gopersonalCenter=function(StateName){
			$state.go('personalCenter');
		}
		

		$scope.gochat=function(StateName){
			$state.go('chat');
		}


	}])