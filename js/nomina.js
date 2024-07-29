function sueldo(){

    let nombres= document.getElementById("nombre").value;
    let apellidos= document.getElementById("apellido").value;
    let tipoIdentidads= document.getElementById("tipoIdentidad").value;
    let documentos= parseInt(document.getElementById("documento").value);
    let valorDias= parseInt(document.getElementById("valorDia").value);
    let diasTrabajadoss= parseInt(document.getElementById("diasTrabajados").value);

    let sueldo=salario(valorDias,diasTrabajadoss);
    let saluds=salud(sueldo);
    let pensions=pension(sueldo);
    let arls=arl(sueldo);
    let descuentos=descuento(saluds,pensions,arls);
    
    document.getElementById("nomina").innerHTML= 
    `<div>
        <p>
            bienvenido ${nombres} ${apellidos}, esta es la nomina de tu mes de trabajo:
        </p>
        <strong>Dias Trabajados: </strong>${diasTrabajadoss}<br>
        <strong>Valor Dia: </strong>${valorDias}<br>
        <strong>salud: </strong>${saluds}<br>
        <strong>Pensión: </strong>${pensions}<br>
        <strong>Arl: </strong>${arls}<br>
        <strong>Descuento: </strong>${descuentos}<br>
    </div>`

    return false
}

//funciones operadoras

function salario(pavalorDia, pdiasTrab) {
    let valorDia = pavalorDia;
    let diasTra = pdiasTrab;
    let salario = diasTra * valorDia;
    return   salario;
}

function salud(psalario) {
    let salarioo = psalario;
    let porcentaje = 0.12;
    let salud = salarioo * porcentaje;
    return salud;
}

function pension(psalario) {
    let salarioo = psalario;
    let porcentaje = 0.16;
    let pension = salarioo * porcentaje;
    return pension;
}

function arl(psalario) {
    let salarioo = psalario;
    let porcentaje = 0.052;
    let arl = salarioo * porcentaje;
    return arl;
}

function descuento(psalud, ppension,parl){
    let salud = psalud;
    let pension = ppension;
    let arl = parl;
    let descuento;
    descuento = salud + pension + arl;
    return descuento;
}

function pago(psalario,pdescuento){
    let salario  = psalario;
    let descuento = pdescuento;
    let pago;
    pago = salario - descuento;
    return pago;
}

//imprimir a pdf  

function imprimir(){
    var printWindow = window.open('', '_blank');
    
    // Generar el contenido que deseas imprimir
    var contentToPrint = `
        <html>
        <head>
            <title>Imprimir a PDF</title>
            <style>
                /* Estilos CSS para el contenido imprimible */
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                h1 {
                    color: #333;
                }
                /* Agrega otros estilos según sea necesario */
            </style>
        </head>
        <body>
           <div>
                <p>
                    bienvenido ${nombres} ${apellidos}, esta es la nomina de tu mes de trabajo:
                </p>
                <strong>Dias Trabajados: </strong>${diasTrabajadoss}<br>
                <strong>Valor Dia: </strong>${valorDias}<br>
                <strong>salud: </strong>${saluds}<br>
                <strong>Pensión: </strong>${pensions}<br>
                <strong>Arl: </strong>${arls}<br>
                <strong>Descuento: </strong>${descuentos}<br>
            </div>
        </body>
        </html>
    `;
    
    // Escribir el contenido en la nueva ventana
    printWindow.document.open();
    printWindow.document.write(contentToPrint);
    printWindow.document.close();
    
    // Usar la funcionalidad de impresión específica del navegador
    printWindow.print();
}
