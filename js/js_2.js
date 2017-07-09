var NO1 = document.getElementsByClassName("NO1");
var tanchuImg = document.getElementById("tanchuImg");
var ImgBottom = document.getElementById("ImgBottom");
var tanchu = document.getElementById("tanchu");
var back = document.getElementById("back");
var clientHeight = document.documentElement.clientHeight;
var timer = null;
var isTop = true
var tanchuTop = document.getElementById("tanchuTop");

NO1[0].onclick =function(){
	tanchu.style.left = "0%";
	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET","./json/two.json",true);
	xhr1.send();
	xhr1.onreadystatechange = function(b){
	if (xhr1.readyState==4&&xhr1.status==200) {
		var obj1 = JSON.parse(xhr1.responseText);
		createPage(obj1);
	}
}
	function createPage(obj1){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj1.result[0].IMG.img1+"')><span>"+obj1.result[0].nav.wukong2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj1.result[0].biaoti.wukong+"</h3>"+"<p>"+obj1.result[0].content.wukong1+"</p>";

}
	}

NO1[1].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img2+"')><span>"+obj2.result[0].nav.kenan2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	}
	//第三个
	NO1[2].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img3+"')><span>"+obj2.result[0].nav.fangao2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	}
  //第四个
  	NO1[3].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img4+"')><span>"+obj2.result[0].nav.beike2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	}
	//第五个
	NO1[4].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img5+"')><span>"+obj2.result[0].nav.kafei2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	}
	//第六个
	NO1[5].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img6+"')><span>"+obj2.result[0].nav.yigui2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	}
	//第7个
	NO1[6].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img7+"')><span>"+obj2.result[0].nav.lu2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	}
	//第8个
	NO1[7].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img8+"')><span>"+obj2.result[0].nav.yan2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	}
	//第9个
	NO1[8].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img9+"')><span>"+obj2.result[0].nav.hei2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	}
	//第十个
	NO1[9].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img10+"')><span>"+obj2.result[0].nav.zhubo2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	}
	NO1[10].onclick =function(){
	tanchu.style.left = "0%";
	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET","./json/two.json",true);
	xhr2.send();
	xhr2.onreadystatechange = function(e){
	if (xhr2.readyState==4&&xhr2.status==200) {
		var obj2 = JSON.parse(xhr2.responseText);
		createPage(obj2);
	}
}
	function createPage(obj2){
	tanchuImg.innerHTML = "<div style='background-image:url("+obj2.result[0].IMG.img11+"')><span>"+obj2.result[0].nav.niao2+"</span></div>";
	ImgBottom.innerHTML = "<h3>"+obj2.result[0].biaoti.kenan+"</h3>"+"<p>"+obj2.result[0].content.kenan1+"</p>";

}
	
}
back.onclick = function(){
	tanchu.style.left = "100%";
}
