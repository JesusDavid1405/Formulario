function numeroM(){
    let numeroUno  = parseInt(document.getElementById('n1').value);
    let numeroDos  = parseInt(document.getElementById('n2').value);
    let numeroTres  = parseInt(document.getElementById('n3').value);
    let numM;
    let numero;

    if (numeroUno!=numeroDos && numeroUno!=numeroTres && numeroTres!=numeroDos){

        if(numeroUno>numeroDos && numeroDos>numeroTres){
               numM = `el numero uno es mayor: ${numeroUno} </br>`;
        }
        else{
            if(numeroDos>numeroUno && numeroDos>numeroTres){
                numM = `el numero dos es mayor: ${numeroDos} </br>`;
            }
            else{
                numM = `el numero tres es mayor: ${numeroTres} </br>`;
            }
        }
    }else{
        numM = `los tres numeros son iguales </br>`;
    }

    numero = ` ${numM} </br>`;

    document.getElementById(`numeroM`).innerHTML = numero;

    return false
} 