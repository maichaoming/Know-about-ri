var lanmu = document.getElementById("lanmu");
var left = document.getElementById("left");
var main = document.getElementById("main");
var Left = document.getElementById("Left");
var right = document.getElementById("right");
var xinwen = document.getElementById("xinwen");
var NO1 = document.getElementsByClassName("NO1");
var tanchuTop = document.getElementById("tanchuTop");
var home = document.getElementById("home");
var nav_img = document.getElementsByClassName("nav_img")[0];
var navImg = document.getElementsByClassName("navImg");
var navimg = document.getElementById("navimg");
var body = document.getElementsByTagName("body")[0];
var first = document.getElementById("first");
var denglu1 = document.getElementById("denglu_1");
var denglu = document.getElementById("denglu");
var fanhui = document.getElementById("fanhui");
var sc = document.getElementById("sc");
var danchu = document.getElementById("danchu");
var yetwo = document.getElementById("yetwo");
sc.onclick = function(){
	denglu.style.left = 0+"%";
	denglu.style.position = "fixed";
}
denglu1.onclick = function(){
	denglu.style.left = 0+"%";
	denglu.style.position = "fixed";
	Left.style.left = -100+"%";
}
fanhui.onclick = function(){
	denglu.style.left = -100+"%";
}

home.onclick = function(){
	Left.style.left = -100+"%";
	danchu.style.left = "100%";
	tanchu.style.left = "100%";
	
	timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
}
lanmu.onclick = function(){
	
	Left.style.left = 0+"%";
	}
right.onclick = function(){
	Left.style.left = -100+"%";
}
window.onscroll = function(){
	var nav = document.getElementById("nav");
	var t = document.body.scrollTop;
	if (t>=242) {
		xinwen.innerHTML = "今日热闻";
	}else if(t<242 ){
		xinwen.innerHTML = "首页";
	}
}




var xhr = new XMLHttpRequest();

xhr.open("GET","./json/first.json",true);
xhr.send();
xhr.onreadystatechange = function(e){
if (xhr.readyState==4&&xhr.status==200) {
	var obj = JSON.parse(xhr.responseText);
	createPage(obj);
 }
}
function createPage(obj){
	NO1[0].innerHTML = "<p>"+obj.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj.result[0].IMG.img1+"></div>";
	NO1[1].innerHTML = "<p>"+obj.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj.result[0].IMG.img2+"></div>";
	NO1[2].innerHTML = "<p>"+obj.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj.result[0].IMG.img3+"></div>";
	NO1[3].innerHTML = "<p>"+obj.result[0].biaoti.ke+"</p>"+"<div><img src="+obj.result[0].IMG.img4+"></div>";
	NO1[4].innerHTML = "<p>"+obj.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj.result[0].IMG.img5+"></div>";
	NO1[5].innerHTML = "<p>"+obj.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj.result[0].IMG.img6+"></div>";
	NO1[6].innerHTML = "<p>"+obj.result[0].biaoti.lu+"</p>"+"<div><img src="+obj.result[0].IMG.img7+"></div>";
	NO1[7].innerHTML = "<p>"+obj.result[0].biaoti.yan+"</p>"+"<div><img src="+obj.result[0].IMG.img8+"></div>";
	NO1[8].innerHTML = "<p>"+obj.result[0].biaoti.hei+"</p>"+"<div><img src="+obj.result[0].IMG.img9+"></div>";
	NO1[9].innerHTML = "<p>"+obj.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj.result[0].IMG.img10+"></div>";
	NO1[10].innerHTML = "<p>"+obj.result[0].biaoti.niao+"</p>"+"<div><img src="+obj.result[0].IMG.img11+"></div>";
}
