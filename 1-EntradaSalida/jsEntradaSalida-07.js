/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let resultado;

	numero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
	resultado = numero1 + numero2;

	alert("La suma es: " + resultado);	
}

function restar()
{
	let numero1;
	let numero2;
	let resultado;

	numero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
	resultado = numero1 - numero2;

	alert("La resta es: " + resultado);
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let resultado;

	numero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
	resultado = numero1 * numero2;

	alert("la multiplicacion es: " + resultado);
}

function dividir()
{
	let numero1;
	let numero2;
	let resultado;

	numero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
	resultado = numero1 / numero2;

	alert("La division es: " + resultado);
}

