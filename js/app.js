//CREANDO VARIABLES
var cero = document.getElementById('0')
var uno = document.getElementById('1')
var dos = document.getElementById('2')
var tres = document.getElementById('3')
var cuatro = document.getElementById('4')
var cinco = document.getElementById('5')
var seis = document.getElementById('6')
var siete = document.getElementById('7')
var ocho = document.getElementById('8')
var nueve = document.getElementById('9')

var on = document.getElementById('on')
var signo = document.getElementById('sign')
var raiz = document.getElementById('raiz')
var mas = document.getElementById('mas')
var menos = document.getElementById('menos')
var por = document.getElementById('por')
var divide = document.getElementById('dividido')
var punto = document.getElementById('punto')
var igual = document.getElementById('igual')

var pantalla = document.getElementById('display')

var valor

cero.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "0"}
    else {pantalla.innerHTML = valor + "0"}
  }
})
uno.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "1"}
    else {pantalla.innerHTML = valor + "1"}
  }
})
dos.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "2"}
    else {pantalla.innerHTML = valor + "2"}
  }
})
tres.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "3"}
    else {pantalla.innerHTML = valor + "3"}
  }
})
cuatro.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "4"}
    else {pantalla.innerHTML = valor + "4"}
  }
})
cinco.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "5"}
    else {pantalla.innerHTML = valor + "5"}
  }
})
seis.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "6"}
    else {pantalla.innerHTML = valor + "6"}
  }
})
siete.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "7"}
    else {pantalla.innerHTML = valor + "7"}
  }
})
ocho.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "8"}
    else {pantalla.innerHTML = valor + "8"}
  }
})
nueve.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0){pantalla.innerHTML = "9"}
    else {pantalla.innerHTML = valor + "9"}
  }
})


function aumenta(tecla){
  tecla.style.transform = "scale(0.9,0.9)";
}
function reduce(tecla){
  tecla.style.transform = "scale(1,1)";
}

/*var teclas = document.getElementsByClassName('tecla');
for (var i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener('mousedown', function(){aumenta(teclas[i])});
  teclas[i].addEventListener('mousedown', function(){reduce(teclas[i])})
}*/

cero.addEventListener('mousedown', function(){aumenta(cero)});
uno.addEventListener('mousedown', function(){aumenta(uno)});
dos.addEventListener('mousedown', function(){aumenta(dos)});
tres.addEventListener('mousedown', function(){aumenta(tres)});
cuatro.addEventListener('mousedown', function(){aumenta(cuatro)});
cinco.addEventListener('mousedown', function(){aumenta(cinco)});
seis.addEventListener('mousedown', function(){aumenta(seis)});
siete.addEventListener('mousedown', function(){aumenta(siete)});
ocho.addEventListener('mousedown', function(){aumenta(ocho)});
nueve.addEventListener('mousedown', function(){aumenta(nueve)});
on.addEventListener('mousedown', function(){aumenta(on)});
signo.addEventListener('mousedown', function(){aumenta(signo)});
raiz.addEventListener('mousedown', function(){aumenta(raiz)});
mas.addEventListener('mousedown', function(){aumenta(mas)});
menos.addEventListener('mousedown', function(){aumenta(menos)});
por.addEventListener('mousedown', function(){aumenta(por)});
divide.addEventListener('mousedown', function(){aumenta(divide)});
punto.addEventListener('mousedown', function(){aumenta(punto)});
igual.addEventListener('mousedown', function(){aumenta(igual)});

cero.addEventListener('mouseup', function(){reduce(cero)});
uno.addEventListener('mouseup', function(){reduce(uno)});
dos.addEventListener('mouseup', function(){reduce(dos)});
tres.addEventListener('mouseup', function(){reduce(tres)});
cuatro.addEventListener('mouseup', function(){reduce(cuatro)});
cinco.addEventListener('mouseup', function(){reduce(cinco)});
seis.addEventListener('mouseup', function(){reduce(seis)});
siete.addEventListener('mouseup', function(){reduce(siete)});
ocho.addEventListener('mouseup', function(){reduce(ocho)});
nueve.addEventListener('mouseup', function(){reduce(nueve)});
on.addEventListener('mouseup', function(){reduce(on)});
signo.addEventListener('mouseup', function(){reduce(signo)});
raiz.addEventListener('mouseup', function(){reduce(raiz)});
mas.addEventListener('mouseup', function(){reduce(mas)});
menos.addEventListener('mouseup', function(){reduce(menos)});
por.addEventListener('mouseup', function(){reduce(por)});
divide.addEventListener('mouseup', function(){reduce(divide)});
punto.addEventListener('mouseup', function(){reduce(punto)});
igual.addEventListener('mouseup', function(){reduce(igual)});
