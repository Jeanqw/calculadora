var numString = "";
var numString2 = "";
var operation = "";
var calculo = "";

function addNumber(num) {
    numString = numString + num;
    document.getElementById("display").value = numString
}

function addOperation(op) {
    if (operation == "") {
        operation = op;
        numString2 = numString;
        numString = ""
    }
    else {
        botaoIgual()
        operation = op;
        numString2 = eval(calculo)
        numString = ""
    }

}

function botaoIgual() {
    calculo = eval(numString2 + operation + numString)
    document.getElementById("display").value = calculo
}

function limpar() {
    numString = "";
    numString2 = "";
    operation = "";
    calculo = "";
    document.getElementById("display").value = ""
}