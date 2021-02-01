/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = numero1 + numero2;
	alert("La suma es: " + resultado);
}

