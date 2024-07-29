function cuadrados(){
    let lado1 = document.getElementById('lado1').value;
    let lado2 = document.getElementById('lado2').value;
    let lado3 = document.getElementById('lado3').value;
    let numM;
    let numero;
    let cuadrado1;
    let cuadrado2;
    let cuadrado3;

    if(lado1 == "" && lado2 == "" && lado3 == ""){
          document.getElementById(`cuadros3`).innerHTML = '<div>Por favor, rellene los espacios.</div>';
        return false
    }else {  

       lado1 = parseInt(lado1);
       lado2 = parseInt(lado2);
       lado3 = parseInt(lado3);

    cuadrado1 = lado1 * lado1;
    cuadrado2 = lado2 * lado2;
    cuadrado3 = lado3 * lado3;

    if (cuadrado1==cuadrado2 && cuadrado1==cuadrado3 && cuadrado3==cuadrado2){

            numM = `los tres cuadrados tienen las areas iguales </br>`;
    }else{
        if(cuadrado1>cuadrado2 && cuadrado2>cuadrado3){
            numM = `el area del cuadrado uno es mayor: ${cuadrado1} </br>`;
     }
     else{
         if(cuadrado2>cuadrado1 && cuadrado2>cuadrado3){
             numM = `el area del cuadro dos es mayor: ${cuadrado2} </br>`;
         }
         else{
             numM = `el area de cuadro tres es mayor: ${cuadrado3} </br>`;
         }
     }
       
    }

    numero = ` ${numM} </br>`;

    document.getElementById(`cuadros3`).innerHTML = numero;

    return false
   }
} 