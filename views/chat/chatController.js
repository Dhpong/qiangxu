angular.module('app')
	.controller('chatController',['$scope','$state',function($scope,$state){
		$scope.gonewproduce=function(StateName){
			$state.go('newproduce');
		}

		$scope.gomy=function(StateName){
			$state.go('my');
		}
		
	}])