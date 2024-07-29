function saludar(){
    let saludo = document.getElementById('txtSaludo').value;

    if(saludo == ""){
    document.getElementById('saludo').innerHTML= '<div> rellene los espacios </div>'; 

    return false
}else{
    document.getElementById('saludo').innerHTML= '<div> hola '+saludo+'</div>';
    return false
}
}