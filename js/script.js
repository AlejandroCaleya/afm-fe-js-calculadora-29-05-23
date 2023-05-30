let temporal = 0;
let operacion = '';
let memori = 0;
var input = document.getElementById('inputID');

function add(num) {
  if (num == 0) {
    if (input.value[input.value.length - 1] != '0' || input.value.length > 1) {
      input.value = input.value + num;
    }
  } else if (num == '.') {
    if (input.value[input.value.length - 1] != '.' && input.value != '') {
      input.value = input.value + num;
    }
  } else {
    input.value = input.value + num;
  }
}

function operacionFunction(operador) {
  operacion = operador;
  temporal = input.value;
  input.value = '';
}

function igual() {
  if (operacion != '') {
    input.value = eval(temporal + operacion + input.value);
  }
}

function inverso() {
  input.value = input.value * -1;
}

function porciento() {
  input.value = input.value / 100;
}

function cuadrado() {
  input.value = input.value ** 2;
}

function cubo() {
  input.value = input.value ** 3;
}

function raiz() {
  input.value = input.value ** 0.5;
}

function pi() {
  input.value = 3.14596;
}

function cleanInput() {
  if (input.value != '') {
    input.value = '';
  } else {
    temporal = 0;
    operacion = '';
  }
}

function memoriReset() {
    memori = 0;
    let M = document.getElementById('M');
    M.style.color = '';
    // input.style.border= "none";
}

function memoriSigno(signo) {
    memori = eval(memori + signo + input.value);
    if (memori !== 0) {
      let M = document.getElementById('M');
      M.style.color = 'red';
    }
}

function memoriRecall() {
    input.value = memori;
}




