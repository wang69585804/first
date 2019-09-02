//加载更多
var oBottom=document.getElementById("bottom")
var P=oBottom.getElementsByTagName("p");
P[0].onclick=function(){
	P[0].style.display="none"
	P[1].style.display="block"
}