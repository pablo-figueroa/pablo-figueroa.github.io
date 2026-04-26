function calcularPaquetes() {
  const txtNumber = document.getElementById("txtNumber");
  const lblResultado = document.getElementById("lblResultado");
  const marcas = document.getElementsByName("marca");

  let unidades = parseInt(txtNumber.value) || 0;
  let totalPaquetes = unidades * 5;

  // Obtener la marca seleccionada
  let seleccion = "";
  for (const rb of marcas) {
    if (rb.checked) {
      seleccion = rb.value;
      break;
    }
  }

  if (!seleccion) {
    lblResultado.innerText = "Seleccione una marca";
    return;
  }

  let divisor = seleccion === "a" ? 36 : 48;

  // Lógica equivalente a // y % de Python
  let cajas = Math.floor(totalPaquetes / divisor);
  let sueltos = totalPaquetes % divisor;

  if (cajas === 0) {
    lblResultado.innerText = `${sueltos} paquetes`;
  } else if (cajas === 1) {
    lblResultado.innerText = `${cajas} caja y ${sueltos} paquetes`;
  } else {
    lblResultado.innerText = `${cajas} cajas y ${sueltos} paquetes`;
  }
}

function minusClick() {
  const txtNumber = document.getElementById("txtNumber");
  let actual = parseInt(txtNumber.value) || 0;
  if (actual > 0) {
    txtNumber.value = actual - 1;
    calcularPaquetes();
  }
}

function plusClick() {
  const txtNumber = document.getElementById("txtNumber");
  let actual = parseInt(txtNumber.value) || 0;
  txtNumber.value = actual + 1;
  calcularPaquetes();
}
