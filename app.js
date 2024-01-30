let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   if (numeroDeUsuario === numeroSecreto){

    asignarTextoElemento('p',`Acertastes el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

   }else if(numeroDeUsuario>numeroSecreto){

    asignarTextoElemento('p','El numero secreto es menor');

   } else{

    asignarTextoElemento('p','El numero es mayor');

   }
   intentos++;
   limpiarCaja();
     return;
}

function limpiarCaja(){
document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    return  Math.floor(Math.random()*10)+1;
}

function reiniciarJuego() {
    window.location.reload();
}

asignarTextoElemento('h1', 'Juego Numero Secreto');
asignarTextoElemento('p', 'Indique un numero del 1 al 10');
