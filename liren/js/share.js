//下拉菜单bug修复
var oList=document.getElementById("lists");
var oLi=oList.getElementsByTagName("li");
var oMsgs=document.getElementsByClassName("msgs")[0]
var oSearch=document.getElementsByClassName("search")[0]
oSearch.onmouseover=function(){
	oMsgs.style.height="0"+"px";
}
oLi[59].onmouseover=function(){
	oMsgs.style.height="0"+"px";
}
for(i=0;i<oLi.length-1;i++){
	oLi[i].index=i;
	oLi[i].onmouseover=function(){
			oMsgs.style.height="";
		
	}
}

//侧边栏
var oTop = document.getElementById("top");
window.onscroll = function() {
	var oT = document.documentElement.scrollTop || document.body.scrollTop;
	if(oT > 500) {
		oTop.style.display = "block"
	} else {
		oTop.style.display = "none"
	}
}

oTop.onclick = function() {
	var timer1 = setInterval(function() {
		var oT = document.documentElement.scrollTop || document.body.scrollTop;
		window.scrollBy(0, -100);
		if(oT <= 0) {
			clearInterval(timer1)
		}
	}, 50)
}
