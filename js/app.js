var op1 = '';
var op2 = '';
var operando = ''
var resultado = '';
var estado = '-' //i - igual; n2 - ingresando numero 2

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
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "0";
    }
    else {
      pantalla.innerHTML = valor + "0"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
})
uno.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "1";
    }
    else {
      pantalla.innerHTML = valor + "1"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
})
dos.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "2";
    }
    else {
      pantalla.innerHTML = valor + "2"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
})
tres.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "3";
    }
    else {
      pantalla.innerHTML = valor + "3"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
})
cuatro.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "4";
    }
    else {
      pantalla.innerHTML = valor + "4"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
})
cinco.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "5";
    }
    else {
      pantalla.innerHTML = valor + "5"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
})
seis.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "6";
    }
    else {
      pantalla.innerHTML = valor + "6"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
})
siete.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "7";
    }
    else {
      pantalla.innerHTML = valor + "7"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
})
ocho.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "8";
    }
    else {
      pantalla.innerHTML = valor + "8"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
})
nueve.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 8){
    if(valor==0 && valor.indexOf('.') == -1){
      pantalla.innerHTML = "9";
    }
    else {
      pantalla.innerHTML = valor + "9"
    }
  }
  if("srmd".indexOf(estado)!=-1)
    estado = 'n2';
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
  operando = '';
  resultado = '';
  estado = '-';
})

//funccion boton punto
punto.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor.length < 7 && valor.indexOf('.') == -1){
    if(valor==''){
      pantalla.innerHTML = valor + "0."
    }
    else{
      pantalla.innerHTML = valor + "."
    }
    if("srmd".indexOf(estado)!=-1)
      estado = 'n2';
  }
})

//funcion signo
signo.addEventListener('click', function(){
  valor = pantalla.innerText
  if(valor!=0){
    if(valor.indexOf('-') == -1 && valor.length < 8){
      pantalla.innerHTML = "-" + valor
    }
    else {
      pantalla.innerHTML = valor.replace('-','')
    }
  }
})

//funciones botones operadores
mas.addEventListener('click', function(){
  if(estado != 'n2'){
    if(estado == 'i'){
      op1 = resultado;
    }
    else{
      valor = pantalla.innerText
      if(valor!=''){
          op1 = pantalla.innerText;
      }
    }
    operando = '+';
    estado = 's'
    pantalla.innerHTML = '';
  }
})
menos.addEventListener('click', function(){
  if(estado != 'n2'){
    if(estado == 'i'){
      op1 = resultado;
    }
    else{
      valor = pantalla.innerText
      if(valor!=''){
          op1 = pantalla.innerText;
      }
    }
    operando = '-';
    estado = 'r'
    pantalla.innerHTML = '';
  }
})
por.addEventListener('click', function(){
  if(estado != 'n2'){
    if(estado == 'i'){
      op1 = resultado;
    }
    else{
      valor = pantalla.innerText
      if(valor!=''){
          op1 = pantalla.innerText;
      }
    }
    operando = '*';
    estado = 'm'
    pantalla.innerHTML = '';
  }
})
divide.addEventListener('click', function(){
  if(estado != 'n2'){
    if(estado == 'i'){
      op1 = resultado;
    }
    else{
      valor = pantalla.innerText
      if(valor!=''){
          op1 = pantalla.innerText;
      }
    }
    operando = '/';
    estado = 'd'
    pantalla.innerHTML = '';
  }
})

//funcion igual
igual.addEventListener('click', function(){
  valor = pantalla.innerText
  if(estado == 'i'){
    op1 = valor
  }
  else{
    if(valor!=''){
        op2 = pantalla.innerText;
    }
    else {
      op2 = "0";
    }
  }
  operar();
  resultado = resultado + ''
  if(resultado.length<=8)
    pantalla.innerHTML = resultado;
  else
    pantalla.innerHTML = resultado.substring(0, 8);
  estado = 'i'
})

//function operacion
function operar(){
  if(op1.indexOf('.') == op1.length-1){
    op1.replace('.','');
  }
  if(op2.indexOf('.') == op2.length-1){
    op2.replace('.','');
  }
  switch (operando) {
    case '+':
      resultado = (parseFloat(op1)*10 + parseFloat(op2)*10)/10;
    break;
    case '-':
      resultado = (op1*10 - op2*10)/10;
    break;
    case '*':
      resultado = op1 * op2;
    break;
    case '/':
      if(op2!=0)
        resultado = op1 / op2;
      else
        resultado = 'DIV/0'
    break;
    default:
        resultado = pantalla.innerText
  }
}
