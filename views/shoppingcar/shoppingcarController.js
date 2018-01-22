angular.module('app')
	.controller('shoppingcarController',['$scope','$state',function($scope,$state){
		$scope.gonews=function(StateName){
			$state.go('news');
		}

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