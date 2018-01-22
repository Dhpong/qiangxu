angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider

			//引导页
			.state('guide', {
				url: '/guide',
				templateUrl: './views/guide/guide.html',
				controller:'guideController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('guide')
					}]
				}
			})

			//确认订单
			.state('firmorder', {
				url: '/firmorder',
				templateUrl: './views/firmorder/firmorder.html',
				controller:'firmorderController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('firmorder')
					}]
				}
			})

			//售后服务
			.state('customerservice', {
				url: '/customerservice',
				templateUrl: './views/customerservice/customerservice.html',
				controller:'customerserviceController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('customerservice')
					}]
				}
			})

			//我的收藏
			.state('collect', {
				url: '/collect',
				templateUrl: './views/collect/collect.html',
				controller:'collectController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('collect')
					}]
				}
			})


			//发布评价
			.state('assess', {
				url: '/assess',
				templateUrl: './views/assess/assess.html',
				controller:'assessController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('assess')
					}]
				}
			})

			//加入购物车
			.state('addcart', {
				url: '/addcart',
				templateUrl: './views/addcart/addcart.html',
				controller:'addcartController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('addcart')
					}]

				}
			})

			//登录页
			.state('login', {
				url: '/login',
				templateUrl: './views/login/login.html',
				controller:'loginController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('login')
					}]

				}
			})

			//注册页
			.state('register', {
				url: '/register',
				templateUrl: './views/register/register.html',
				controller:'registerController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('register')
					}]

				}
			})

			//找回密码
			.state('searchpassword', {
				url: '/searchpassword',
				templateUrl: './views/searchpassword/searchpassword.html',
				controller:'searchpasswordController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('searchpassword')
					}]

				}
			})

			//主页
			.state('home', {
				url: '/home',
				templateUrl: './views/home/home.html',
				controller:'homeController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('home')
					}]

				}
			})

			//消息
			.state('news', {
				url: '/news',
				templateUrl: './views/news/news.html',
				controller:'newsController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('news')
					}]

				}
			})

			//聊天
			.state('chat', {
				url: '/chat',
				templateUrl: './views/chat/chat.html',
				controller:'chatController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('chat')
					}]

				}
			})

			//新品专区
			.state('newproduce', {
				url: '/newproduce',
				templateUrl: './views/newproduce/newproduce.html',
				controller:'newproduceController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('newproduce')
					}]

				}
			})

			//商城
			.state('shopping', {
				url: '/shopping',
				templateUrl: './views/shopping/shopping.html',
				controller:'shoppingController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('shopping')
					}]

				}
			})

			//关于
			.state('about', {
				url: '/about',
				templateUrl: './views/about/about.html',
				controller:'aboutController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('about')
					}]

				}
			})

			//帮助与客服
			.state('help', {
				url: '/help',
				templateUrl: './views/help/help.html',
				controller:'helpController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('help')
					}]

				}
			})


			
			//我的积分
			.state('mypoints', {
				url: '/mypoints',
				templateUrl: './views/mypoints/mypoints.html',
				controller:'mypointsController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('mypoints')
					}]

				}
			})


			//优惠券
			.state('overdueCoupon', {
				url: '/overdueCoupon',
				templateUrl: './views/overdueCoupon/overdueCoupon.html',
				controller:'overdueCouponController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('overdueCoupon')
					}]

				}
			})

			//个人中心
			.state('personalCenter', {
				url: '/personalCenter',
				templateUrl: './views/personalCenter/personalCenter.html',
				controller:'personalCenterController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalCenter')
					}]

				}
			})


			//重置支付密码
			.state('resetpaypassword', {
				url: '/resetpaypassword',
				templateUrl: './views/resetpaypassword/resetpaypassword.html',
				controller:'resetpaypasswordController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('resetpaypassword')
					}]

				}
			})

			//新增收货地址
			.state('newReceivingaddress', {
				url: '/newReceivingaddress',
				templateUrl: './views/newReceivingaddress/newReceivingaddress.html',
				controller:'newReceivingaddressController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('newReceivingaddress')
					}]

				}
			})


			//修改密码
			.state('modifypassword', {
				url: '/modifypassword',
				templateUrl: './views/modifypassword/modifypassword.html',
				controller:'modifypasswordController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('modifypassword')
					}]

				}
			})

			//我的
			.state('my', {
				url: '/my',
				templateUrl: './views/my/my.html',
				controller:'myController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('my')
					}]

				}
			})

			//购物车
			.state('shoppingcar', {
				url: '/shoppingcar',
				templateUrl: './views/shoppingcar/shoppingcar.html',
				controller:'shoppingcarController',
				resolve:{
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('shoppingcar')
					}]

				}
			})








			

	}])