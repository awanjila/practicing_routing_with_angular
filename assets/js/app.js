var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
	//$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl:'home.html',
        //controller:'homecontroller'
	})
	.when('/home', {
		templateUrl:'home.html',
        //controller:'homecontroller'
	})
	.when('/best-prices-buy-phones-in-kenya',{
		templateUrl:'pages/buy-phones.html',
		//controller:'aboutcontroller'
	})
	.when('/best-prices-buy-phones-in-kenya2',{
		templateUrl:'pages/buy-phones-htc.html',
		//controller:'servicecontroller'
	})
	.when('/contact_us',{
		templateUrl:'contact-page.html',
		//controller:'contactcontroller'
	})

	.when('/best-prices-buy-phones-in-kenya3',{
		templateUrl:'pages/buy-phones-samsung.html',
		//controller:'contactcontroller'
	})

	.when('/best-prices-buy-phones-in-kenya1',{
		templateUrl:'pages/buy-phones-huawei.html',
		//controller:'contactcontroller'
	})
	.when('/best-prices-buy-phones-in-kenya4',{
		templateUrl:'pages/buy-phones-lenovo.html',
		//controller:'contactcontroller'
	})
	
	.when('iphone-5-screen-repair-in-kenya',{
		templateUrl:'repair-categories/apple/iphone-5.html',
	
	})

	.when('/apple-iphone-5s-repair-in-kenya',{
		templateUrl:'repair-categories/apple/iphone-5s.html',
		
	})
	.when('/iphone-6s-repair-in-kenya',{
		templateUrl:'repair-categories/apple/iphone-6s.html',
		
	})
	.when('/iphone-6s-plus-repair-in-kenya',{
		templateUrl:'repair-categories/apple/iphone-6-plus.html',
		
	})
	.when('/ipad-pro-repair-in-kenya',{
		templateUrl:'repair-categories/apple/ipad-pro.html',
		
	})
	.when('/9.7-inch-ipad-pro-repair-in-kenya',{
		templateUrl:'repair-categories/apple/ipad-pro.html',
		
	})
	.when('/ipad-Air2-repair-in-kenya',{
		templateUrl:'repair-categories/apple/ipad-air2.html',
		
	})
	.when('/ipad-mini4-repair-in-kenya',{
		templateUrl:'repair-categories/apple/ipad-mini-4.html',
		
	})
	.when('/ipad-mini2-repair-in-kenya',{
		templateUrl:'repair-categories/apple/ipad-mini-2.html',
		
	})
	.when('/iphone-6s-plus-repair-in-kenya',{
		templateUrl:'repair-categories/apple/iphone-6-plus.html',
		
	})
	.when('/iphone-6-repair-in-kenya',{
		templateUrl:'repair-categories/apple/iphone-6.html',
		
	})
	.when('/iphone-5se',{
		templateUrl:'repair-categories/apple/iphone-5e.html',
		
	})
	
	.when('/samsung-galaxy-s7-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/s7.html.html',
		
	})
	.when('/samsung-galaxy-s6-edge-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/s6-edge.html',
		
	})
	.when('/samsung-galaxy-s6-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/s6.html',
		
	})
	.when('/samsung-galaxy-s5-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/s5.html',
		
	})
	.when('/iphone-5se',{
		templateUrl:'repair-categories/samsung/other-samsung.html',
		
	})
	.when('/galaxy-s7-edge-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-s7-edge.html',
		
	})
	.when('/samsung-galaxy-note-edge-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-note-edge.html',
		
	})
	.when('/samsung-galaxy-note-5-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-note-5.html',
		
	})
	.when('/samsung-galaxy-note-3-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-note-3.html',
		
	})
	.when('/samsung-galaxy-J7-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-J7.html',
		
	})
	.when('/samsung-galaxy-J2-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-J2.html',
		
	})
	.when('/samsung-galaxy-J1-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-J1.html',
		
	})
	.when('/samsung-galaxy-A7-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-A7.html',
		
	})
	.when('/samsung-galaxy-A3-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-A3.html',
		
	})
	.when('/samsung-galaxy-4-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy-4.html',
		
	})
	.when('/samsung-galaxy-repair-in-kenya',{
		templateUrl:'repair-categories/samsung/galaxy.html',
		
	})
	.when('/lackberry-bold-repair-kenya',{
		templateUrl:'repair-categories/blackberry/9900.html',
		
	})
	.when('/blackberry-classic-repair-kenya',{
		templateUrl:'repair-categories/blackberry/classic.html',
		
	})
	.when('/blackberry-passport-repair-kenya',{
		templateUrl:'repair-categories/blackberry/passport.html',
		
	})
	.when('/blackberry-Q5-repair-kenya',{
		templateUrl:'repair-categories/blackberry/q5.html',
		
	})
	.when('/blackberry-Q10-repair-kenya',{
		templateUrl:'repair-categories/blackberry/q10.html',
		
	})
	.when('/blackberry-z3-repair-kenya',{
		templateUrl:'repair-categories/blackberry/z3.html',
		
	})
	.when('/blackberry-Z30-repair-kenya',{
		templateUrl:'repair-categories/blackberry/z30.html',
		
	})
	
	.when('/htc-phones-repair-kenya',{
		templateUrl:'repair-categories/htc/other-HTC.html',
		
	})
	.when('/htc-oneME-repair-kenya"',{
		templateUrl:'repair-categories/htc/one-ME.html',
		
	})
	.when('/htc-one-M9s-repair-kenya',{
		templateUrl:'repair-categories/htc/one-M9s.html',
		
	})
	//.when('/htc-one-M9+-repair-kenya',{
	//	templateUrl:'repair-categories/htc/one-M9+.html',
		
	//})
	.when('/htc-one-M9-repair-kenya',{
		templateUrl:'repair-categories/htc/one-M9.html',
		
	})
	.when('/htc-oneM8-repair-kenya',{
		templateUrl:'repair-categories/htc/one-M8.html',
		
	})
	.when('/htc-oneM8-eye-repair-kenya',{
		templateUrl:'repair-categories/htc/one-M8-eye.htmll',
		
	})
	.when('/htc-one-E9s-repair-kenya',{
		templateUrl:'repair-categories/htc/one-E9s.html',
		
	})
	.when('/htc-oneE9+-repair-kenya',{
		templateUrl:'repair-categories/htc/one-E9+.html',
		
	})
	.when('/htc-one-A9-repair-kenya',{
		templateUrl:'repair-categories/htc/one-A9.html',
		
	})
	.when('/htc-desire-826-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-826.html',
		
	})
	.when('/htc-desire-820s-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-820s.html',
		
	})
	.when('/htc-820G+-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-820G+.html',
		
	})
	.when('/htc-desire-728-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-728.html',
		
	})
	.when('/htc-desire-626G-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-626G-plus.html',
		
	})
	.when('/htc-desire-626G-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-626G.html',
		
	})
	.when('/htc-desire-620-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-620.html',
		
	})
	.when('/htc-desire-526-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-526.html',
		
	})
	.when('/htc-desire-320-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-320.html',
		
	})
	

	.when('/htc-desire-310-repair-kenya',{
		templateUrl:'repair-categories/htc/desire-310.html',


		
	})
	
	.when('/lenovo-A-2010-repair-kenya',{
		templateUrl:'repair-categories/lenovo/A-2010.html',


		
	})
	.when('/lenovo-s-90-repair-kenya',{
		templateUrl:'repair-categories/lenovo/s-90.html.html',


		
	})
	.when('/lenovo-P-70-repair-kenya',{
		templateUrl:'repair-categories/lenovo/P-70.html',


		
	})
	.when('/lenovo-P-1-repair-kenya',{
		templateUrl:'repair-categories/lenovo/p-1.html',


		
	})
	.when('/lenovo-A-7000-repair-kenya',{
		templateUrl:'repair-categories/lenovo/A-7000.html',


		
	})
	.when('/lenovo-A-6000-repair-kenya',{
		templateUrl:'repair-categories/lenovo/A-6000.html',


		
	})
	.when('/lenovo-A-1000-repair-kenya',{
		templateUrl:'repair-categories/lenovo/A-1000.html',


		
	})
	.when('/lenovo-A-5000-repair-kenya',{
		templateUrl:'repair-categories/lenovo/A-5000.html',


		
	})
	.when('/huawei-ascend-g7-repair-kenya',{
		templateUrl:'repair-categories/huawei/g7.html',


		
	})
	.when('/huawei-ascend-ascend-mate-repair-kenya',{
		templateUrl:'repair-categories/huawei/mate7.html',


		
	})
	.when('/huawei-ascend-g630-repair-kenya',{
		templateUrl:'repair-categories/huawei/g630.html',


		
	})
	.when('/huawei-ascend-p7-repair-kenya',{
		templateUrl:'repair-categories/huawei/p7.html',


		
	})
	.when('/huawei-P8-max-repair-kenyaa',{
		templateUrl:'repair-categories/huawei/p8-max.html',


		
	})
	.when('/huawei-Y-625-repair-kenya',{
		templateUrl:'repair-categories/huawei/y625.html',


		
	})
	.when('/huawei-Y-360-repair-kenya',{
		templateUrl:'repair-categories/huawei/y360.html',


		
	})
	.when('/huawei-p8-lite-repair-kenya',{
		templateUrl:'repair-categories/huawei/p8-lite.html',


		
	})
	.when('/huawei-p8-repair-kenya',{
		templateUrl:'repair-categories/huawei/p8.html',


		
	})
	.when('/huawei-mediapad-repair-kenya"',{
		templateUrl:'repair-categories/huawei/mediapad.html',


		
	})
	.when('/hhuawei-mate-8-repair-kenya',{
		templateUrl:'repair-categories/huawei/mate8.html',


		
	})
	.when('/huawei-honor-8-repair-kenya',{
		templateUrl:'repair-categories/huawei/g360.html',


		
	})
	.when('/huawei-honor-3-repair-kenya',{
		templateUrl:'repair-categories/huawei/honour-3c.html',


		
	})
	.when('/huawei-honor-4-repair-kenya',{
		templateUrl:'repair-categories/huawei/honor7.html',		
	})

	.when('/phone_accesories_in_kenya',{
		templateUrl:'pages/accessories.html',		
	})
	.when('/huawei-g8-repair-kenya',{
		templateUrl:'repair-categories/huawei/g8.html',
		
	});
	
	
   /* .otherwise({
	templateUrl:'pages/partial.404.html'
   });*/

            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

         // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

         // if you don't wish to set base URL then use this
         
        

}]);
