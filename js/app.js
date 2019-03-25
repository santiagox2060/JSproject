var op1 = '';
var op2 = '';
var operando = ''
var resultado = '';
var bandera = false;

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

//funcion botones numericos
cero.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "0"; bandera = false}
    else {pantalla.innerHTML = valor + "0"}
  }
})
uno.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "1"; bandera = false}
    else {pantalla.innerHTML = valor + "1"}
  }
})
dos.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "2"; bandera = false}
    else {pantalla.innerHTML = valor + "2"}
  }
})
tres.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "3"; bandera = false}
    else {pantalla.innerHTML = valor + "3"}
  }
})
cuatro.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "4"; bandera = false}
    else {pantalla.innerHTML = valor + "4"}
  }
})
cinco.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "5"; bandera = false}
    else {pantalla.innerHTML = valor + "5"}
  }
})
seis.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "6"; bandera = false}
    else {pantalla.innerHTML = valor + "6"}
  }
})
siete.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "7"; bandera = false}
    else {pantalla.innerHTML = valor + "7"}
  }
})
ocho.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "8"; bandera = false}
    else {pantalla.innerHTML = valor + "8"}
  }
})
nueve.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if((valor==0 && valor.indexOf('.') == -1) || bandera){pantalla.innerHTML = "9"; bandera = false}
    else {pantalla.innerHTML = valor + "9"}
  }
})

//funciones aumentar y reducir efecto boton
function aumenta(tecla){
  tecla.style.transform = "scale(0.9,0.9)";
}
function reduce(tecla){
  tecla.style.transform = "scale(1,1)";
}

//efecto al presionar y soltar los botones
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

//funcion boton on/c
on.addEventListener('click', function(){
  pantalla.innerHTML = '0';
  op1 = '';
  op2 = '';
  operando = ''
  resultado = '';
})

//funccion boton punto
punto.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 7 && valor.indexOf('.') == -1){
    pantalla.innerHTML = valor + "."
  }
  if(valor=='') pantalla.innerHTML = valor + "0."
})

//funcion signo
signo.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8 && valor!=0){
    if(valor.indexOf('-') == -1){pantalla.innerHTML = "-" + valor}
    else {pantalla.innerHTML = valor.replace('-','')}
  }
})

//funciones botones operadores
mas.addEventListener('click', function(){
  if(op1=='') op1 = pantalla.innerText;
  operando = '+';
  pantalla.innerHTML = '';
  bandera = true;
})
menos.addEventListener('click', function(){
  if(op1=='') op1 = pantalla.innerText;
  operando = '-';
  pantalla.innerHTML = '';
  bandera = true;
})
por.addEventListener('click', function(){
  if(op1=='') op1 = pantalla.innerText;
  operando = '*';
  pantalla.innerHTML = '';
  bandera = true;
})
divide.addEventListener('click', function(){
  if(op1=='') op1 = pantalla.innerText;
  operando = '/';
  pantalla.innerHTML = '';
  bandera = true;
})

//funcion igual
igual.addEventListener('click', function(){
  op2 = pantalla.innerText;
  operar();
  resultado += ''
  if(resultado.length<=8)
    pantalla.innerHTML = resultado;
  else
    pantalla.innerHTML = resultado.substring(0, 8 );
})

//function operacion
function operar(){
  if(op1.indexOf('.') == op1.length-1) op1.replace('.','');
  if(op2.indexOf('.') == op2.length-1) op2.replace('.','');
  switch (operando) {
    case '+':
      resultado = parseFloat(op1) + parseFloat(op2);
    break;
    case '-':
      resultado = op1 - op2;
    break;
    case '*':
      resultado = op1 * op2;
    break;
    case '/':
      if(op2!=0)
        resultado = op1 / op2;
      else
        resultado = 'ERROR'
    break;
    default:
        resultado = pantalla.innerText
  }
  op1 = ''+resultado;
  bandera = true;
}
