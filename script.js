//responsive menu bar
var t=document.getElementsByClassName("main-nav");
var e=document.getElementsByClassName("menu");
e[0].style.display="none";
if(screen.availWidth<=417){
 e[0].style.display="block";
t[0].classList.add("test");
t[0].classList.remove("main-nav");
e[0].children[1].style.display="none";
e[0].children[0].onclick=function(){
    var h=document.getElementsByClassName("test");
    h[0].children[0].style.display="block";
    e[0].children[0].style.display="none";
    e[0].children[1].style.display="block";
}
e[0].children[1].onclick=function(){
    var h=document.getElementsByClassName("test");
    h[0].children[0].style.display="none";
    e[0].children[0].style.display="block";
    e[0].children[1].style.display="none";
}  

}
else{
    t[0].classList.add("main-nav");
t[0].classList.remove("test");
}
