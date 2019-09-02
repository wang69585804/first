//左边特效
var Tabs=document.getElementById("tabs")
var oLi=Tabs.getElementsByTagName("li")
var oBody=document.getElementById("body")
var oList=oBody.getElementsByTagName("ul")
console.log(oLi)
for(i=0;i<oLi.length;i++){
	oLi[i].index=i;
	oLi[i].onclick=function(){
		for(i=0;i<oLi.length;i++){
			oLi[i].className="p";
			oList[i].className="";
		}
		this.className="p"+" "+"nowa";
		oList[this.index].className="now"
	}
}