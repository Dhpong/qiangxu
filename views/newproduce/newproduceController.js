angular.module('app')
	.controller('newproduceController',['$scope','$state',function($scope,$state){
		$scope.gohome=function(StateName){
			$state.go('home');
		};

		$scope.data = [
			{name:"护脚踝"},
			{name:"护 颈"},
			{name:"护手腕"},
			{name:"护腰带"},
			{name:"护   膝"},
			{name:"髌骨带"},
			{name:"护脚"},
			{name:"夹   板"},
			{name:"POH系列"},
			{name:"FOOD系列"},
			{name:"PEHIPE系列"},
			{name:"PPXS系列"},
			{name:"PETGAG系列"},
			{name:"PEHIPE系列"},
			{name:"HJHIPE系列"},
			{name:"PEHIPE系列"}
		];

		$scope.medical = [
			{imgurl: './images/Protective-clothing01 (1).png',text:'护腕'},
			{imgurl: './images/Protective-clothing01 (2).png',text:'护腕'},
			{imgurl: './images/Protective-clothing01 (3).png',text:'护腕'},
			{imgurl: './images/Protective-clothing01 (4).png',text:'护腕'},
			{imgurl: './images/Protective-clothing01 (5).png',text:'护腕'},
			{imgurl: './images/Protective-clothing01 (6).png',text:'护腕'}
		];

		$scope.blister = [
			{imgurl: './images/Protective-clothing01.png',text:'护腕'},
			{imgurl: './images/Protective-clothing02.png',text:'护腕'},
			{imgurl: './images/Protective-clothing03.png',text:'护腕'},
			{imgurl: './images/Protective-clothing04.png',text:'护腕'},
			{imgurl: './images/Protective-clothing05.png',text:'护腕'},
			{imgurl: './images/Protective-clothing06.png',text:'护腕'}
		];
		
	}])