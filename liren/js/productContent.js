var Dimg=document.getElementById("dimg")
var oLis=Dimg.getElementsByTagName("li")
var ximg=document.getElementById("ximg")
var oLiss=ximg.getElementsByTagName("li")
//点击变换
for(var i = 0; i < oLiss.length; i++) {
	oLiss[i].index = i;
	oLiss[i].onclick = function() {
		for(i = 0; i < oLiss.length; i++) {
			oLis[i].className = "";
			oLiss[i].className = ""
		}
		this.className = "sum";
		oLis[this.index].className = "sun";
	}
}