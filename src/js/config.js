require.config({
	// baseUrl:'js'
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'zoom':'../lib/jquery-gdsZoom/jquery.gdsZoom',
		'carousel':'../lib/jquery-yjCarousel/jquery.yjCarousel'
	},

	shim:{
		// 设置依赖
		'zoom':['jquery'],
		'carousel':['jquery']
		
	}
});
