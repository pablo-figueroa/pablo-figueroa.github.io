// Importamos el módulo express para crear nuestro servidor web
const express = require("express")

// Creamos una instancia de nuestra aplicación express
const app = express()

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

// Iniciamos el servidor y lo hacemos escuchar en el puerto 8080
app.listen(3000, () => {
    // Imprimimos un mensaje en la consola para confirmar que el servidor está en ejecución
    console.log("Servidor Funcionando")
})