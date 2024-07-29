 

function imprimir(){
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;

    let notaUno=parseFloat(document.getElementById("notaUno").value);
    let notaDos=parseFloat(document.getElementById("notaDos").value);
    let notaTres=parseFloat(document.getElementById("notaTres").value);    

    let porcentajeUno;
    let porcentajeDos;
    let porcentajeTres;

    let notaFinal;

    porcentajeUno=0.20 * notaUno;
    porcentajeDos=0.45 * notaDos;
    porcentajeTres=0.35 * notaTres;

    notaFinal= porcentajeUno + porcentajeDos + porcentajeTres;

    let valoracionGeneral=["superior","Buena","Regular","Insuficiente"];
    let entrar=0;

    if(5>notaFinal && notaFinal>4.5){

        entrar=0;

    }else if(4.5>notaFinal && notaFinal>3.5){

        entrar=1;

    }else if(3.5>notaFinal && notaFinal>3.0){

        entrar=2;

    }else if(3.0>notaFinal){

        entrar=3;
    }

    let resultado;

    resultado=
    `<tr>
        <th scope="row">${nombre}</th>
        <th scope="row">${apellido}</th>
        <th scope="row">${notaUno}</th>
        <th scope="row">${notaDos}</th>
        <th scope="row">${notaTres}</th>
        <th scope="row">${notaFinal}</th>
        <th scope="row">${valoracionGeneral[entrar]}</th>
    </tr>`;

    document.getElementById("resultado").innerHTML=resultado;

    return false;
}