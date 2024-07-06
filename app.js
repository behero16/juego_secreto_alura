let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;

function asignarTextoElemento(etiqueta, texto) {
   let elementoHTML = document.querySelector(etiqueta);
   elementoHTML.innerHTML = texto;
}

function verificarIntento() {
   //alert('click desde el botón intentar');
   let numeroDeUsuario = parseInt(
      document.getElementById('valorUsuario').value
   );
   console.log('Número de intentos: ', intentos);

   if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento(
         'p',
         `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`
      );
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento('p', 'El número secreto es menor');
      } else {
         asignarTextoElemento('p', 'El número secreto es mayor');
      }
      limpiarInput();
      intentos++;
   }
}

function condicionesIniciales() {
   asignarTextoElemento('h1', 'Juego del número secreto');
   asignarTextoElemento('p', `Elije un número del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   console.log(listaNumerosSorteados);
   console.log('Numero secreto = ', numeroSecreto);
   intentos = 1;
}

function reiniciarJuego() {
   // Limpiar caja
   limpiarInput();
   condicionesIniciales();
   //Deshabilitar boton nuevamente
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarInput() {
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
   console.log('El nuevo número generado es: ', numeroGenerado);
   // Si el número esta en la lista
   if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p', 'ya se sortearon todos los números');
   } else {
      if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
      } else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }
}

condicionesIniciales();
