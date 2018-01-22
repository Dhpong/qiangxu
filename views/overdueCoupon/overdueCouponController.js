angular.module('app')
	.controller('overdueCouponController',['$scope','$state',function($scope,$state){
		$scope.gonews=function(StateName){
			$state.go('news');
		}
		
	}])
