function asignarEjercicio(id, ejercicio) {
  let elemento = document.getElementById(id);
  if (elemento) {
    elemento.innerHTML = ejercicio;
  }
}

function asignarDescripti(id, descripti) {
  let elemento = document.getElementById(id);
  if (elemento) {
    elemento.innerHTML = descripti;
  }
}

function asignarEnlace(id, enlace) {
  let elemento = document.getElementById(id);
  elemento.onclick = function() {
    window.location.href = enlace;
  };
}


//* M O L D E:
// asignarEjercicio("n-ejer-01", "<P><a href='./ejer_01.html'>Ejercicio 1</a><P>");
// asignarDescripti("d-block-01","");

asignarEjercicio("n-ejer-09", "<P>Ejercicio 9<P>");
asignarDescripti("d-block-09","<p>A partir del peso inicial y final que registró una persona en un tratamiento para adelgazar, calcular e informar el porcentaje que perdió con respecto al peso inicial.</p>");
asignarEnlace("n-ejer-09", "./ejer_09.html")

asignarEjercicio("n-ejer-10", "<P><Ejercicio 10><P>");
asignarDescripti("d-block-10","<p>Realizar un algoritmo que permita calcular el volumen de un cilindro.</p> <p>Se ingresarán por teclado la altura del cuerpo y el radio de la base.</p> <p>&nbsp;</p> <p>Volumen del cilindro = π * radio al cuadrado * altura.</p>");
asignarEnlace("n-ejer-10", "./ejer_10.html")

asignarEjercicio("n-ejer-11", "<P><Ejercicio 11><P>");
asignarDescripti("d-block-11","<p>Escribir un programa para calcular la velocidad y el consumo por kilómetro de un automóvil.</p> <p>&nbsp;</p> <p>Ingresar por teclado:</p> <p>&nbsp; → distancia (en kilómetros),</p> <p>&nbsp; → el TiempoHH (en horas) y </p> <p>&nbsp; → la cantidad de gasoil empleado.</p> <p>&nbsp;</p> <p>Fórmulas:</p> <p>&nbsp; → Velocidad = kilómetros / horas</p> <p>&nbsp; → Consumo por km = litros / kilómetros</p>");
asignarEnlace("n-ejer-11", "./ejer_11.html")

asignarEjercicio("n-ejer-12", "<P><Ejercicio 12><P>");
asignarDescripti("d-block-12","<p>Calcular e imprimir el sueldo bruto y neto de un empleado.</p> <p>&nbsp;</p> <p>Considerar:</p> <p>&nbsp; → la paga de $8 la hora,</p> <p>&nbsp; → un descuento del 11% previsional y</p> <p>&nbsp; → el 5% para cobertura médica.</p> <p>&nbsp;</p> <p>La cantidad de horas trabajadas es un dato de entrada.</p>");
asignarEnlace("n-ejer-12", "./ejer_12.html")

asignarEjercicio("n-ejer-13", "<P><Ejercicio 13><P>");
asignarDescripti("d-block-13","<p>Un supermercado otorga puntos para canjear por premios, por las compras que realiza en tres rubros.</p> <p>&nbsp;</p> <p>Otorga 1 punto cada:</p> <p>&nbsp; → $3 en alimentos,</p> <p>&nbsp; → $2 en limpieza y </p> <p>&nbsp; → $5 en otros. </p> <p>&nbsp;</p> <p>Ingresar los tres importes e informar los puntos obtenidos. </p> <p>&nbsp;</p> <p>Si en algún rubro no realizó compras, dicho importe es cero.</p>");
asignarEnlace("n-ejer-13", "./ejer_13.html")

asignarEjercicio("n-ejer-14", "<P><Ejercicio 14h<P>");
asignarDescripti("d-block-14","<p>Leer dos enteros, intercambiar el contenido de ambas variables y mostrarlas por pantalla.</p>");
asignarEnlace("n-ejer-14", "./ejer_14.html")

asignarEnlace("n-ejer-15", "./ejer_14.html")

var miDiv = document.getElementById("n-ejer-15");
var tiempoUltimoTouch = 0;
var tiempoEntreTocadas = 500; // milisegundos

miDiv.addEventListener("mouseover", function() {
  miDiv.innerHTML = "Descripción";
});

miDiv.addEventListener("mouseout", function() {
  miDiv.innerHTML = "Ejercicio 15";
});

miDiv.addEventListener("touchstart", function() {
  if (tiempoUltimoTouch !== 0 && (Date.now() - tiempoUltimoTouch) <= tiempoEntreTocadas) {
    // doble toque
    window.location.href = "./ejer_09.html";
  } else {
    // primer toque
    tiempoUltimoTouch = Date.now();
    miDiv.innerHTML = "Descripción";
  }
});

miDiv.addEventListener("touchend", function() {
  setTimeout(function() {
    miDiv.innerHTML = "Ejercicio 15";
  }, tiempoEntreTocadas);
});
