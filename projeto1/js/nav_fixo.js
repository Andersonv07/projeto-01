window.onscroll = function() {myFunction()};

var navv2 = document.querySelector(".navv2");
var sticky = navv2.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navv2.classList.add("nav_f");
  } else {
    navv2.classList.remove("nav_f");
  }
}

//pageYOffset=> e o valor todal do scroll horizontal