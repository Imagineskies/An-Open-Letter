'use strict';
/*____________________________________________________________________________________*/
// Varibles
var deviceHeight = window.screen.height;
var navHeight = document.getElementById('mainNav').offsetHeight;
var scrollAmount = deviceHeight - navHeight;
var mainNavPos = document.getElementById('mainNav').offsetTop;
var temp = '0';
var farm = 0;
var screenHeight = $(window).width();
console.log(temp)

/*____________________________________________________________________________________*/
// Constants
const body = document.getElementById('body');
const mainNav = document.getElementById('mainNav');
const navbarWrapper = document.getElementById('navbarWrapper');
const updateMenu = document.getElementById('updateMenu');

/*____________________________________________________________________________________*/
// Functions

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    console.log(aid)
    $('html,body').animate({scrollTop: $(aid).offset().top},1500);
});





/*____________________________________________________________________________________*/
// Event Listeners

window.onscroll = function(){
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  console.log(mainNavPos, scrollPos);
  if (scrollPos >= 79 && screenHeight >= 1188){
    navbarWrapper.classList.add('centerSlide');
    navbarWrapper.classList.remove('leftSlide');
    window.farm = '1';
    console.log(farm)
  }  else if (farm=='1' && scrollPos<=79 && screenHeight >= 1188) {
    console.log('ran')
    navbarWrapper.classList.remove('centerSlide');
    navbarWrapper.classList.add('leftSlide');
  }
   if (scrollPos >= mainNavPos && screenHeight >= 1188){
    mainNav.classList.add('sticky');
    window.farm = '1';
    console.log(farm)
  } else if (farm=='1' && scrollPos<=mainNavPos && screenHeight >= 1188) {
    console.log('ran')
    mainNav.classList.remove('sticky');
  }
  if (scrollPos >= 579 && screenHeight >= 1188) {
    updateMenu.classList.add('sticky');
  } else {
    updateMenu.classList.remove('sticky');
  }
}
