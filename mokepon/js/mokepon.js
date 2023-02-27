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

// CANVAS
const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
let lienzo = mapa.getContext("2d")


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

let victoriasJugador = 0
let victoriasEnemigo = 0

let kanvas = document.getElementById("mapa")
let kanvasWidth = kanvas.width
// let kanvasHheight = kanvas.height 
//Calcular la anchura y altura relativa de la imagen.
let imgWidth = kanvasWidth * 0.33
let imgHeight = imgWidth * 1

let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./img/mokemap.webp"
let mascotaJugadorObjeto



class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, x = aleatorio(10, 700), y = aleatorio(10, 500)) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
        //canvas
        this.x = x
        this.y = y
        this.ancho = imgWidth
        this.alto = imgHeight
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa

        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho, 
            this.alto
        )
    }
}


let hipodoge = new Mokepon("Hipodoge", "./img/hipodoge.png", 5, "./img/hipodoge_mapa.png", 10, 10)
let capipepo = new Mokepon("Capipepo", "./img/capipepo.png", 5, "./img/capipepo_mapa.png", 10, 10)
let ratigueya = new Mokepon("Ratigueya", "./img/ratigueya.png", 5, "./img/ratigueya_mapa.png", 10, 10)

//Hipodoge ubicación aleatoria por defecto
let hipodogeEnemigo = new Mokepon("Hipodoge", "./img/hipodoge.png", 5, "./img/hipodogeEnemigo_mapa.png") 
let capipepoEnemigo = new Mokepon("Capipepo", "./img/capipepo.png", 5, "./img/capipepoEnemigo_mapa.png", 350, 95)
let ratigueyaEnemigo = new Mokepon("Ratigueya", "./img/ratigueya.png", 5, "./img/ratigueyaEnemigo_mapa.png", 600, 190)

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

sectionVerMapa.style.display = "none"
sectionSeleccionarAtaque.style.display = "none"
sectionReiniciar.style.display = "none"

function iniciarJuego() {
    // document.getElementById("seleccionar-ataque").style.display = "none" // Ocultar section
    
    // sectionSeleccionarAtaque.style.display = "none"
    // sectionVerMapa.style.display ="none"
    
    
    
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
                boton.disabled = true
                console.log(ataqueJugador)
            } else if (e.target.textContent === "♒") {
                ataqueJugador.push("AGUA")
                boton.style.background = "rgba(255, 255, 255, 0.1)";
                boton.disabled = true
                console.log(ataqueJugador)
            } else {
                ataqueJugador.push("TIERRA")
                boton.style.background = "rgba(255, 255, 255, 0.1)";
                boton.disabled = true
                console.log(ataqueJugador)
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
            
            crearMensaje()
            resultadoCombate = "EMPATE 😐"
            console.log(resultadoCombate)
        } else if (
            (ataqueJugador[i] == "FUEGO" && ataqueEnemigo[i] == "TIERRA") || 
            (ataqueJugador[i] == "AGUA" && ataqueEnemigo[i] == "FUEGO") || 
            (ataqueJugador[i] == "TIERRA" && ataqueEnemigo[i] == "AGUA")
        ) {
            indexAmbosOponentes(i, i)
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            crearMensaje()
            resultadoCombate = "GANASTE...!!! 😂😂😂"
            console.log(resultadoCombate)
        } else {
            indexAmbosOponentes(i, i)
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
            crearMensaje()
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

        iniciarMapa()
        pintarCanvas()
       


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
        
        iniciarMapa()
        pintarCanvas()
        
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
        
        iniciarMapa()
        pintarCanvas()

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

function iniciarMapa () {
    mapa.width = 800
    mapa.height = 600

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    
    intervalo = setInterval(pintarCanvas, 10)
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function pintarCanvas() {
    
    sectionVerMapa.style.display = "flex"
    
     
    //Limpiar canvas: por moverCapipepo()
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()

    //podemos saber si nuestra mascota se está moviendo si tiene velocidad en x o en y
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }
    
}



function moverDerecha() {
    // para mover onclick
    // capipepo.x = capipepo.x + 5
    // pintarCanvas()

    //para mover onmouse
    mascotaJugadorObjeto.velocidadX = 1
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -1
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 1
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -1
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    console.log(event.key)
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowRight":
            moverDerecha()
            break;
        case "ArrowLeft":
            moverIzquierda()
            break;


        default:
            break;
    }
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
    // crearMensaje()
    if (victoriasJugador == victoriasEnemigo) {
        crearMensajeFinal("Esto fue un EMPATE!")
        const element = document.getElementById("mensajes");
        element.style.color = "yellow";
        element.style.textShadow = "2px 2px 5px #000";
        
    } else if (victoriasJugador > victoriasEnemigo) { 
        crearMensajeFinal("FELICITACIONES GANASTE 😂")
        const element = document.getElementById("mensajes");
        element.style.color = "green";
        element.style.textShadow = "2px 2px 5px #000";
    } else {
    crearMensajeFinal("Habeis PERDIDO!")
        const element = document.getElementById("mensajes");
        element.style.color = "red";
        element.style.textShadow = "2px 2px 5px #000";
    }
}

//CREAR MENSAJE FINAL
function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    document.getElementById("reiniciar").style.display = "block"
}

function revisarColision(enemigo) {
    
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho
    
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto

    const izquierdaMascota = mascotaJugadorObjeto.x
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    
    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    } else {
        detenerMovimiento()
        alert("Hay colisión con: " + enemigo.nombre) 
    }
}

window.addEventListener("load", iniciarJuego)