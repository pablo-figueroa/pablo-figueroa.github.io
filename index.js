// Importamos el módulo express para crear nuestro servidor web
const express = require("express")

const cors = require("cors")



// Creamos una instancia de nuestra aplicación express
const app = express()

app.use(cors())
app.use(express.json())
const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }

    asignarMokepon(mokepon) {
        this.mokepon = mokepon
    }
}

class Mokepon {
    constructor(nombre) {
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    // res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/mokepon/:jugadorId", (req, res) => {
    // console.log(jugadores)
    
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

// Iniciamos el servidor y lo hacemos escuchar en el puerto 8080
app.listen(3000, () => {
    // Imprimimos un mensaje en la consola para confirmar que el servidor está en ejecución
    console.log("Server is running")
})