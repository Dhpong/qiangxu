angular.module('app')
	.controller('shoppingController',['$scope','$state',function($scope,$state){
		$scope.gologin=function(StateName){
			$state.go('login');
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

		$scope.data = [
			{imgurl: './images/Home_classificati01.png', desc: '新品专区'},
			{imgurl: './images/Home_classificati02.png', desc: '医疗护具'},
			{imgurl: './images/Home_classificati03.png', desc: '吸塑产品'},
			{imgurl: './images/Home_classificati04.png', desc: '更多产品'}
	 	];
		
	}])