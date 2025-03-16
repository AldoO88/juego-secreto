function mostrarMensaje() {
  console.log('Hola mundo');
}

function mostrarMensajeConParametro(nombre) {
  console.log(`Hola ${nombre}`);
}

function calcularDobleNumero(numero) {
  return numero * 2;
}

function calcularPromedio(numero1, numero2, numero3) {
  return (numero1 + numero2 + numero3) / 3;
}

function calcularNumeroMayor(numero1, numero2) {
  return numero1 > numero2 ? numero1 : numero2;
}

function multiplicarMismoNumero(numero) {
  return numero * numero;
}


mostrarMensaje();
mostrarMensajeConParametro('Juan');
console.log(calcularDobleNumero(5));
console.log(calcularPromedio(5, 10, 15));
console.log(calcularNumeroMayor(5, 10));
console.log(multiplicarMismoNumero(5));


