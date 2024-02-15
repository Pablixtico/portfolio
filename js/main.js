


window.onscroll = function() {
    let navbar = document.getElementsByClassName("navegation-bar")
    var y = window.scrollY;
    y>5?navbar[0].classList.add("notop"):navbar[0].classList.remove("notop")
  };


  document.getElementsByClassName("floating-icon")[0].addEventListener("click", (e) => {
    document.getElementsByClassName("floating-icon")[0].classList.toggle("open");
    document.getElementsByClassName("floating-nav-bar")[0].classList.toggle("floating-active");
    setTimeout(() => {
    console.log("1 Segundo esperado")
    document.getElementsByClassName("floating-nav-bar")[0].classList.toggle("floating-active-transition");
  }, 1);
  })

  function resetactive(active){
    let doc = document.getElementsByClassName("active-item");
    doc[0].classList.remove("active-item");
    active.parentNode.classList.add("active-item")
    
  }

