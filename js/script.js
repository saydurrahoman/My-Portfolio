// header scroll
let nav = document.querySelector(".header");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
// off navber start
let navBer = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBer.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
})
// text animated
var typed2 = new Typed('.type', {
    strings: ['Web developer', 'UI And UX Designer', 'Wordpress Developer'],
    typeSpeed: 150,
    backSpeed: 150,
    fadeOut: true,
    loop: true
  });
  // counter start
document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duration){
      let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if(current == end){
          clearInterval(timer);
        }
      } ,step);
    }
    counter("count1", 0, 20,6000);
    counter("count2", 100, 15000,1000);
    counter("count3", 0, 20,5000);
    counter("count4", 0, 160,6000);
  })
  // progress bar

  $(document).ready(function(){

    $('#html').barfiller({ barColor: '#52DD5F', duration: 3000 });
    $('#css').barfiller({ barColor: '#52DD5F', duration: 3000 });
    $('#bootstrap').barfiller({ barColor: '#52DD5F', duration: 3000 });
    $('#javascript').barfiller({ barColor: '#52DD5F', duration: 3000 });
    $('#jquery').barfiller({ barColor: '#52DD5F', duration: 3000 });
    $('#wordpress').barfiller({ barColor: '#52DD5F', duration: 3000 });
  });

  // scroll button
let toTop=document.querySelector(".totop");
window.addEventListener("scroll",function(){
    if(window.pageYOffset>100){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})