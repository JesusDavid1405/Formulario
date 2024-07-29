function pagos(){
    let diasTrabajados  = document.getElementById('DT').value;
    let valorDia  = document.getElementById('VD').value;
    let salario;
    let salud;
    let pension;
    let arl;
    let descuento;
    let pagoTotal;
    let rsalario;
    let rsalud;
    let rpension;
    let rarl;
    let rdescuento;
    let rpagoTotal;


    if(diasTrabajados == "" && valorDia == ""){
        document.getElementById(`pagos`).innerHTML = '<div>Por favor, rellene los espacios.</div>';
        
        return false

    }else{
        
        diasTrabajados = parseInt(diasTrabajados);
        valorDia = parseInt(valorDia);

    salario = diasTrabajados * valorDia;
    salud = salario * 0.12;
    pension = salario * 0.16;
    arl = salario * 0.052;
    descuento = salud + pension + arl;
    pagoTotal = salario - descuento;

    rsalario = `el salario fue: ${salario} </br>`;
    rsalud = `el descuento de salud fue: ${salud} </br>`;
    rpension = `el descuento de pension fue: ${pension} </br>`;
    rarl = `el descuento de arl fue: ${arl} </br>`;
    rdescuento = `el descuento total fue: ${descuento} </br>`;
    rpagoTotal = `el pago total fue: ${pagoTotal} </br>`;
    
    
    document.getElementById("pagos").innerHTML = rsalario + rsalud + rpension + rarl + rdescuento + rpagoTotal;
    

    return false;
    }

}