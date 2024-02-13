

window.onscroll = function() {
    let navbar = document.getElementsByClassName("navegation-bar")
    var y = window.scrollY;
    y>5?navbar[0].classList.add("notop"):navbar[0].classList.remove("notop")
  };
