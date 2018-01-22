angular.module('app')
	.controller('homeController',['$scope','$state',function($scope,$state){
		$scope.goregister=function(StateName){
			$state.go('register');
		}

		$scope.goinformation=function(StateName){
			$state.go('information');
		}

		$scope.gonewproduce=function(StateName){
			$state.go('newproduce');
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

		$scope.produce = [
			{imgurl: './images/homeproduce02.png',title:'护腕', indule: '新品专区'},
			{imgurl: './images/homeproduce03.png',title:'护腕', indule: '医疗护具'},
			{imgurl: './images/homeproduce04.png',title:'护腕', indule: '吸塑产品'},
			{imgurl: './images/homeproduce05.png',title:'护腕', indule: '更多产品'}
		];


		$scope.produces = [
			{imgurl: './images/Home_modules01.png',etitle:'护腕'},
			{imgurl: './images/Home_modules02.png',etitle:'护腕'},
			{imgurl: './images/Home_modules03.png',etitle:'护腕'},
			{imgurl: './images/Home_modules04.png',etitle:'护腕'},
			{imgurl: './images/Home_modules05.png',etitle:'护腕'},
			{imgurl: './images/Home_modules06.png',etitle:'护腕'}
		];

		$scope.newproduce = [
			{imgurl: './images/Protective-clothing02.png',text:'FDYGFSAUG'},
			{imgurl: './images/Home_modules02.png',text:'FDYGFSAUG'},
			{imgurl: './images/Home_modules03.png',text:'FDYGFSAUG'},
			{imgurl: './images/Home_modules01.png',text:'FDYGFSAUG'},
			{imgurl: './images/Protective-clothing02.png',text:'FDYGFSAUG'},
			{imgurl: './images/Home_modules03.png',text:'FDYGFSAUG'},
			{imgurl: './images/Protective-clothing02.png',text:'FDYGFSAUG'},
			{imgurl: './images/Home_modules05.png',text:'FDYGFSAUG'},
			{imgurl: './images/Home_modules06.png',text:'FDYGFSAUG'}
		];

		
	}])