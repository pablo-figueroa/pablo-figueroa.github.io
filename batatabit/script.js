const right_arrow = document.getElementById("right-arrow")
const left_arrow  = document.getElementById("left-arrow")

const coins     = document.getElementById("coins")
const comission = document.getElementById("comission")


right_arrow.onclick = function() {
   coins.style.display     = "none"
   comission.style.display = "block"
}

left_arrow.onclick = function() {
    coins.style.display     = "block"
    comission.style.display = "none"
}

// ********************************************************

document.addEventListener("DOMContentLoaded", function() {
  const escrol = document.getElementById("escrol");
  const escrol_izq = document.getElementById("escrol_izq");
const escrol_der = document.getElementById("escrol_der");

  function checkVisibility() {
    if (escrol.scrollWidth > escrol.clientWidth) {
      escrol_izq.style.visibility = "visible";
      escrol_der.style.visibility = "visible";
    } else {
      escrol_izq.style.visibility = "hidden";
      escrol_der.style.visibility = "hidden";
    }
  }

  checkVisibility();

  window.addEventListener("resize", checkVisibility);
 });
