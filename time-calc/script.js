
// document.getElementById('resultado').innerHTML = 2500.00;

function getValue() {

let hora_valor = document.getElementById('hora_valor').value;
hora_valor = parseFloat(hora_valor);

let hora_tiempo = document.getElementById('hora_tiempo').value;
hora_tiempo = parseFloat(hora_tiempo);

let minutos_tiempo = document.getElementById('minutos_tiempo').value;
minutos_tiempo = parseFloat(minutos_tiempo);





let resultado = hora_valor * (hora_tiempo + (minutos_tiempo / 60));



let resultadoFormateado = resultado.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

document.getElementById('resultado').innerHTML = resultadoFormateado;

}