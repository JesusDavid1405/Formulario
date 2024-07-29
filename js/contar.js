function contarMucho(){

    let contar=document.getElementById("contar").value;

    let numero;

    let UnoUno="";
    let DosDos="";
    let CincoCinco="";

    for(numero=1; numero<=contar; numero++){
        UnoUno+=
        `
        <div class="col">
            <h4>${numero}</h4>
        </div>`;
    }


    for(numero=0; numero<=contar; numero+=2){
        DosDos+=
        `
        <div class="col">
            <h4>${numero}</h4>
        </div>`;
    }

    for(numero=0; numero<=contar; numero+=5){
        CincoCinco+=
        `
        <div class="col">
            <h4>${numero}</h4>
        </div>`;
    }

    document.getElementById("unoauno").innerHTML=UnoUno;
    document.getElementById("dosados").innerHTML=DosDos;
    document.getElementById("cincoacinco").innerHTML=CincoCinco;

    return false;
}