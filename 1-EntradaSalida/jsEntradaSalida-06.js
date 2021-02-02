/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parsefloat(numero1);
	numero2 = parsefloat(numero2);

	let resultado;

	resultado = numero1 + numero2;
	
	alert("La suma es: " + resultado);
}

