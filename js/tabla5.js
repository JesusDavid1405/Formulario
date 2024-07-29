function tablaMultiplicar(){

    let tabla=document.getElementById("tabla").value;
    let factor=document.getElementById("factor").value;
    let producto;

    let iteracion;
    let contar;

    let imprimir="";

    let multipla=0;

    let titulo="";


    for(contar=1; contar<=tabla; contar++){ 
        titulo=`Tabla Del ${contar}`;
        multipla="";
        for(iteracion=1; iteracion<=factor; iteracion++){
            producto=contar*iteracion;
            
            multipla+=
            `<div class="col">
                ${contar} X ${iteracion} = <strong>${producto}</strong>\n\n
            </div>`;
        }
        imprimir+=
        `<div class="card mb-3" style="max-width: 18rem;">
            <div class="card-header bg-danger">
                <h6>${titulo}</h6>
            </div>
            <div class="card-body bg-danger-subtle">
                ${multipla}
            </div>
        </div>`;
    }


    

    document.getElementById("imprimir").innerHTML=imprimir;

    return false;
}