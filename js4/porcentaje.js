function porcentaje(){
    let numero = document.getElementById('n1').value;
    let porcentaje;
    let rporcentaje;

    if(numero == ""){
        document.getElementById(`porcentaje`).innerHTML = '<div>Por favor, rellene los espacios.</div>';
        return false
    }else{

        numero = parseInt(numero)
    
      porcentaje= numero / 100;

      rporcentaje = `el porcentaje es: ${porcentaje} </br>`;

      document.getElementById(`porcentaje`).innerHTML = rporcentaje;
 
      return false;

    }
}