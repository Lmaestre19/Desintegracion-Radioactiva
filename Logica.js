let K;
let comboTiempoGeneral = document.getElementById("tiempoGeneral").value;
var imgT = document.getElementById("foto1");
var imgThalf = document.getElementById("foto2");
let resultado = document.getElementById("resultado");

function validarTiempoYCalcular(funcionCalculo) {
  var selectElement = document.getElementById("tiempoGeneral");
  if (selectElement.disabled) {
    funcionCalculo();
  } else {
    alert("Por favor, envía el tiempo antes de realizar los cálculos.");
  }
}

function inhabilitarTiempo() {
  var selectElement = document.getElementById("tiempoGeneral");
  selectElement.disabled = true;

  var labelK = document.getElementById("tiempoK");
  var labelThalf = document.getElementById("tiempoThalf");
  var labelT = document.getElementById("tiempoT");

  var selectedValue = selectElement.value;

  labelK.innerHTML = selectedValue + "<sup>-1</sup>";
  labelThalf.innerHTML = selectedValue;
  labelT.innerHTML = selectedValue;

  var labelNt = document.getElementById("tiempoNt");
  var labelt = document.getElementById("tiempot");

  labelNt.innerHTML = selectedValue;
  labelt.innerHTML = selectedValue;
}

function mostrarResultado(resultado, idElemento) {
  let resultadoElement = document.getElementById(idElemento);
  resultadoElement.value = resultado;
  resultadoElement.disabled = true;
}

function calculoK() {
  ocultarElementos();
  let tHalf = document.getElementById("t1/2").value;
  let T = document.getElementById("T").value;
  let btnCalculoK = document.getElementById("btnCalculo_K");

  if (tHalf !== "" || T !== "") {
    if (tHalf !== "") {
      K = -Math.log(2) / tHalf;
      mostrarResultado(K.toFixed(3), "K");
      resultado.innerHTML =
        "La constante de desintegración K es: " + K.toFixed(3);
    } else if (T !== "") {
      K = 1 / -T;
      mostrarResultado(K.toFixed(3), "K");
      resultado.innerHTML =
        "La constante de desintegración K es: " + K.toFixed(3);
    }
    btnCalculoK.disabled = true;
    btnCalculoK.classList.add("disabled-button");
  } else {
    alert("Ingresa al menos un valor en los campos");
  }
}

function calculoThalf() {
  ocultarElementos();

  let auxK = document.getElementById("K").value;
  let tHalf;
  let btnCalculoThalf = document.getElementById("btnCalculo_tHalf");

  if (auxK) {
    let K = parseFloat(auxK);
    tHalf = Math.log(2) / K;
    mostrarResultado(tHalf.toFixed(3), "t1/2");
    resultado.innerHTML =
      "El periodo de semidesintegración t1/2 es: " + tHalf.toFixed(3);
    btnCalculoThalf.disabled = true;
    btnCalculoThalf.classList.add("disabled-button");
  } else {
    alert("Se recomienda llenar K para encontrar t1/2");
  }
}

function calculoT() {
  ocultarElementos();
  let auxK = document.getElementById("K").value;
  let T;
  let btnCalculoT = document.getElementById("btnCalculoT");

  if (auxK !== "") {
    let K = parseFloat(auxK);
    T = 1 / K;
    mostrarResultado(T.toFixed(3), "T");
    resultado.innerHTML = "La vida media T es: " + T.toFixed(3);
    btnCalculoT.disabled = true;
    btnCalculoT.classList.add("disabled-button");
  } else {
    alert("Se recomienda llenar K para encontrar T");
  }
}

function mostrarNt() {
  ocultarElementos();
  let divNt = document.getElementById("divNt");
  divNt.style.display = "block";
}

function calculoNt() {
  let tInput = document.getElementById("valortNt");
  let n0Input = document.getElementById("n0");
  let KInput = document.getElementById("K");

  let t = parseFloat(tInput.value);
  let n0 = parseFloat(n0Input.value);
  let K = parseFloat(KInput.value);

  // Validar si los valores de entrada están vacíos
  if (tInput.value === "" || n0Input.value === "" || KInput.value === "") {
    alert("Por favor, ingresa todos los valores de entrada.");
    return;
  }

  // Validar si los valores ingresados son números válidos
  if (isNaN(t) || isNaN(n0) || isNaN(K)) {
    alert("Por favor, ingresa valores numéricos válidos.");
    return;
  }

  let Nt = n0 * Math.pow(Math.E, -K * t);
  mostrarResultado(Nt.toFixed(3), "Nt");
}

