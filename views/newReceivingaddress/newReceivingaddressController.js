angular.module('app')
	.controller('newReceivingaddressController',['$scope','$state',function($scope,$state){
		$scope.gopersonalCenter=function(StateName){
			$state.go('personalCenter');
		}
		
	}])