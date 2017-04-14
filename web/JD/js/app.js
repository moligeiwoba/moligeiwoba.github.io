$(function(){
	picchange();
	newschange();
})

function picchange(){
	//初始化
	var size =  $(".pic_banner_box li").length;
	var spanStr = "";

	//控制图片轮播
	var k =0;//图片默认从0开始
	var timer = setInterval(run,1500);//设置定时器
	var flag = true;//判断动画是否在播放


	for (var i = 0; i <size; i++) {
		spanStr +="<span class='pic_banner_span'>"+(i+1)+"</span>";
	}
	$(".pic_banner_sele").append(spanStr);
	$(".pic_banner_box li").css({"opacity":0});
	$(".pic_banner_box li").eq(0).css({"opacity":1});//显示第一张图片
	$(".pic_banner_sele span").eq(0).addClass("active");//第一张图片底部相对应的数字列表添加active类
	$(".pic_banner_sele span").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");//对应焦点添加active类 其他焦点移除
		var index = $(this).index();
		k = index;
		flag=false;
		$(".pic_banner_box li").eq(k).fadeTo(900,1).siblings().fadeTo(900,0,function(){flag=true});
	})
	$(".banner_pre").on("click",function(e){
		e.preventDefault();//
		if (flag) {
		move(k=k-1);
		}
	});
	$(".banner_next").on("click",function(e){
		e.preventDefault();//
		if (flag) {
			move(k=k+1);
		}
	});
	function run(){
		if (flag) {
			move(k=k+1);
		}
	}
	function move(val){
		if (val==size-1) {
			k=-1;
		}
		else if (val==-1) {
			k=size-1;
		}else{

		}
		flag=false;
		$(".pic_banner_box li").eq(val).fadeTo(900,1).siblings().fadeTo(900,0,function(){flag=true});
		$(".pic_banner_sele span").eq(val).addClass("active").siblings().removeClass("active");
	}
	//定时器开始与结束
	$(".banner_group").hover(function(){
		clearInterval(timer);	//鼠标放在轮播区域上时，清除定时器
	},function(){
		timer=setInterval(run,1500);  //鼠标移开时定时器继续
	})
}

function newschange(){
	$(".news_tab_buy").mouseover(function(){
		$(".news_info_item").eq(0).addClass("news_info_item_on").siblings().removeClass("news_info_item_on");
		$(".tab_line").css({"transform":"translateX(0)"});
	})
	$(".news_tab_public").mouseover(function(){
		$(".news_info_item").eq(1).addClass("news_info_item_on").siblings().removeClass("news_info_item_on");
		$(".tab_line").css({"transform":"translateX(55px)"});
	})
}