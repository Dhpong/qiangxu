(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [

 				//售后服务
	 			{ 
			 		name: 'customerservice',
			 		files: [
			 			'./views/customerservice/customerserviceController.js',
			 			'./views/customerservice/customerservice.css'
			 		]
			 	},

			 	//确认订单
	 			{ 
			 		name: 'firmorder',
			 		files: [
			 			'./views/firmorder/firmorderController.js',
			 			'./views/firmorder/firmorder.css'
			 		]
			 	},

			 	//加入购物车
	 			{ 
			 		name: 'addcart',
			 		files: [
			 			'./views/addcart/addcartController.js',
			 			'./views/addcart/addcart.css'
			 		]
			 	},

			 	//我的收藏
	 			{ 
			 		name: 'collect',
			 		files: [
			 			'./views/collect/collectController.js',
			 			'./views/collect/collect.css'
			 		]
			 	},

			 	//发布评价
	 			{ 
			 		name: 'assess',
			 		files: [
			 			'./views/assess/assessController.js',
			 			'./views/assess/assess.css'
			 		]
			 	},
	 		
	 			//购物车
	 			{ 
			 		name: 'shoppingcar',
			 		files: [
			 			'./views/shoppingcar/shoppingcarController.js',
			 			'./views/shoppingcar/shoppingcar.css'
			 		]
			 	},

			 	//引导页
	 			{ 
			 		name: 'guide',
			 		files: [
			 			'./views/guide/guideController.js',
			 			'./views/guide/guide.css'
			 		]
			 	},

			 	//登录页
	 			{ 
			 		name: 'login',
			 		files: [
			 			'./views/login/loginController.js',
			 			'./views/login/login.css'
			 		]
			 	},

			 		//注册
	 			{ 
			 		name: 'register',
			 		files: [
			 			'./views/register/registerController.js',
			 			'./views/register/register.css'
			 		]
			 	},

			 		//找回密码
	 			{ 
			 		name: 'searchpassword',
			 		files: [
			 			'./views/searchpassword/searchpasswordController.js',
			 			'./views/searchpassword/searchpassword.css'
			 		]
			 	},

			 		//主页
	 			{ 
			 		name: 'home',
			 		files: [
			 			'./views/home/homeController.js',
			 			'./views/home/home.css'
			 		]
			 	},

			 		//消息
	 			{ 
			 		name: 'news',
			 		files: [
			 			'./views/news/newsController.js',
			 			'./views/news/news.css'
			 		]
			 	},

			 		//聊天
	 			{ 
			 		name: 'chat',
			 		files: [
			 			'./views/chat/chatController.js',
			 			'./views/chat/chat.css'
			 		]
			 	},

			 		//新品专区
	 			{ 
			 		name: 'newproduce',
			 		files: [
			 			'./views/newproduce/newproduceController.js',
			 			'./views/newproduce/newproduce.css'
			 		]
			 	},

			 		//商城
	 			{ 
			 		name: 'shopping',
			 		files: [
			 			'./views/shopping/shoppingController.js',
			 			'./views/shopping/shopping.css'
			 		]
			 	},

			 		//关于
	 			{ 
			 		name: 'about',
			 		files: [
			 			'./views/about/aboutController.js',
			 			'./views/about/about.css'
			 		]
			 	},


			 		//帮助与客服
	 			{ 
			 		name: 'help',
			 		files: [
			 			'./views/help/helpController.js',
			 			'./views/help/help.css'
			 		]
			 	},




			 		//我的积分
	 			{ 
			 		name: 'mypoints',
			 		files: [
			 			'./views/mypoints/mypointsController.js',
			 			'./views/mypoints/mypoints.css'
			 		]
			 	},

			 	//优惠券
	 			{ 
			 		name: 'overdueCoupon',
			 		files: [
			 			'./views/overdueCoupon/overdueCouponController.js',
			 			'./views/overdueCoupon/overdueCoupon.css'
			 		]
			 	},


			 	//个人中心
	 			{ 
			 		name: 'personalCenter',
			 		files: [
			 			'./views/personalCenter/personalCenterController.js',
			 			'./views/personalCenter/personalCenter.css'
			 		]
			 	},

			 	//重置支付密码
	 			{ 
			 		name: 'resetpaypassword',
			 		files: [
			 			'./views/resetpaypassword/resetpaypasswordController.js',
			 			'./views/resetpaypassword/resetpaypassword.css'
			 		]
			 	},


			 	//新增收货地址
	 			{ 
			 		name: 'newReceivingaddress',
			 		files: [
			 			'./views/newReceivingaddress/newReceivingaddressController.js',
			 			'./views/newReceivingaddress/newReceivingaddress.css'
			 		]
			 	},



			 	//修改密码
	 			{ 
			 		name: 'modifypassword',
			 		files: [
			 			'./views/modifypassword/modifypasswordController.js',
			 			'./views/modifypassword/modifypassword.css'
			 		]
			 	},

			 	//我的
	 			{ 
			 		name: 'my',
			 		files: [
			 			'./views/my/myController.js',
			 			'./views/my/my.css'
			 		]
			 	}




	 		]
 		});
	}]);
	
})();