function mostrarCalculoTiempo() {
  ocultarElementos();
  let divTiempo = document.getElementById("divTiempo");
  let divQueda = document.getElementById("divQueda");

  let op = prompt(
    "¿Qué desea saber del tiempo?\n" +
      "1. ¿Cuánta cantidad se ha desintegrado?\n" +
      "2. ¿Cuánto queda?"
  );

  if (op == 1) {
    divQueda.style.display = "none";
    divTiempo.style.display = "block";
  } else if (op == 2) {
    divTiempo.style.display = "none";
    divQueda.style.display = "block";
  }
}

function calculoTiempo(campo, valorCombo) {
  let comboBox = document.getElementById(valorCombo);
  let cantidadInput = document.getElementById(campo);
  let KInput = document.getElementById("K");
  let n0Input = document.getElementById("n0");

  let comboBoxValue = comboBox.value;
  let cantidadValue = parseFloat(cantidadInput.value);
  let K = parseFloat(KInput.value);
  let n0 = parseFloat(n0Input.value);

  // Validar si los valores de entrada están vacíos
  if (
    cantidadInput.value === "" ||
    KInput.value === "" ||
    n0Input.value === ""
  ) {
    alert("Por favor, ingresa todos los valores de entrada.");
    return;
  }

  // Validar si los valores ingresados son números válidos
  if (isNaN(cantidadValue) || isNaN(K) || isNaN(n0)) {
    alert("Por favor, ingresa valores numéricos válidos.");
    return;
  }

  if (campo === "cuantoPoC") {
    if (comboBoxValue === "Porcentaje") {
      let Nt = 1 - cantidadValue / 100;

      let resultado = Math.log(Nt / n0) / K;
      mostrarResultado(resultado.toFixed(3), "t");
    } else {
      let cantidad = 1 - cantidadValue;

      let resultado = Math.log(cantidad) / K;
      mostrarResultado(resultado.toFixed(3), "t");
    }
  } else {
    let comboBoxValue = document.getElementById("cuantoQuedaSelect").value;
    if (comboBoxValue === "Porcentaje") {
      let porcentaje = parseFloat(document.getElementById("cuantoQueda").value);
      porcentaje = porcentaje / 100;

      let resultado = Math.log(porcentaje / n0) / K;
      mostrarResultado(resultado.toFixed(3), "t");
    } else {
      let cantidad = parseFloat(document.getElementById("cuantoQueda").value);

      let resultado = Math.log(cantidad) / K;
      mostrarResultado(resultado.toFixed(3), "t");
    }
  }
}

function ocultarElementos() {
  let divTiempo = document.getElementById("divTiempo");
  let divQueda = document.getElementById("divQueda");
  let divNt = document.getElementById("divNt");

  divTiempo.style.display = "none";
  divQueda.style.display = "none";
  divNt.style.display = "none";
}

function resetearValores() {
  // Restablecer valores de los campos de entrada
  document.getElementById("n0").value = "";
  document.getElementById("K").value = "";
  document.getElementById("t1/2").value = "";
  document.getElementById("T").value = "";
  document.getElementById("Nt").value = "";
  document.getElementById("t").value = "";
  document.getElementById("valortNt").value = "";

  // Habilitar el selector de tiempo y restablecer etiquetas
  var selectElement = document.getElementById("tiempoGeneral");
  selectElement.disabled = false;
  selectElement.selectedIndex = 0;

  var labelK = document.getElementById("tiempoK");
  var labelThalf = document.getElementById("tiempoThalf");
  var labelT = document.getElementById("tiempoT");
  var labelNt = document.getElementById("tiempoNt");
  var labelt = document.getElementById("tiempot");

  labelK.innerHTML = "t<sup>-1</sup>";
  labelThalf.innerHTML = "t";
  labelT.innerHTML = "t";
  labelNt.innerHTML = "t";
  labelt.innerHTML = "t";

  // Restablecer estilos de los botones
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].classList.remove("disabled-button");
  }

  // Ocultar secciones de tiempo
  ocultarElementos();

  // Restablecer resultados
  resultado.innerHTML = "";
  mostrarResultado("", "K");
  mostrarResultado("", "t1/2");
  mostrarResultado("", "T");
  mostrarResultado("", "Nt");

  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    // Habilitar los inputs deshabilitados
    if (inputs[i].disabled) {
      inputs[i].disabled = false;
    }
  }
}
