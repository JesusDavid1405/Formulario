let bingo=[];
let interno=[];

let iteracion1;
let iteracion2;

let contador=0;

let tabla;

for(iteracion1=0; iteracion1<5 ; iteracion1++ ){
    interno=[];
    for(iteracion2=0; iteracion2<5 ; iteracion2++ ){
        contador=contador+1;
        tabla=contador*3;
        interno.push(tabla);
    }
    bingo.push(interno);
}

console.log(bingo);


let letraB=[];
let b="";


for(iteracion1=0; iteracion1<5; iteracion1++){
    letraB.push(bingo[0][iteracion1]);
    
    b+=
    `<div class="col bingoB">
        <div class="col cuadradoBingo">
            <p class="letraCuadrado">
                ${letraB[iteracion1]}
            </p> 
        </div>            
    </div>
    `;	
}


let letraI=[];
let i="";

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraI.push(bingo[1][iteracion1]);
    
    i+=
    `<div class="col bingoB">
        <div class="col cuadradoBingo">
            <p class="letraCuadrado">
                ${letraI[iteracion1]}
            </p> 
        </div>  
    </div>`;
    console.log(i);
}


let letraN=[];
let n="";

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraN.push(bingo[2][iteracion1]);
    
    n+=
    `<div class="col bingoB">
        <div class="col cuadradoBingo">
            <p class="letraCuadrado">
                ${letraN[iteracion1]}
            </p> 
        </div>
    </div>`;	
    console.log(n);
}
 


let letraG=[];
let g="";

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraG.push(bingo[3][iteracion1]);
    
    g+=
    `<div class="col bingoB">
        <div class="col cuadradoBingo">
            <p class="letraCuadrado">
                ${letraG[iteracion1]}
            </p> 
        </div>
    </div>`;	
}


let letraO=[];
let o="";

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraO.push(bingo[4][iteracion1]);
    
    o+=
    `<div class="col bingoB">
        <div class="col cuadradoBingo">
            <p class="letraCuadrado">
                ${letraO[iteracion1]}
            </p> 
        </div>
    </div>`;		
}
   

let bingoB=
`<div class="col bingo" >
    <div class="col-12 row bingoH">   
        <div class="col arriba">
            <p class="letraBingo">B</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">I</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">N</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">G</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">O</p>
        </div>
    </div>
    <div class="col row">
        <div class="col bingoB bingob">
            ${b}
        </div>
        <div class="col bingoB">
            ${i}
        </div>
        <div class="col bingoB">
            ${n}
        </div>
        <div class="col bingoB">
            ${g}
        </div>
        <div class="col bingoB">
            ${o}
        </div>
    </div>
</div>`;


let bingoI=
`<div class="col bingo" >
    <div class="col-12 row bingoH">   
        <div class="col arriba">
            <p class="letraBingo">B</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">I</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">N</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">G</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">O</p>
        </div>
    </div>
    <div class="col row">
        <div class="col bingoB">
            ${b}
        </div>
        <div class="col bingoB bingob">
            ${i}
        </div>
        <div class="col bingoB">
            ${n}
        </div>
        <div class="col bingoB">
            ${g}
        </div>
        <div class="col bingoB">
            ${o}
        </div>
    </div>
</div>`;

let bingoN=
`<div class="col bingo" >
    <div class="col-12 row bingoH">   
        <div class="col arriba">
            <p class="letraBingo">B</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">I</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">N</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">G</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">O</p>
        </div>
    </div>
    <div class="col row">
        <div class="col bingoB">
            ${b}
        </div>
        <div class="col bingoB">
            ${i}
        </div>
        <div class="col bingoB bingob">
            ${n}
        </div>
        <div class="col bingoB">
            ${g}
        </div>
        <div class="col bingoB">
            ${o}
        </div>
    </div>
</div>`;


let bingoG=
`<div class="col bingo" >
    <div class="col-12 row bingoH">   
        <div class="col arriba">
            <p class="letraBingo">B</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">I</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">N</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">G</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">O</p>
        </div>
    </div>
    <div class="col row">
        <div class="col bingoB">
            ${b}
        </div>
        <div class="col bingoB">
            ${i}
        </div>
        <div class="col bingoB">
            ${n}
        </div>
        <div class="col bingoB bingob">
            ${g}
        </div>
        <div class="col bingoB">
            ${o}
        </div>
    </div>
</div>`;


let bingoO=
`<div class="col bingo" >
    <div class="col-12 row bingoH">   
        <div class="col arriba">
            <p class="letraBingo">B</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">I</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">N</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">G</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">O</p>
        </div>
    </div>
    <div class="col row">
        <div class="col bingoB">
            ${b}
        </div>
        <div class="col bingoB">
            ${i}
        </div>
        <div class="col bingoB">
            ${n}
        </div>
        <div class="col bingoB">
            ${g}
        </div>
        <div class="col bingoB bingob">
            ${o}
        </div>
    </div>
</div>`;


b="";
i="";
n="";
g="";
o="";


