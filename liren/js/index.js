window.onload=function(){
////轮播图
////获取banner图
//var oBanner = document.getElementById("banner")
//var bannerImg = document.getElementById("bannerimg");
//var oLiImg = bannerImg.getElementsByTagName("li");
////获取左右按钮
//var oLeft = document.getElementById("left");
//var oRight = document.getElementById("right");
////获取Dots按钮
//var oDots = document.getElementById("dots");
//var oLiDots = oDots.getElementsByTagName("li");
//var timer = null
//var num = 0;
//
//function fn() {
//	for(var i = 0; i < oLiImg.length; i++) {
//		oLiImg[i].className = "naw";
//		oLiDots[i].className = "";
//	}
//	oLiImg[num].className = "now"+" "+"naw";
//	oLiDots[num].className = "active";
//}
////点击右边按钮
//oRight.onclick = function() {
//	num++;
//	if(num > oLiImg.length - 1) {
//		num = 0;
//	}
//	fn()
//}
////点击左边按钮
//oLeft.onclick = function() {
//	num--;
//	if(num < 0) {
//		num = oLiImg.length - 1;
//	}
//	fn()
//}
//
////点击指示点
//for(var j = 0; j < oLiDots.length; j++) {
//	oLiDots[j].index = j; //自定义索引
//	oLiDots[j].onclick = function() {
//		for(var i = 0; i < oLiImg.length; i++) {
//			oLiImg[i].className = "naw";
//			oLiDots[i].className = "";
//		}
//		oLiImg[this.index].className = "now"+" "+"naw";
//		this.className = "active";
//		num = this.index;
//	}
//}
//
//timer = setInterval(function() {
//	oRight.onclick()
//}, 2000);
//
//oBanner.onmouseover = function() {
//	clearInterval(timer)
//	console.log(111)
//}
//oBanner.onmouseout = function() {
//	timer = setInterval(function() {
//		oRight.onclick()
//	}, 2000);
//}
//滚动新闻
var oNew = document.getElementById('new');
var times = null;
oNew.scrollTop = 0;
oNew.innerHTML += oNew.innerHTML;

function startScroll() {
	times = setInterval(scrollUp, 50);
	oNew.scrollTop++;
}

function scrollUp() {
	if(oNew.scrollTop % 20 == 0) {
		clearInterval(times);
		setTimeout(startScroll, 2000);
	} else {
		oNew.scrollTop++;
		if(oNew.scrollTop >= oNew.scrollHeight / 2) {
			oNew.scrollTop = 0;
		}
	}
}
setTimeout(startScroll, 2000);
//tab切换
var Tab = document.getElementById("tab");
var oDbd = document.getElementById("dbd");
var oUl = oDbd.getElementsByTagName("ul");
var oDhg = document.getElementById("dhg");
var oUl1 = oDhg.getElementsByTagName("ul");
var oDfb = document.getElementById("dfb");
var oUl2 = oDfb.getElementsByTagName("ul");
var oDkx = document.getElementById("dkx");
var oUl3 = oDkx.getElementsByTagName("ul");
var oDcg = document.getElementById("dcg");
var oUl4 = oDcg.getElementsByTagName("ul");
var nums = 0;
Tab.onclick = function() {
	nums++;
	for(var i = 0; i < oUl.length; i++) {
		oUl[i].className = "";
		oUl1[i].className = "";
		oUl2[i].className = "";
		oUl3[i].className = "";
		oUl4[i].className = "";
	}
	if(nums == 2) {
		nums = 0;
	}
	oUl[nums].className = "now";
	oUl1[nums].className = "now";
	oUl2[nums].className = "now";
	oUl3[nums].className = "now";
	oUl4[nums].className = "now";
}
//点击指示点
var oDats = document.getElementById("dats");
var oLiDats = oDats.getElementsByTagName("li");
var conTent = document.getElementById("content");
var oLunbo = conTent.getElementsByTagName("div");
var col = ["#fff"]
var arr = ["#45BEF5", "#3cce8a", "#ffca93", "#f88382", "#45BEF5"];
for(var i = 0; i < oLiDats.length; i++) {
	oLiDats[i].index = i;
	oLiDats[i].onclick = function() {
		for(var i = 0; i < oLiDats.length; i++) {
			oLunbo[i].className = "lunbo";
			oLiDats[i].style.background = "";
			oLiDats[i].style.color = "";
		}
		this.style.background = arr[this.index]
		this.style.color = col;
		oLunbo[this.index].className = "lunbo" + " " + "act";
	}
}
}