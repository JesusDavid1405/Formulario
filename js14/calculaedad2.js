function Edades() {
    let fechaNac1 = document.getElementById('fecha1').value;
    let fechaNac2 = document.getElementById('fecha2').value;
    let fechaNac3 = document.getElementById('fecha3').value;

    let Persona1 = new Date(fechaNac1);
    let Persona2 = new Date(fechaNac2);
    let Persona3 = new Date(fechaNac3);


    
    if (fechaNac1 === "" || fechaNac2 === "" || fechaNac3 === "") {
        document.getElementById("resultado").innerHTML = `<div>Por favor, rellene todos los espacios</div>`;
    } else {


        let dato = calcular(Persona1);
        let dato2 = calcular(Persona2);
        let dato3 = calcular(Persona3);
        // let promedio = (Persona1 + Persona2 + Persona3) / 3;

        let respuesta = ""
         respuesta = `
            La edad de la primera persona es: ${dato} años<br/>
            La edad de la segunda persona es: ${dato2} años<br/>
            La edad de la tercera persona es: ${dato3} años<br/>
            `;
        // El promedio de las edades es: ${promedio} años<br/>

        document.getElementById("resultado").innerHTML = respuesta;
    }
    return false;

}

function calcular(fechas) {
    let fechaActual = new Date();
    let diferencia;
    let edad;

    diferencia = fechaActual - fechas;
    edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

    return edad;

}