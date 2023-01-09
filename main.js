const textoIngresado = document.querySelector('#texto');
const  mostraTextoEncriptado = document.querySelector('#textResult');

//botones
const botonEncriptar = document.querySelector('#encriptar'); 
const botonDesencriptar = document.querySelector('#desencriptar');
const botonCopiar = document.querySelector('#copiar');

function encriptar() {

  //el metodo toLowerCase devuleve los valores en minisculas de la cadena que realiza la llamada
  let texto = textoIngresado.value.toLowerCase();
  //reemplazamos las letras se usa /e/ para indicar  si esta entes o despues 
  let textoEncriptado = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/o/gi, 'ober').replace(/a/gi, 'ai').replace(/u/gi, 'ufat');

  document.querySelector('.muñeco').style.display = 'none';

  document.querySelector('.informativo').style.display = 'none';

  document.querySelector('.informativo2').style.display = 'none';

  document.querySelector('.container-ms-encriptado').style.display = 'block';

  mostraTextoEncriptado.style.display = 'block';

  mostraTextoEncriptado.value = textoEncriptado;

  botonCopiar.style.display = 'block';

  document.querySelector('#texto').value = '';
}

function desencriptar() {

  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado.replace('enter', 'e').replace('imes', 'i').replace('ober', 'o').replace('ai', 'a').replace('ufat', 'u');

  document.querySelector('.muñeco').style.display = 'none';

  document.querySelector('.informativo').style.display = 'none';

  document.querySelector('.informativo2').style.display = 'none';

  document.querySelector('.container-ms-encriptado').style.display = 'block';

  mostraTextoEncriptado.style.display = 'block';

  mostraTextoEncriptado.value = texto;

  botonCopiar.style.display = 'block';

  document.querySelector('#texto').value = '';
}

function copiar() {
  let textoEncriptado = mostraTextoEncriptado.value;
  mostraTextoEncriptado.value = '';
  navigator.clipboard.writeText(textoEncriptado);
}

botonEncriptar.onclick =  encriptar;

botonDesencriptar.onclick = desencriptar;

botonCopiar.onclick = copiar;