function sumas() {
    let numeroUno = (document.getElementById('n1').value);
    let numeroDos = (document.getElementById('n2').value);

    // Validación
    if(numeroUno == "" || numeroDos == "") {
        document.getElementById('sumas').innerHTML = '<div>Por favor, rellene los espacios.</div>';
        return false;
    }

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    let suma = numeroUno + numeroDos;
    let rsumar = `Suma: ${suma}<br>`;

    document.getElementById('sumas').innerHTML = rsumar;

    return false
}