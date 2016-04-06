/*математические действия*/

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divided(a, b) {
    return a / b;
}

/*приведение к числу*/

function parseNumbers(numberString) {
	var numNumbers = parseInt(numberString);
	return numNumbers;
}

/*запоминание кнопки математического действия, которую нажал пользователь*/

var action

function buttonSum () {
	action = sum
}

function buttonSub () {
	action = subtract
}
function buttonDiv () {
	action = divided
}
function buttonMult () {
	action = multiply
}

/* вывод результата */

function result() {
	var a = parseNumbers(document.getElementById("firstData").value);
	var b = parseNumbers(document.getElementById("secondData").value);
	document.getElementById("result").value = action(a, b)
}
	
