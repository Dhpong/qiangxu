angular.module('app')
	.controller('addcartController',['$scope','$state',function($scope,$state){
		$scope.gohome=function(StateName){
			$state.go('home');
		}

		$scope.data = [
			{code:"200S/小号颈高12cm（颈围35-40）"},
			{code:"200/小号颈高13cm（颈围40-43）"},
			{code:"300/中号颈高14cm（颈围43-46）"},
			{code:"400/小号颈高15cm（颈围46-50）"}
			
		];
		
	}])