const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar")
const inputHipodoge = document.getElementById("hipodoge");
const inputCapipepo = document.getElementById("capipepo");
const inputRatigueya = document.getElementById("ratigueya");
const sectionMensajes = document.getElementById("resultado")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

let ataqueJugador
let ataqueEnemigo 
// COMBATE
let resultadoCombate = "";
let vidasJugador = 3
let vidasEnemigo = 3
let mokepones = []

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
    }
}


let hipodoge = new Mokepon("Hipodogue", "./img/hipodoge.png", 5)
let capipepo = new Mokepon("Capipepo", "./img/capipepo.png", 5)
let ratigueya = new Mokepon("Ratigueya", "./img/ratigueya.png", 5)

mokepones.push(hipodoge,capipepo,ratigueya)

hipodoge.ataques.push (
    { nombre: '♒', id:"boton-agua" },
    { nombre: '♒', id:"boton-agua" },
    { nombre: '♒', id:"boton-agua" },
    { nombre: '🔥', id:"boton-fuego" },
    { nombre: '🔥', id:"boton-fuego" }
) 

capipepo.ataques.push (
    { nombre: '🌱', id:"boton-tierra" },
    { nombre: '🌱', id:"boton-tierra" },
    { nombre: '🌱', id:"boton-tierra" },
    { nombre: '♒', id:"boton-agua" },
    { nombre: '🔥', id:"boton-fuego" }
) 

ratigueya.ataques.push (
    { nombre: '🔥', id:"boton-fuego" },
    { nombre: '🔥', id:"boton-fuego" },
    { nombre: '🔥', id:"boton-fuego" },
    { nombre: '♒', id:"boton-agua" },
    { nombre: '🌱', id:"boton-tierra" }
) 




function iniciarJuego() {
    // document.getElementById("seleccionar-ataque").style.display = "none" // Ocultar section
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonFuego.addEventListener("click", ataqueFuego);
    botonAgua.addEventListener("click", ataqueAgua);
    botonTierra.addEventListener("click", ataqueTierra);
    
    //CREAR su escuchador de eventos, escucha los "click", cuando lo escucha ejecuta la función reiniciarJuego
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function reiniciarJuego() {
    location.reload()
}

//ATAQUE ENEMIGO
   

function aleatorio(min, max) { 
    return Math.floor(Math.random()*(max-min+1)+min);
}

function seleccionAtaqueEnemigo () {
    
    ataqueEnemigo = aleatorio(1, 3)
    if (ataqueEnemigo == 1) {
        ataqueEnemigo = "FUEGO🔥"
    } else if (ataqueEnemigo == 2) {
        ataqueEnemigo = "AGUA♒"
    } else {
        ataqueEnemigo = "TIERRA🌱"
    }
    combate()
}

//CREAR MENSAJE
function crearMensaje() {
    
    
    
    // let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    
    sectionMensajes.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    // sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    
    // let parrafo = document.createElement("p");
    // parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + "y la mascota enemiga atacó con " + ataqueEnemigo + " ===> " + resultadoCombate;

    
}


function ataqueFuego() {
    ataqueJugador = "FUEGO🔥"
    seleccionAtaqueEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "AGUA♒"
    seleccionAtaqueEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "TIERRA🌱"
    seleccionAtaqueEnemigo();
}



function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio (1,3)
    
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}


function seleccionarMascotaJugador() {
    
    
    if (inputHipodoge.checked) { //checked devuelve TRUE si boton radio es seleccionado
        
        spanMascotaJugador.innerHTML = "Hipodoge"
        
        document.getElementById("boton-mascota").disabled = true // Deshabilita el botón con el texto "Seleccionar"

        document.getElementById("seleccionar-ataque").style.display = "flex"
       
        document.getElementById("boton-fuego").disabled = false  // Habilita botón de fuego
        document.getElementById("boton-agua").disabled = false   // Habilita botón de agua
        document.getElementById("boton-tierra").disabled = false // Habilita botón de tierra

        document.getElementById("seleccionar-mascota").style.display = "none"

        seleccionarMascotaEnemigo();

    } else if (inputCapipepo.checked) {
        
        spanMascotaJugador.innerHTML = "Capipepo"
       
        document.getElementById("boton-mascota").disabled = true

        document.getElementById("seleccionar-ataque").style.display = "flex"

        document.getElementById("boton-fuego").disabled = false
        document.getElementById("boton-agua").disabled = false
        document.getElementById("boton-tierra").disabled = false

        document.getElementById("seleccionar-mascota").style.display = "none"

        seleccionarMascotaEnemigo();

    } else if (inputRatigueya.checked) {
        
        spanMascotaJugador.innerHTML = "Ratigueya"
        
        document.getElementById("boton-mascota").disabled = true

        document.getElementById("seleccionar-ataque").style.display = "flex"

        document.getElementById("boton-fuego").disabled = false
        document.getElementById("boton-agua").disabled = false
        document.getElementById("boton-tierra").disabled = false

        document.getElementById("seleccionar-mascota").style.display = "none"

        seleccionarMascotaEnemigo();

    } else {
        alert("Debes seleccionar a tu mascota\n  - Hipodoge\n  - Capipepo\n  - Ratigueya");
    }
 }




function combate() {
    
    
   if (ataqueJugador == ataqueEnemigo) {
        resultadoCombate = "EMPATE 😐"
        vidasEnemigo = vidasEnemigo - 0 ;
        spanVidasEnemigo.innerHTML = vidasEnemigo
        vidasJugador = vidasJugador - 0  ;
        spanVidasJugador.innerHTML = vidasJugador
                
    } else if (
        (ataqueJugador == "FUEGO🔥" && ataqueEnemigo == "TIERRA🌱") || 
        (ataqueJugador == "AGUA_♒" && ataqueEnemigo == "FUEGO🔥") || 
        (ataqueJugador == "TIERRA🌱" && ataqueEnemigo == "AGUA♒")) {
        resultadoCombate = "GANASTE...!!! 😂😂😂"
        vidasEnemigo-- ;
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else {
        resultadoCombate = "PERDISTE...😭😭😭"
        vidasJugador-- ;
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    crearMensaje()
    if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, perdiste...! 😭")
        
        const element = document.getElementById("mensajes");
        element.style.color = "red";
        element.style.textShadow = "2px 2px 5px #000";
        
    } else if (vidasEnemigo ==0) {
        crearMensajeFinal("FELICITACIONES GANASTE 😂")
        
        const element = document.getElementById("mensajes");
        element.style.color = "green";
        element.style.textShadow = "2px 2px 5px #000";
    } 
}

//CREAR MENSAJE FINAL
function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    document.getElementById("boton-fuego").disabled = true
    document.getElementById("boton-agua").disabled = true
    document.getElementById("boton-tierra").disabled = true

    document.getElementById("reiniciar").style.display = "flex"
}

window.addEventListener("load", iniciarJuego)