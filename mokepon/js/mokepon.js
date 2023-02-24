const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionMensajes = document.getElementById("resultado")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")


let ataqueEnemigo = []
// COMBATE
let resultadoCombate = "";
let vidasJugador = 3
let vidasEnemigo = 3
let mokepones = []
let opcionDeMokepones
//les quito document.getElementById porque ya no exiten el HTML
let inputHipodoge
let inputCapipepo
let inputRatigueya

let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo

let botonFuego
let botonAgua
let botonTierra

let botones = []

let ataqueJugador = [] //para hacerle push()

let indexAtaqueJugador
let indexAtaqueEnemigo

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
    }
}


let hipodoge = new Mokepon("Hipodoge", "./img/hipodoge.png", 5)
let capipepo = new Mokepon("Capipepo", "./img/capipepo.png", 5)
let ratigueya = new Mokepon("Ratigueya", "./img/ratigueya.png", 5)



hipodoge.ataques.push (
    { nombre: '♒', id:"boton-agua" },
    { nombre: '♒', id:"boton-agua" },
    { nombre: '♒', id:"boton-agua" },
    { nombre: '🌱', id:"boton-tierra" },
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

mokepones.push(hipodoge,capipepo,ratigueya)


function iniciarJuego() {
    // document.getElementById("seleccionar-ataque").style.display = "none" // Ocultar section
    sectionSeleccionarAtaque.style.display = "none"

    // por cada uno; en lugar de mokepon pudo haber sido otra nombre.
    mokepones.forEach((mokepon)=>{
        // opcionDeMokepones = `
        // <input type="radio" name="mascota" id=${mokepon.nombre} class="selector-radio">
        // <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
        //     <p><img src=${mokepon.foto} alt=${mokepon.nombre}>${mokepon.nombre}</p>
        // </label>
        // `

        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} class="selector-radio" value="${mokepon.nombre}">
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p><img src=${mokepon.foto} alt=${mokepon.nombre}>${mokepon.nombre}</p>
        </label>
        `






    contenedorTarjetas.innerHTML += opcionDeMokepones
    
    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");

    });

    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    
    
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



//CREAR MENSAJE
function crearMensaje() {
    
    
    
    // let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    
    sectionMensajes.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    
    // sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    
    // let parrafo = document.createElement("p");
    // parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + "y la mascota enemiga atacó con " + ataqueEnemigo + " ===> " + resultadoCombate;

    
}

function secuenciaAtaque() {
    //hacer una iteración:
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            //console.log(e)
            //aparecerá un PointerEvent
            // buscar target: textContent
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                boton.style.background = "rgba(255, 255, 255, 0.1)";
            } else if (e.target.textContent === "♒") {
                ataqueJugador.push("AGUA")
                boton.style.background = "rgba(255, 255, 255, 0.1)";
            } else {
                ataqueJugador.push("TIERRA")
                boton.style.background = "rgba(255, 255, 255, 0.1)";
            }
            seleccionAtaqueEnemigo()
        })
    })
    
}

function seleccionAtaqueEnemigo () {
    
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("FUEGO")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("AGUA")
    } else {
        ataqueEnemigo.push("TIERRA")
    }
    
    // combate()
    // ataqueEnemigo.shift();
    // ataqueJugador.shift();
    iniciarPelea()
}

function iniciarPelea () {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    console.log(ataqueJugador);
    console.log(ataqueEnemigo)

    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i, i)
            resultadoCombate = "EMPATE 😐"
            console.log(resultadoCombate)
        } else if (
            (ataqueJugador[i] == "FUEGO" && ataqueEnemigo[i] == "TIERRA") || 
            (ataqueJugador[i] == "AGUA" && ataqueEnemigo[i] == "FUEGO") || 
            (ataqueJugador[i] == "TIERRA" && ataqueEnemigo[i] == "AGUA")
        ) {
            resultadoCombate = "GANASTE...!!! 😂😂😂"
            console.log(resultadoCombate)
        } else {
            resultadoCombate = "PERDISTE...😭😭😭"
            console.log(resultadoCombate)
        }
        
    }
    
    //porque no me funciona: ataqueJugador == ataqueEnemigo
    
    //OPCION 1: CONVERTIR A STRING:
    // let atJ = ataqueJugador.join()
    // let atE = ataqueEnemigo.join()

    // console.log(atJ);
    // console.log(atE)


    // if (atJ == atE) {
    //     resultadoCombate = "EMPATE 😐"
    //     vidasEnemigo--;
    //     spanVidasEnemigo.innerHTML = vidasEnemigo
    //     vidasJugador--;
    //     spanVidasJugador.innerHTML = vidasJugador

    //OPCION 2:
    // if (
    //     (ataqueJugador == "FUEGO" && ataqueEnemigo == "FUEGO") || 
    //     (ataqueJugador == "AGUA" && ataqueEnemigo == "AGUA") || 
    //     (ataqueJugador == "TIERRA" && ataqueEnemigo == "TIERRA")
    // ) {
    //     resultadoCombate = "EMPATE 😐"
    //     console.log(resultadoCombate)
    //     vidasEnemigo--;
    //     spanVidasEnemigo.innerHTML = vidasEnemigo
    //     vidasJugador--;
    //     spanVidasJugador.innerHTML = vidasJugador
                    
    // } else if (
    //     (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || 
    //     (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || 
    //     (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")) {
    //     resultadoCombate = "GANASTE...!!! 😂😂😂"
    //     console.log(resultadoCombate)
    //     vidasEnemigo-- ;
    //     spanVidasEnemigo.innerHTML = vidasEnemigo

    // } else {
    //     resultadoCombate = "PERDISTE...😭😭😭"
    //     console.log(resultadoCombate)
    //     vidasJugador-- ;
    //     spanVidasJugador.innerHTML = vidasJugador
    // }
   
    revisarVidas()
}





function seleccionarMascotaEnemigo() {
    
    let mascotaAleatoria = aleatorio (0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;
    secuenciaAtaque()
    
    //Siendo 3 mokepones: antes (1,3) ahora (0,2)
    
    // let ataqueAleatorio = aleatorio (1,3)
    // if (ataqueAleatorio == 1){
        //     spanMascotaEnemigo.innerHTML = "Hipodoge"
        // } else if (ataqueAleatorio == 2) {
            //     spanMascotaEnemigo.innerHTML = "Capipepo"
            // } else {
                //     spanMascotaEnemigo.innerHTML = "Ratigueya"
                // }
}

function seleccionarMascotaJugador() {
    //checked devuelve TRUE si boton radio es seleccionado
    if (inputHipodoge.checked) { 
        //una fuente de verdad: cambiar = "Hipodoge" por = inputHipodoge.id
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
        extraerAtaques(mascotaJugador);

        document.getElementById("boton-mascota").disabled = true 
        // Deshabilita el botón con el texto "Seleccionar"

        document.getElementById("seleccionar-ataque").style.display = "flex"
       
        document.getElementById("boton-fuego").disabled = false  
        // Habilita botón de fuego
        document.getElementById("boton-agua").disabled = false   
        // Habilita botón de agua
        document.getElementById("boton-tierra").disabled = false 
        // Habilita botón de tierra

        document.getElementById("seleccionar-mascota").style.display = "none"

        seleccionarMascotaEnemigo();

    } else if (inputCapipepo.checked) {
        
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        extraerAtaques(mascotaJugador);

        document.getElementById("boton-mascota").disabled = true
        document.getElementById("seleccionar-ataque").style.display = "flex"
        document.getElementById("boton-fuego").disabled = false
        document.getElementById("boton-agua").disabled = false
        document.getElementById("boton-tierra").disabled = false
        document.getElementById("seleccionar-mascota").style.display = "none"

        seleccionarMascotaEnemigo();

    } else if (inputRatigueya.checked) {
        
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        extraerAtaques(mascotaJugador)

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

function extraerAtaques(mascotaJugador){
    // document.getElementById("seleccionar-mascota").style.display = "none"
    
    let ataques
    // for (let i = 0; i < mokepones.length; i++) {
    //     if (mascotaJugador === mokepones[i].nombre) {
    //         ataques = mokepones[i].ataques
    //     }
        
    // }
    
    
    mokepones.forEach((mokepon) => {
        if (mascotaJugador === mokepon.nombre) {
            ataques = mokepon.ataques
        }
    })    
    
    
    mostrarAtaques(ataques);
    
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego");
    botonAgua = document.getElementById("boton-agua");
    botonTierra = document.getElementById("boton-tierra");
    
    //se con las class porque se pueden repetir. los id no se repiten.
    botones = document.querySelectorAll(".BAtaque")
    
    //PORQUE AHORA LAS TENEMOS EN function secuenciaAtaque
    // botonFuego.addEventListener("click", ataqueFuego);
    // botonAgua.addEventListener("click", ataqueAgua);
    // botonTierra.addEventListener("click", ataqueTierra);

}



function revisarVidas() {
    crearMensaje()
    // if (vidasJugador == 0) {
    //     crearMensajeFinal("Lo siento, perdiste...! 😭")
        
    //     const element = document.getElementById("mensajes");
    //     element.style.color = "red";
    //     element.style.textShadow = "2px 2px 5px #000";
        
    // } else if (vidasEnemigo ==0) {
    //     crearMensajeFinal("FELICITACIONES GANASTE 😂")
        
    //     const element = document.getElementById("mensajes");
    //     element.style.color = "green";
    //     element.style.textShadow = "2px 2px 5px #000";
    // } 
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