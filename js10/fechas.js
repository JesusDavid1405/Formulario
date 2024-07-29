function fecha(){
    let fechaNac = document.getElementById('fechas').value;
    let fechaAct = 2024;
    let edad;
    let fechaF;
    let rfechaF;

    if(fechaNac == ""){

        document.getElementById(`fecha`).innerHTML = '<div>Por favor, rellene los espacios.</div>';

        return false
    }else{ 

        fechaNac = parseInt(fechaNac);


    edad = fechaAct - fechaNac;

    if (edad>= 18){
        fechaF = `el usuario si es mayor de edad tiene: ${edad} </br>`;
    }else{
        fechaF = `el usuario es menor de edad tiene: ${edad} </br>`;
    }

    rfechaF = `Segun el formulario ${fechaF} </br>`;

    document.getElementById(`fecha`).innerHTML = rfechaF;

    return false;
  }
}