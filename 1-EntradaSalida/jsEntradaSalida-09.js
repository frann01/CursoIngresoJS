/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldoInt;
	let resultado;

	sueldoInt = parseFloat(document.getElementById("txtIdSueldo").value);

	resultado = sueldoInt + (sueldoInt * 0.1);
	
	document.getElementById("txtIdResultado").value = resultado;
}
