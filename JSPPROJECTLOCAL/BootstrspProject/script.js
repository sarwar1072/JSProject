
var obj=document.getElementById("navid");
window.onscroll=function(){
    var scroll_nav=window.scrollY;

    if(scroll_nav >= 100){
        obj.classList.add('after-scroll-navbar');
        console.log(scroll_nav);
    }
    else{
        obj.classList.remove('after-scroll-navbar');
    }
}
