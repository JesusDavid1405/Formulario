function areas(){
    let lado =  document.getElementById('lados').value;
    let baser = document.getElementById('base').value;
    let alturar = document.getElementById('altura').value;
    let baset = document.getElementById('base1').value; 
    let alturat = document.getElementById('altura1').value;
    let cuadrado;
    let triangulo;
    let rectangulo;
    let rcuadrado;
    let rrectangulo;
    let rtriangulo;

    if(lado == "" && baser == "" && alturar == "" && baset == "" && alturat == "" ){
        
        document.getElementById(`areas`).innerHTML = '<div>Por favor, rellene los espacios.</div>';

    }else{ 

        lado = parseInt(lado);
        baser = parseInt(baser);
        alturar = parseInt(alturar);
        baset = parseInt(baset);
        alturat = parseInt(alturat);


        cuadrado = lado * lado;
        rectangulo = baser * alturar;
        triangulo = (baset * alturat) / 2;

        rcuadrado = `El area del cuadrado es:  ${cuadrado} </br>`;
        rrectangulo = `El area del rectangulo es:  ${rectangulo} </br>`;
        rtriangulo = `El area del triangulo es:  ${triangulo} </br>`;

        document.getElementById(`areas`).innerHTML = rcuadrado + rrectangulo + rtriangulo;
    }
    return false;
}