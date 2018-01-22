angular.module('app')
	.controller('mypointsController',['$scope','$state',function($scope,$state){
		$scope.gonews=function(StateName){
			$state.go('news');
		}

		$scope.data = [
			{text: '哈根达斯单球冰淇淋',points:"￥26.8+88积分 "},
			{text: '哈根达斯单球冰淇淋',points:"￥26.8+88积分 "},
			{text: '哈根达斯单球冰淇淋',points:"￥26.8+88积分 "},
			{text: '哈根达斯单球冰淇淋',points:"￥26.8+88积分 "},
			{text: '哈根达斯单球冰淇淋',points:"￥26.8+88积分 "},
		];
		$scope.datas = [
			{text: '更多兑换'}
		];

		
	}])
