function numeroM(){
    let numeroUno  = document.getElementById('n1').value;
    let numeroDos  = document.getElementById('n2').value;
    let numM;
    let numero;
    let igual;

    if(numeroUno == "" && numeroDos == ""){

        document.getElementById(`numeroM`).innerHTML = '<div>Por favor, rellene los espacios.</div>';

        return false
    }else{ 

        numeroUno = parseInt(numeroUno);
        numeroDos = parseInt(numeroDos);

    if (numeroUno!=numeroDos){

        if(numeroUno>numeroDos){
            numM = `el numero uno es mayor: ${numeroUno} </br>`;
        }
        else{
            numM = `el numero dos es mayor: ${numeroDos} </br>`;
        }
    }else{
        numM = `los numeros son iguales </br>`;
    }

    numero = ` ${numM} </br>`;
    igual = ` ${numM}`;

    if (numero == igual){
        numero  == igual;
    }
    document.getElementById(`numeroM`).innerHTML = numero;

    return false
  }
} 