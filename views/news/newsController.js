angular.module('app')
	.controller('newsController',['$scope','$state',function($scope,$state){
		$scope.goabout=function(StateName){
			$state.go('about');
		}

		$scope.gohelp=function(StateName){
			$state.go('help');
		}

		
		$scope.data = [
			
			{ imgurl:"./images/message01.png",title:" 物流助手",declu:"派送中，您在强旭商城购买的宝贝已到附近城市，期...",time:"2017-9-12"  },

			{ imgurl:"./images/message02.png",title:" 通知消息",declu:"您刚使用10积分！要赚更多？3888个积分、100元强..." ,time:"2017-9-12"  },

			{ imgurl:"./images/message03.png",title:"强旭商城 ",declu:"亲，请核对以下信息是否正确！订单编号616003186..." ,time:"2017-9-12"  },


		]

	}])
