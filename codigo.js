console.log("funcionando");

//Variables de operaciones
var operandoa;
var operandob;
var operacion;

//Resultado de operaciones
const resul = document.getElementById("resultado");

//Primera línea calculadora
const reset = document.getElementById("reset");
const raiz = document.getElementById("raiz");
const potencia = document.getElementById("potencia");
const division = document.getElementById("division");

//Segunda línea calculadora
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const multi = document.getElementById("multi");

//Tercera línea calculadora
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const resta = document.getElementById("resta");

//Cuarta línea calculadora
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const suma = document.getElementById("suma");

//Quinta línea calculadora
const negativo = document.getElementById("negativo");
const cero = document.getElementById("cero");
const decimal = document.getElementById("decimal");
const igual = document.getElementById("igual");

//Funciones primera línea

reset.onclick = function(){
    resetear()
}

raiz.onclick = function(){
    operandoa = resul.textContent;
    operacion = "√";
    limpiar();
}

potencia.onclick = function(){
    operandoa = resul.textContent;
    operacion = "^";
    limpiar();
}

division.onclick = function(){
    operandoa = resul.textContent;
    operacion = "/";
    limpiar();
}

//Funciones segunda línea

siete.onclick = function(){
    resul.textContent = resul.textContent + "7";
}

ocho.onclick = function(){
    resul.textContent = resul.textContent + "8";
}

nueve.onclick = function(){
    resul.textContent = resul.textContent + "9";
}

multi.onclick = function(){
    operandoa = resul.textContent;
    operacion = "*";
    limpiar();
}

//Funciones tercera línea

cuatro.onclick = function(){
    resul.textContent = resul.textContent + "4";
}

cinco.onclick = function(){
    resul.textContent = resul.textContent + "5";
}

seis.onclick = function(){
    resul.textContent = resul.textContent + "6";
}

resta.onclick = function(){
    operandoa = resul.textContent;
    operacion = "-";
    limpiar();
}

//Funciones cuarta línea

uno.onclick = function(){
    resul.textContent = resul.textContent + "1";
}

dos.onclick = function(){
    resul.textContent = resul.textContent + "2";
}

tres.onclick = function(){
    resul.textContent = resul.textContent + "3";
}

suma.onclick = function(){
    operandoa = resul.textContent;
    operacion = "+";
    limpiar();
}

//Funciones quinta línea

negativo.onclick = function(){
    resul.textContent = resul.textContent * -1;
}

cero.onclick = function(){
    resul.textContent = resul.textContent + "0";
}

decimal.onclick = function(){
    resul.textContent = resul.textContent + ".";
}

igual.onclick = function(){
    operandob = resul.textContent;
    resolver();
}

//Funciones operatorias
function limpiar() {
    resul.textContent = "";
}

function resetear() {
    resul.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch(operacion) {
        case "√":
            res = Math.sqrt(operandoa)
            break;

        case "^":
            res = parseFloat(operandoa) ** parseFloat(operandob);
            break;
        
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

    }
    resetear();
    resultado.textContent = res;
}