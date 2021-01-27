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

/*____________________________________________________________________________________*/
// Constants
const body = document.getElementById('body');
const mainNav = document.getElementById('mainNav');
const navbarWrapper = document.getElementById('navbarWrapper');
const updateMenu = document.getElementById('updateMenu');
const main = document.getElementById('main');

/*____________________________________________________________________________________*/
// Functions

$(".sliding-link").click(function(e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  console.log(aid)
  $('html,body').animate({
    scrollTop: $(aid).offset().top
  }, 1500);
});





/*____________________________________________________________________________________*/
// Event Listeners

window.onscroll = function() {
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  console.log(mainNavPos, scrollPos);
  if (scrollPos >= 79 && screenHeight >= 1188) {
    window.farm = '1';
  }
  if (scrollPos >= mainNavPos && screenHeight >= 1188) {
    mainNav.classList.add('sticky');
    main.setAttribute('style', 'padding-top: 50px;');
    window.farm = '1';
  } else if (farm == '1' && scrollPos <= mainNavPos && screenHeight >= 1188) {
    mainNav.classList.remove('sticky');
    main.removeAttribute('style', 'padding-top: 50px;');
  }
  if (scrollPos >= mainNavPos && screenHeight >= 1188) {
   updateMenu.classList.replace('non-sticky', 'sticky');

  } else {
   updateMenu.classList.replace('sticky', 'non-sticky');
  }
}
