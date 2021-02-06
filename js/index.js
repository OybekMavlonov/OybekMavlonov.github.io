var myNav = document.getElementById("my-navbar");

window.onscroll = function () {
  "use strict";
  if ($(window).scrollTop() > 280) {
    myNav.classList.add("navbar_fixed");
  } else {
    myNav.classList.remove("navbar_fixed");
  }
};

function init() {
  setTimeout(() => {
    // $(".preloader-orbit-loading").fadeToggle();
    $("#loader").fadeToggle(1500);
    // $("#loader").fadeIn("slow");
    // $("#loader").fadeOut();
  }, 2000);
}

init();
