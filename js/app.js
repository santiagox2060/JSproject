var calculadora = {

  op1:'',op2:'',operando:'',resultado:'',valor:'',estado:'-', //i - igual; n2 - ingresando numero 2
  cero:'',uno:'',dos:'',tres:'',cuatro:'',cinco:'',seis:'',siete:'',ocho:'',nueve:'',
  on:'',signo:'',raiz:'',mas:'',menos:'',por:'',divide:'',punto:'',igual:'',
  pantalla:'',

  inicializar: function(){
    this.op1 = '';
    this.op2 = '';
    this.operando = ''
    this.resultado = '';
    this.valor = '';
    this.estado = '-';
    //teclas numericas
    this.cero = document.getElementById('0');
    this.uno = document.getElementById('1');
    this.dos = document.getElementById('2');
    this.tres = document.getElementById('3');
    this.cuatro = document.getElementById('4');
    this.cinco = document.getElementById('5');
    this.seis = document.getElementById('6');
    this.siete = document.getElementById('7');
    this.ocho = document.getElementById('8');
    this.nueve = document.getElementById('9');
    //teclas funciones
    this.on = document.getElementById('on');
    this.signo = document.getElementById('sign');
    this.raiz = document.getElementById('raiz');
    this.mas = document.getElementById('mas');
    this.menos = document.getElementById('menos');
    this.por = document.getElementById('por');
    this.divide = document.getElementById('dividido');
    this.punto = document.getElementById('punto');
    this.igual = document.getElementById('igual');
    //pantalla
    this.pantalla = document.getElementById('display');
    this.funcionalidadNumeros();
    this.efectoTeclas();
    this.funcionalidadTeclas();
    this.cero.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "0";
        }
        else {
          this.pantalla.innerHTML = this.valor + "0"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
  },
  funcionalidadNumeros: function(){

    this.uno.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "1";
        }
        else {
          this.pantalla.innerHTML = this.valor + "1"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
    this.dos.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "2";
        }
        else {
          this.pantalla.innerHTML = this.valor + "2"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
    this.tres.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "3";
        }
        else {
          this.pantalla.innerHTML = this.valor + "3"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
    this.cuatro.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "4";
        }
        else {
          this.pantalla.innerHTML = this.valor + "4"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
    this.cinco.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "5";
        }
        else {
          this.pantalla.innerHTML = this.valor + "5"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
    this.seis.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "6";
        }
        else {
          this.pantalla.innerHTML = this.valor + "6"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
    this.siete.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "7";
        }
        else {
          this.pantalla.innerHTML = this.valor + "7"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
    this.ocho.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "8";
        }
        else {
          this.pantalla.innerHTML = this.valor + "8"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
    this.nueve.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 8){
        if(this.valor==0 && this.valor.indexOf('.') == -1){
          this.pantalla.innerHTML = "9";
        }
        else {
          this.pantalla.innerHTML = this.valor + "9"
        }
      }
      if("srmd".indexOf(this.estado)!=-1)
        this.estado = 'n2';
    })
  },
  //funciones aumentar y reducir efecto boton
  aumenta: function (tecla){
    tecla.style.transform = "scale(0.9,0.9)";
  },
  reduce: function (tecla){
    tecla.style.transform = "scale(1,1)";
  },
  efectoTeclas: function(){
    //efecto al presionar y soltar los botones
    this.cero.addEventListener('mousedown', function(){this.aumenta(this.cero)});
    this.uno.addEventListener('mousedown', function(){this.aumenta(this.uno)});
    this.dos.addEventListener('mousedown', function(){this.aumenta(this.dos)});
    this.tres.addEventListener('mousedown', function(){this.aumenta(this.tres)});
    this.cuatro.addEventListener('mousedown', function(){this.aumenta(this.cuatro)});
    this.cinco.addEventListener('mousedown', function(){this.aumenta(this.cinco)});
    this.seis.addEventListener('mousedown', function(){this.aumenta(this.seis)});
    this.siete.addEventListener('mousedown', function(){this.aumenta(this.siete)});
    this.ocho.addEventListener('mousedown', function(){this.aumenta(this.ocho)});
    this.nueve.addEventListener('mousedown', function(){this.aumenta(this.nueve)});
    this.on.addEventListener('mousedown', function(){this.aumenta(this.on)});
    this.signo.addEventListener('mousedown', function(){this.aumenta(this.signo)});
    this.raiz.addEventListener('mousedown', function(){this.aumenta(this.raiz)});
    this.mas.addEventListener('mousedown', function(){this.aumenta(this.mas)});
    this.menos.addEventListener('mousedown', function(){this.aumenta(this.menos)});
    this.por.addEventListener('mousedown', function(){this.aumenta(this.por)});
    this.divide.addEventListener('mousedown', function(){this.aumenta(this.divide)});
    this.punto.addEventListener('mousedown', function(){this.aumenta(this.punto)});
    this.igual.addEventListener('mousedown', function(){this.aumenta(this.igual)});

    this.cero.addEventListener('mouseup', function(){this.reduce(this.cero)});
    this.uno.addEventListener('mouseup', function(){this.reduce(this.uno)});
    this.dos.addEventListener('mouseup', function(){this.reduce(this.dos)});
    this.tres.addEventListener('mouseup', function(){this.reduce(this.tres)});
    this.cuatro.addEventListener('mouseup', function(){this.reduce(this.cuatro)});
    this.cinco.addEventListener('mouseup', function(){this.reduce(this.cinco)});
    this.seis.addEventListener('mouseup', function(){this.reduce(this.seis)});
    this.siete.addEventListener('mouseup', function(){this.reduce(this.siete)});
    this.ocho.addEventListener('mouseup', function(){this.reduce(this.ocho)});
    this.nueve.addEventListener('mouseup', function(){this.reduce(this.nueve)});
    this.on.addEventListener('mouseup', function(){this.reduce(this.on)});
    this.signo.addEventListener('mouseup', function(){this.reduce(this.signo)});
    this.raiz.addEventListener('mouseup', function(){this.reduce(this.raiz)});
    this.mas.addEventListener('mouseup', function(){this.reduce(this.mas)});
    this.menos.addEventListener('mouseup', function(){this.reduce(this.menos)});
    this.por.addEventListener('mouseup', function(){this.reduce(this.por)});
    this.divide.addEventListener('mouseup', function(){this.reduce(this.divide)});
    this.punto.addEventListener('mouseup', function(){this.reduce(this.punto)});
    this.igual.addEventListener('mouseup', function(){this.reduce(this.igual)});
  },
  funcionalidadTeclas: function(){
    //funcion boton on/c
    this.on.addEventListener('click', function(){
      this.pantalla.innerHTML = '0';
      this.op1 = '';
      this.op2 = '';
      this.operando = '';
      this.resultado = '';
      this.estado = '-';
    })

    //funccion boton punto
    this.punto.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor.length < 7 && this.valor.indexOf('.') == -1){
        if(this.valor==''){
          this.pantalla.innerHTML = this.valor + "0."
        }
        else{
          this.pantalla.innerHTML = this.valor + "."
        }
        if("srmd".indexOf(this.estado)!=-1)
          this.estado = 'n2';
      }
    })

    //funcion signo
    this.signo.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.valor!=0){
        if(this.valor.indexOf('-') == -1 && this.valor.length < 8){
          this.pantalla.innerHTML = "-" + this.valor
        }
        else {
          this.pantalla.innerHTML = this.valor.replace('-','')
        }
      }
    })

    //funciones botones operadores
    this.mas.addEventListener('click', function(){
      if(this.estado != 'n2'){
        if(this.estado == 'i'){
          this.op1 = this.resultado;
        }
        else{
          this.valor = this.pantalla.innerText
          if(this.valor!=''){
              this.op1 = this.pantalla.innerText;
          }
        }
        this.operando = '+';
        this.estado = 's'
        this.pantalla.innerHTML = '';
      }
    })
    this.menos.addEventListener('click', function(){
      if(this.estado != 'n2'){
        if(this.estado == 'i'){
          this.op1 = this.resultado;
        }
        else{
          this.valor = this.pantalla.innerText
          if(this.valor!=''){
              this.op1 = this.pantalla.innerText;
          }
        }
        this.operando = '-';
        this.estado = 'r'
        this.pantalla.innerHTML = '';
      }
    })
    this.por.addEventListener('click', function(){
      if(this.estado != 'n2'){
        if(this.estado == 'i'){
          this.op1 =this. resultado;
        }
        else{
          this.valor = this.pantalla.innerText
          if(this.valor!=''){
              this.op1 = this.pantalla.innerText;
          }
        }
        this.operando = '*';
        this.estado = 'm'
        this.pantalla.innerHTML = '';
      }
    })
    this.divide.addEventListener('click', function(){
      if(this.estado != 'n2'){
        if(this.estado == 'i'){
          this.op1 = this.resultado;
        }
        else{
          this.valor = this.pantalla.innerText
          if(this.valor!=''){
              this.op1 = this.pantalla.innerText;
          }
        }
        this.operando = '/';
        this.estado = 'd'
        this.pantalla.innerHTML = '';
      }
    })

    //funcion igual
    this.igual.addEventListener('click', function(){
      this.valor = this.pantalla.innerText
      if(this.estado == 'i'){
        this.op1 = this.valor
      }
      else{
        if(this.valor!=''){
            this.op2 = this.pantalla.innerText;
        }
        else {
          this.op2 = "0";
        }
      }
      this.operar();
      this.resultado = this.resultado + ''
      if(this.resultado.length<=8)
        this.pantalla.innerHTML = this.resultado;
      else
        this.pantalla.innerHTML = this.resultado.substring(0, 8);
      this.estado = 'i'
    })
  },
  //function operacion
  operar: function (){
    if(this.op1.indexOf('.') == this.op1.length-1){
      this.op1.replace('.','');
    }
    if(this.op2.indexOf('.') == this.op2.length-1){
      this.op2.replace('.','');
    }
    switch (this.operando) {
      case '+':
        this.resultado = (parseFloat(this.op1)*10 + parseFloat(this.op2)*10)/10;
      break;
      case '-':
        this.resultado = (this.op1*10 - this.op2*10)/10;
      break;
      case '*':
        this.resultado = this.op1 * this.op2;
      break;
      case '/':
        if(this.op2!=0)
          this.resultado = this.op1 / this.op2;
        else
          this.resultado = 'DIV/0'
      break;
      default:
          this.resultado = this.pantalla.innerText
    }
  }
}

calculadora.inicializar()

//ya no se usa
/*
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
*/
