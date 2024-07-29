function porcentajes(){
    let numeroUno =  document.getElementById('n1').value;
    let numeroDos =  document.getElementById('n2').value;
    let numeroTres = document.getElementById('n3').value;
    let porcentaje1;
    let porcentaje2;
    let porcentaje3;
    let rporcentaje1;
    let rporcentaje2;
    let rporcentaje3;
    let porcentajeF;
    let rporcentajeF;

    if(numeroUno == "" && numeroDos == ""  && numeroTres == ""){ 
        document.getElementById(`porcentajes`).innerHTML = '<div>Por favor, rellene los espacios.</div>';
        

        return false
    }else{

        numeroUno   = parseInt(numeroUno);
        numeroDos   = parseInt(numeroDos);
        numeroTres  = parseInt(numeroTres);   

    porcentaje1= numeroUno * 0.3;
    porcentaje2= numeroDos * 0.3;
    porcentaje3= numeroTres * 0.4;
    porcentajeF= porcentaje1 + porcentaje2 + porcentaje3;

    rporcentaje1 = `Porcentaje de la nota 1:  ${porcentaje1}</br>`;
    rporcentaje2 = `Porcentaje de la nota 2:  ${porcentaje2}</br>`;
    rporcentaje3 = `Porcentaje de la nota 3:  ${porcentaje3}</br>`;
    rporcentajeF = `Porcentaje de las 3 notas:  ${porcentajeF}</br>`;

    document.getElementById(`porcentajes`).innerHTML = rporcentaje1 + rporcentaje2 + rporcentaje3 + rporcentajeF;

    return false;
   }
}