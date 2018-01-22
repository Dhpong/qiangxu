angular.module('app')
	.controller('collectController',['$scope','$state',function($scope,$state){
		$scope.gonewproduce=function(StateName){
			$state.go('newproduce');
		}

		$scope.gohome=function(StateName){
			$state.go('home');
		}
		
	}])