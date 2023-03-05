// Importamos el módulo express para crear nuestro servidor web
const express = require("express")
// Creamos una instancia de nuestra aplicación express
const app = express()

const cors = require("cors")

app.use(express.static('public'))

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

    actualizarPosicion(x, y) {
      this.x = x
      this.y = y
    }

    asignarAtaques(ataques) {
        this.ataques = ataques
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

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.get("/hola", (req, res) => {
  res.end("<h1>Hola Mundo!</h1>")
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
    
    res.end() //se utiliza para enviar una respuesta HTTP al cliente y finalizar la comunicación entre el servidor y el cliente. PERO no cierra la conexión, para cerrarla: res.destroy()
})

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const x = req.body.x || 0
  const y = req.body.y || 0
  
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
  
  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].actualizarPosicion(x, y)
  }

  const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

  res.send({enemigos})
})

//
app.post("/mokepon/:jugadorId/ataques", (req, res) => {
    // console.log(jugadores)
    
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    
    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }

    
    res.end() //se utiliza para enviar una respuesta HTTP al cliente y finalizar la comunicación entre el servidor y el cliente. PERO no cierra la conexión, para cerrarla: res.destroy()
})

app.post('/usuarios', (req, res) => {
    // extraer datos del cuerpo de la solicitud
    const nuevoUsuario = req.body;
    // guardar el nuevo usuario en la base de datos
    db.guardarUsuario(nuevoUsuario);
    // enviar una respuesta al cliente
    res.send('Usuario creado exitosamente');
  });

app.get("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
      ataques: jugador.ataques || []
    })
  })

// Iniciamos el servidor y lo hacemos escuchar en el puerto 8080
app.listen(3000, () => {
    // Imprimimos un mensaje en la consola para confirmar que el servidor está en ejecución
    console.log("Server is running")
})