var yejian = document.getElementById("yejian");
var jian = document.getElementById("jian");
var day = document.getElementById("day");
var section_1 = document.getElementById("section_1");
var content =document.getElementsByClassName("content")[0];
var themeState = 'ye';
var moshi = "ye";
day.onclick = function(){
if (moshi=="ye") {
	jian.style.display = "block";
	moshi = "ri";
}else if (moshi == "ri"){
	jian.style.display = "none";
	moshi = "ye";
}
	
}
yejian.onclick = function(){
	if(themeState=='ye'){
		jian.style.display = "none";
		yejian.innerHTML = "日间模式"
	    nav.style.backgroundColor = "#444444";
	    section_1.style.backgroundColor = "#2f2f2f";
	  	NO1[0].style.backgroundColor = "#2f2f2f";
	  	NO1[1].style.backgroundColor = "#2f2f2f";
	  	NO1[2].style.backgroundColor = "#2f2f2f";
	  	NO1[3].style.backgroundColor = "#2f2f2f";
	  	NO1[4].style.backgroundColor = "#2f2f2f";
	  	NO1[5].style.backgroundColor = "#2f2f2f";
	  	NO1[6].style.backgroundColor = "#2f2f2f";
	  	NO1[7].style.backgroundColor = "#2f2f2f";
	  	NO1[8].style.backgroundColor = "#2f2f2f";
	  	NO1[9].style.backgroundColor = "#2f2f2f";
	  	NO1[10].style.backgroundColor = "#2f2f2f";
	  	
	  	first.style.color = "#b5b5b5";
	    themeState = 'ri';

}else{
		jian.style.display = "none";
		nav.style.backgroundColor = "#00a2ed";
		section_1.style.backgroundColor = "white";
		NO1[0].style.backgroundColor = "white";
		NO1[1].style.backgroundColor = "white";
		NO1[2].style.backgroundColor = "white";
		NO1[3].style.backgroundColor = "white";
		NO1[4].style.backgroundColor = "white";
		NO1[5].style.backgroundColor = "white";
		NO1[6].style.backgroundColor = "white";
		NO1[7].style.backgroundColor = "white";
		NO1[8].style.backgroundColor = "white";
		NO1[9].style.backgroundColor = "white";
		NO1[10].style.backgroundColor = "white";
		first.style.color = "black";
		yejian.innerHTML = "夜间模式"
	    themeState = 'ye';
}
	
}
