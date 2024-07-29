function sumas(){
    let numeroUno = parseInt(document.getElementById('n1').value);
    let numeroDos = parseInt(document.getElementById('n2').value);
    let suma;
    let rsumar;

    suma= numeroUno + numeroDos;

    rsumar= `Suma: ${suma}<br>`;

    document.getElementById(`sumas`).innerHTML = rsumar;


    return false
}