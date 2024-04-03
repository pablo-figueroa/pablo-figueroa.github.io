const right_arrow = document.getElementById("right-arrow")
const left_arrow  = document.getElementById("left-arrow")

const coins     = document.getElementById("coins")
const comission = document.getElementById("comission")


right_arrow.onclick = function() {
//    event.preventDefault();
   coins.style.display     = "none"
   comission.style.display = "block"
}

left_arrow.onclick = function() {
    // event.preventDefault();
    coins.style.display     = "block"
    comission.style.display = "none"
}
