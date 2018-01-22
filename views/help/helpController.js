angular.module('app')
	.controller('helpController',['$scope','$state',function($scope,$state){
		$scope.gonewproduce=function(StateName){
			$state.go('newproduce');
		}
		
	}])