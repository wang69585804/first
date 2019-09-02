//头部索引
var Title=document.getElementById("title");
var oLi=Title.getElementsByTagName("li");
var oContent=document.getElementById("content");
var oList=oContent.getElementsByTagName("ul");
for(i=0;i<oLi.length;i++){
	oLi[i].index=i;
	oLi[i].onclick=function(){
		for(i=0;i<oLi.length;i++){
			oLi[i].className="";
			oList[i].className="";
		}
		this.className="color";
		oList[this.index].className="now";
	}
}
var oBottom=document.getElementById("bottom")
var P=oBottom.getElementsByTagName("p");
P[0].onclick=function(){
	P[0].style.display="none"
	P[1].style.display="block"
}
//加载更多
var oBottom=document.getElementById("bottom")
var P=oBottom.getElementsByTagName("p");
P[0].onclick=function(){
	P[0].style.display="none"
	P[1].style.display="block"
}
