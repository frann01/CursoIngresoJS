/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeInt;
	let resultado;

	importeInt = document.getElementById("txtIdImporte").value;
	importeInt = parseInt(importeInt);

	resultado = importeInt - (importeInt * 0.25);
	
	document.getElementById("txtIdResultado").value = resultado;
}

