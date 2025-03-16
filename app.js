let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', '¡Ya se sortearon los números posibles!');
    return;
  } else {
    if(listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `¡Felicidades! ¡Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);

    document.getElementById('reiniciar').removeAttribute('disabled');
    //document.getElementById('reiniciar').disable = false;
    
  }  else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    }else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarInput();
  }
  
  return ;
}

function limpiarInput() {
  document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto!'); 
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);  
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  console.log(numeroSecreto);
}

function reiniciarJuego() {
  limpiarInput();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales(); 