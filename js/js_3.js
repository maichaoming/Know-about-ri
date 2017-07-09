var danchu = document.getElementById("danchu");
var timu = document.getElementById("timu");
var NO2 = document.getElementsByClassName("NO2");
var danchuImg = document.getElementById("danchuImg");
var ye = document.getElementById("ye");
var ribao = document.getElementsByClassName("ribao");

yetwo.onclick = function(){
	Left.style.left = 0+"%";
	danchu.style.left= "100%";
}
ribao[0].onclick = function(){
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}


function ajax(){
	
}

function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_1+">";
	timu.innerHTML = obj0.result[0].timu.dianying;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}


/*日常心理学*/
ribao[1].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_2+">";
	timu.innerHTML = obj0.result[0].timu.xinli;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}

/*用户推荐日报*/
ribao[2].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	first.style.overflow = "scroll";
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_3+">";
	timu.innerHTML = obj0.result[0].timu.tuijian;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}







/*不许无聊*/

ribao[3].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_4+">";
	timu.innerHTML = obj0.result[0].timu.wuliao;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}




/*设计日报*/
ribao[4].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_5+">";
	timu.innerHTML = obj0.result[0].timu.sheji;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}

/*大公司日报*/

ribao[5].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_6+">";
	timu.innerHTML = obj0.result[0].timu.gongsi;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}

/*财经日报*/
ribao[6].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_7+">";
	timu.innerHTML = obj0.result[0].timu.caijing;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}

/*互联网安全*/
ribao[7].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_8+">";
	timu.innerHTML = obj0.result[0].timu.anquan;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}
/*开始游戏*/
ribao[8].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_9+">";
	timu.innerHTML = obj0.result[0].timu.youxi;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}



/*音乐日报*/
ribao[9].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_10+">";
	timu.innerHTML = obj0.result[0].timu.yinye;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}



/*动漫日报*/

ribao[10].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_11+">";
	timu.innerHTML = obj0.result[0].timu.dongmao;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}


/*体育日报*/
ribao[11].onclick = function(){
	first.style.overflow = "scroll";
	danchu.style.left= "0%";
	Left.style.left = -100+"%";
	var xhr0 = new XMLHttpRequest();

xhr0.open("GET","./json/three.json",true);
xhr0.send();
xhr0.onreadystatechange = function(e){
if (xhr0.readyState==4&&xhr0.status==200) {
	var obj0 = JSON.parse(xhr0.responseText);
	createPage(obj0);
 }
}
function createPage(obj0){
	danchuImg.innerHTML = "<img src="+obj0.result[0].Img.img_12+">";
	timu.innerHTML = obj0.result[0].timu.ty;
	NO2[0].innerHTML = "<p>"+obj0.result[0].biaoti.wukong+"</p>"+"<div><img src="+obj0.result[0].IMG.img1+"></div>";
	NO2[1].innerHTML = "<p>"+obj0.result[0].biaoti.kenan+"</p>"+"<div><img src="+obj0.result[0].IMG.img2+"></div>";
	NO2[2].innerHTML = "<p>"+obj0.result[0].biaoti.fangao+"</p>"+"<div><img src="+obj0.result[0].IMG.img3+"></div>";
	NO2[3].innerHTML = "<p>"+obj0.result[0].biaoti.ke+"</p>"+"<div><img src="+obj0.result[0].IMG.img4+"></div>";
	NO2[4].innerHTML = "<p>"+obj0.result[0].biaoti.kafei+"</p>"+"<div><img src="+obj0.result[0].IMG.img5+"></div>";
	NO2[5].innerHTML = "<p>"+obj0.result[0].biaoti.yigui+"</p>"+"<div><img src="+obj0.result[0].IMG.img6+"></div>";
	NO2[6].innerHTML = "<p>"+obj0.result[0].biaoti.lu+"</p>"+"<div><img src="+obj0.result[0].IMG.img7+"></div>";
	NO2[7].innerHTML = "<p>"+obj0.result[0].biaoti.yan+"</p>"+"<div><img src="+obj0.result[0].IMG.img8+"></div>";
	NO2[8].innerHTML = "<p>"+obj0.result[0].biaoti.hei+"</p>"+"<div><img src="+obj0.result[0].IMG.img9+"></div>";
	NO2[9].innerHTML = "<p>"+obj0.result[0].biaoti.zhubo+"</p>"+"<div><img src="+obj0.result[0].IMG.img10+"></div>";
	NO2[10].innerHTML = "<p>"+obj0.result[0].biaoti.niao+"</p>"+"<div><img src="+obj0.result[0].IMG.img11+"></div>";
}
}
