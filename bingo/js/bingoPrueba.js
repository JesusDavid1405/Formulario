/*
*Bingo
*Fecha: 8 de mayo del 2024
*Autor: Jesus David Fierro Rivera
*/ 

let bingo=[];
let interno=[];

let iteracion1;
let iteracion2;

let contador=0;

let tabla;

let cantidadPares=[];
let cantidadImpares=[];

for(iteracion1=0; iteracion1<5 ; iteracion1++ ){
    interno=[];
    for(iteracion2=0; iteracion2<5 ; iteracion2++ ){
        contador=contador+1;
        tabla=contador*3;
        interno.push(tabla);
    }
    bingo.push(interno);
}

console.log(bingo)

let letraB=[];
let imprimirB;


for(iteracion1=0; iteracion1<5; iteracion1++){
    letraB.push(bingo[iteracion1][0]);

    //document.getElementById(`b${iteracion1}`).innerHTML=letraB[iteracion1];
}
console.log("letra B: ",letraB);

let letraI=[];

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraI.push(bingo[iteracion1][0]);
}
console.log("letra I: ",letraI);

let letraN=[];

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraN.push(bingo[iteracion1][0]);
}
console.log("letra N: ",letraN);

let letraG=[];

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraG.push(bingo[iteracion1][0]);
}
console.log("letra G: ",letraG);

let letraO=[];

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraO.push(bingo[iteracion1][0]);
}
console.log("letra O: ",letraO);
console.log("\n\n")


for(iteracion1=0; iteracion1<5 ; iteracion1++ ){
    interno=[];
    for(iteracion2=0; iteracion2<5 ; iteracion2++ ){
        if(bingo[iteracion1][iteracion2] % 2==0 ){
            cantidadPares.push(bingo[iteracion1][iteracion2]);
        }else{
            cantidadImpares.push(bingo[iteracion1][iteracion2]);
        }
    }
}

console.log("Numeros Pares: ",cantidadPares);
console.log("Numeros Impares: ",cantidadImpares);
console.log("\n\n");

let xGrande=[];

for(iteracion1=0; iteracion1<5 ; iteracion1++ ){
    interno=[];
    for(iteracion2=0; iteracion2<5 ; iteracion2++ ){
        if(bingo[iteracion1][iteracion2] % 2!==0 && bingo[iteracion1][iteracion2] %7==0 ^ bingo[iteracion1][iteracion2]){
            xGrande.push(bingo[iteracion1][iteracion2]);
        }
    }
}
console.log(xGrande)