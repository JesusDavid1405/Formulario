function promedios(){
    let numeroUno = document.getElementById('n1').value;
    let numeroDos = document.getElementById('n2').value;
    let numeroTres =document.getElementById('n3').value;
    let promedio;
    let rpromedio;


    if(numeroUno == "" && numeroDos == ""  && numeroTres == ""){
        document.getElementById(`promedios`).innerHTML = '<div>Por favor, rellene los espacios.</div>';

        return false
    }
    else{ 

        numeroUno   = parseInt(numeroUno)
        numeroDos = parseInt(numeroDos)
        numeroTres = parseInt(numeroTres)

        promedio= (numeroUno + numeroDos + numeroTres)/3;
        rpromedio= `Promedio: ${promedio}<br>`;
    
        document.getElementById(`promedios`).innerHTML = rpromedio;

    return false;
    }
     
}