for(iteracion2=0; iteracion2<5 ; iteracion2++ ){

    if(letraB[iteracion2]==3 || letraB[iteracion2]%5==0){
        b+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraB[iteracion2]}
                </p> 
            </div>            
        </div>`;	
    }else{
        b+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraB[iteracion2]}
                </p> 
            </div>            
        </div>`;
    }

    if(letraI[iteracion2] % 2!==0 && letraI[iteracion2]% 7==0 || letraI[iteracion2] % 27==0){
        i+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraI[iteracion2]}
                </p> 
            </div>  
        </div>`;
    }else{
        i+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraI[iteracion2]}
                </p> 
            </div>  
        </div>`;
    }
    
    if(letraN[iteracion2]% 13==0){
        n+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraN[iteracion2]}
                </p> 
            </div>            
        </div>`;	
    }else{
        n+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraN[iteracion2]}
                </p> 
            </div>            
        </div>`;
    }

    if(letraG[iteracion2]% 17==0 || letraG[iteracion2] % 19==0){
        g+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraG[iteracion2]}
                </p> 
            </div>            
        </div>`;	
    }else{
        g+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraG[iteracion2]}
                </p> 
            </div>            
        </div>`;
    }

    if(letraO[iteracion2]% 7==0 || letraO[iteracion2] % 5==0){
        o+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraO[iteracion2]}
                </p> 
            </div>            
        </div>`;	
    }else{
        o+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraO[iteracion2]}
                </p> 
            </div>            
        </div>`;
    }
}


let bingoX=
`<div class="col bingo" >
    <div class="col-12 row bingoH">   
        <div class="col arriba">
            <p class="letraBingo">B</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">I</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">N</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">G</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">O</p>
        </div>
    </div>
    <div class="col row">
        <div class="col bingoB">
            ${b}
        </div>
        <div class="col bingoB">
            ${i}
        </div>
        <div class="col bingoB">
            ${n}
        </div>
        <div class="col bingoB">
            ${g}
        </div>
        <div class="col bingoB">
            ${o}
        </div>
    </div>
</div>`;


b="";
i="";
n="";
g="";
o="";


for(iteracion2=0; iteracion2<5 ; iteracion2++ ){

    if(letraB[iteracion2]==3 || letraB[iteracion2]%5==0 || letraB[iteracion2]%9==0){
        b+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraB[iteracion2]}
                </p> 
            </div>            
        </div>`;	
    }else{
        b+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraB[iteracion2]}
                </p> 
            </div>            
        </div>`;
    }

    if(letraI[iteracion2] % 2!==0 && letraI[iteracion2]% 7==0 || letraI[iteracion2] % 27==0){
        i+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraI[iteracion2]}
                </p> 
            </div>  
        </div>`;
    }else{
        i+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraI[iteracion2]}
                </p> 
            </div>  
        </div>`;
    }
    
    if(letraN[iteracion2]% 13==0 || letraN[iteracion2]% 11==0 || letraN[iteracion2]% 5==0 ){
        n+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraN[iteracion2]}
                </p> 
            </div>            
        </div>`;	
    }else{
        n+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraN[iteracion2]}
                </p> 
            </div>            
        </div>`;
    }

    if(letraG[iteracion2]% 17==0 || letraG[iteracion2] % 19==0){
        g+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraG[iteracion2]}
                </p> 
            </div>            
        </div>`;	
    }else{
        g+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraG[iteracion2]}
                </p> 
            </div>            
        </div>`;
    }

    if(letraO[iteracion2]% 7==0 || letraO[iteracion2] % 5==0 || letraO[iteracion2] % 23==0){
        o+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo bingob">
                <p class="letraCuadrado">
                    ${letraO[iteracion2]}
                </p> 
            </div>            
        </div>`;	
    }else{
        o+=
        `<div class="col bingoB">
            <div class="col cuadradoBingo">
                <p class="letraCuadrado">
                    ${letraO[iteracion2]}
                </p> 
            </div>            
        </div>`;
    }
}

let bingoXes=
`<div class="col bingo" >
    <div class="col-12 row bingoH">   
        <div class="col arriba">
            <p class="letraBingo">B</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">I</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">N</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">G</p>
        </div>
        <div class="col arriba">
            <p class="letraBingo">O</p>
        </div>
    </div>
    <div class="col row">
        <div class="col bingoB">
            ${b}
        </div>
        <div class="col bingoB">
            ${i}
        </div>
        <div class="col bingoB">
            ${n}
        </div>
        <div class="col bingoB">
            ${g}
        </div>
        <div class="col bingoB">
            ${o}
        </div>
    </div>
</div>`;


let pantalla="";
let almacenar="";


for(iteracion1=0; iteracion1<8; iteracion1++){
    if(iteracion1==1){
        pantalla+=bingoB;
    }else if(iteracion1==2){
        pantalla+=bingoI;
    }else if(iteracion1==3){
        pantalla+=bingoN;
    }else if(iteracion1==4){
        pantalla+=bingoG;
    }else if(iteracion1==5){
        pantalla+=bingoO;
    }else if(iteracion1==6){
        pantalla+=bingoX;
    }else if(iteracion1==7){
        pantalla+=bingoXes;
    }
}

document.getElementById("bingo").innerHTML=pantalla;
