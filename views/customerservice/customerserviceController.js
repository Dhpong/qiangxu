angular.module('app')
	.controller('customerserviceController',['$scope','$state',function($scope,$state){
		$scope.gonewproduce=function(StateName){
			$state.go('newproduce');
		}

		$scope.goshoppingcar=function(StateName){
			$state.go('shoppingcar');
		}
		
	}])