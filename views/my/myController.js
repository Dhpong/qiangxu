angular.module('app')
	.controller('myController',['$scope','$state',function($scope,$state){
		$scope.gomy=function(StateName){
			$state.go('my');
		}

		$scope.goshoppingcar=function(StateName){
			$state.go('shoppingcar');
		}

		$scope.gohome=function(StateName){
			$state.go('home');
		}

		$scope.goshopping=function(StateName){
			$state.go('shopping');
		}
		
	}])
