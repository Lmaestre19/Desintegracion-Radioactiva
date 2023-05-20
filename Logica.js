let K;

function calculoK() {
    let tHalf = document.getElementById('t1/2').value;
    let T = document.getElementById('T').value;
    let Nt = document.getElementById('Nt').value;

    if (tHalf !== '') {
        K = Math.log(2) / tHalf;
        mostrarResultadoK("K: " + K);
    } else if (T !== '') {
        K = 1 / T;
        mostrarResultadoK("K: " + K);
    } else if (Nt !== '') {
        let n0 = document.getElementById('n0').value;
        let t = document.getElementById('t').value;
        let ln = Nt / n0;
        let result = Math.log(ln) / -t;
        K = result;
        mostrarResultadoK("K: " + K.toFixed(3));
    } else {
        // Alguno de los campos está vacío, muestra un mensaje de error o realiza alguna acción apropiada
        alert("Por favor, llena los campos t1/2 ó T.");
    }
}

function mostrarResultadoK(resultado) {
    let resultadoElement = document.getElementById('resultadoK');
    resultadoElement.textContent = resultado;
}


function calculoThalf() {

    let auxK = document.getElementById('K').value;
    let tHalf;

    if (auxK !== '' || K !== undefined) {
        tHalf = Math.log(2) / K;
        alert(tHalf.toFixed(3));
    } else {
        // Alguno de los campos está vacío, muestra un mensaje de error o realiza alguna acción apropiada
        alert("Se recomienda llenar K para encontrar t1/2");
    }
}

function calculoT() {
    let auxK = document.getElementById('K').value;
    let T;

    if (auxK !== '' || K !== undefined) {
        T = 1 / K;
        alert(T.toFixed(3));
    } else {
        // Alguno de los campos está vacío, muestra un mensaje de error o realiza alguna acción apropiada
        alert("Se recomienda llenar K para encontrar T");
    }
}

function calculoNt() {
    let n0 = document.getElementById('n0').value;
    let t = document.getElementById('t').value;
    K = document.getElementById('K').value;

    let Nt = n0 * (Math.pow(Math.E, (-K * t)));
    alert(Nt.toFixed(3));
}

function calculoN0() {

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
        if(comboBox === "Porcentaje"){
            let porcentaje = document.getElementById('cuantoPoC').value;
            let Nt = 1 - (porcentaje / 100);
            let K = document.getElementById('K').value;
            let n0 = document.getElementById('n0').value;
    
            let resultado = (Math.log(Nt / n0)) / -K;
            alert(resultado.toFixed(3));
        }else{
            let cantidad = document.getElementById('cuantoPoC').value;
            cantidad = 1 - cantidad;
            let K = document.getElementById('K').value;

            let resultado = (Math.log(cantidad)) / -K;
            alert(resultado.toFixed(3));
        }
    } else if (op == 2) {
        divTiempo.style.display = 'none';
        divQueda.style.display = 'block';
        
        let comboBox = document.getElementById("cuantoQuedaSelect").value;
        if(comboBox === "Porcentaje"){
            let porcentaje = document.getElementById('cuantoQueda').value;
            porcentaje = porcentaje / 100;
            let K = document.getElementById('K').value;
            let n0 = document.getElementById('n0').value;
    
            let resultado = (Math.log(porcentaje / n0)) / -K;
            console.log(resultado);
            alert(resultado.toFixed(3));
        }else{
            let cantidad = document.getElementById("cuantoQueda").value;
            let K = document.getElementById('K').value;

            let resultado = (Math.log(cantidad)) / -K;
            console.log(resultado);
            alert(resultado.toFixed(3));
        }
    }
}
