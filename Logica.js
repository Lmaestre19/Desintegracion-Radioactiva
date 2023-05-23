let K;
let comboTiempoGeneral = document.getElementById("tiempoGeneral").value;
var imgT = document.getElementById("foto1");
var imgThalf = document.getElementById("foto2");

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
    selectElement = document.getElementById("tiempoGeneral");
    var labelK = document.getElementById("tiempoK");
    var labelThalf = document.getElementById("tiempoThalf");
    var labelT = document.getElementById("tiempoT");
    var selectedValue = selectElement.value;
    labelK.innerHTML = selectedValue + "<sup>-1</sup>";
    labelThalf.innerHTML = selectedValue;
    labelT.innerHTML = selectedValue;
}

function mostrarResultado(resultado, idElemento) {
    let resultadoElement = document.getElementById(idElemento);
    resultadoElement.value = resultado;
    resultadoElement.disabled = true;
}

function calculoK() {
    let tHalf = document.getElementById('t1/2').value;
    let T = document.getElementById('T').value;
    let btnCalculoK = document.getElementById('btnCalculo_K');

    if (tHalf !== '' || T !== '') {
        if (tHalf !== '') {
            K = -Math.log(2) / tHalf;
            mostrarResultado(K, 'K');
        } else if (T !== '') {
            K = 1 / -T;
            mostrarResultado(K, 'K');
        }
        btnCalculoK.disabled = true;
        btnCalculoK.classList.add("disabled-button");
    } else { 
        alert("Ingresa al menos un valor en los campos");
    }
}

function calculoThalf() {
    let auxK = document.getElementById('K').value;
    let tHalf;
    let btnCalculoThalf = document.getElementById('btnCalculo_tHalf');

    if (auxK) {
        let K = parseFloat(auxK);
        tHalf = Math.log(2) / K;
        mostrarResultado(tHalf, 't1/2');
        btnCalculoThalf.disabled = true;
        btnCalculoThalf.classList.add("disabled-button");
    } else {
        alert("Se recomienda llenar K para encontrar t1/2");
    }
}

function calculoT() {
    let auxK = document.getElementById('K').value;
    let T;
    let btnCalculoT = document.getElementById('btnCalculoT');

    if (auxK !== '') {
        let K = parseFloat(auxK);
        T = 1 / K;
        mostrarResultado(T, 'T');
        btnCalculoT.disabled = true;
        btnCalculoT.classList.add("disabled-button");
    } else {
        alert("Se recomienda llenar K para encontrar T");
    }
}

function calculoNt() {
    let n0 = document.getElementById('n0').value;
    K = document.getElementById('K').value;

    let Nt = n0 * (Math.pow(Math.E, (-K * t)));
    alert(Nt.toFixed(3));
}

function calculoTiempo() {
    let divTiempo = document.getElementById('divTiempo');
    let divQueda = document.getElementById('divQueda');


    let op = prompt("¿Qué desea saber del tiempo?\n" +
        "1. ¿Cuánta cantidad se ha sido desintegrado?\n" +
        "2. ¿Cuánto queda?");

    if (op == 1) {
        divQueda.style.display = 'none';
        divTiempo.style.display = 'block';

        let comboBox = document.getElementById("cuantoPoCSelect").value;
        if (comboBox === "Porcentaje") {
            let porcentaje = document.getElementById('cuantoPoC').value;
            let Nt = 1 - (porcentaje / 100);
            let K = document.getElementById('K').value;
            let n0 = document.getElementById('n0').value;

            let resultado = (Math.log(Nt / n0)) / K;
            alert(resultado.toFixed(3));
        } else {
            let cantidad = document.getElementById('cuantoPoC').value;
            cantidad = 1 - cantidad;
            let K = document.getElementById('K').value;

            let resultado = (Math.log(cantidad)) / K;
            alert(resultado.toFixed(3));
        }
    } else if (op == 2) {
        divTiempo.style.display = 'none';
        divQueda.style.display = 'block';

        let comboBox = document.getElementById("cuantoQuedaSelect").value;
        if (comboBox === "Porcentaje") {
            let porcentaje = document.getElementById('cuantoQueda').value;
            porcentaje = porcentaje / 100;
            let K = document.getElementById('K').value;
            let n0 = document.getElementById('n0').value;

            let resultado = (Math.log(porcentaje / n0)) / K;
            console.log(resultado);
            alert(resultado.toFixed(3));
        } else {
            let cantidad = document.getElementById("cuantoQueda").value;
            let K = document.getElementById('K').value;

            let resultado = (Math.log(cantidad)) / K;
            console.log(resultado);
            alert(resultado.toFixed(3));
        }
    }
}





