let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

function imprimeConsola() {
  console.log('EL botón fue clicado');
}

function promptUsuario() {
  let ciudadBrasil = prompt('¿Cuál es tu ciudad favorita de Brasil?');
  alert(`Estuve en ${ciudadBrasil} y me acorde de ti`);
}

function muestraUnAlert() {
  alert('Yo amo JavaScript');
}

function suma() {
  let numero1 = parseInt(prompt('Indica un número'));
  let numero2 = parseInt(prompt('Indica otro número'));
  let suma = numero1 + numero2;
  alert(`La suma es ${suma}`);
}
