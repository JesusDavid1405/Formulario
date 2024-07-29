function numeroM(){
    let numeroUno  = document.getElementById('n1').value;
    let numeroDos  = document.getElementById('n2').value;
    let numM;
    let numero;

if(numeroUno == "" && numeroDos == ""){

    document.getElementById(`numeroM`).innerHTML = '<div>Por favor, rellene los espacios.</div>';
    return false
}else{   
    
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    if (numeroUno>numeroDos){
        numM = `el numero uno: ${numeroUno} </br>`;
    }else{
        numM = `el numero dos: ${numeroDos} </br>`;
    }

    numero = `el numero mayor es ${numM} </br>`;


    document.getElementById(`numeroM`).innerHTML = numero;

    return false
  }
} 