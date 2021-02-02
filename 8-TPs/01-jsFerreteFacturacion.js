/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let resulatado;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = precioUno + precioDos + precioTres;
	alert("La suma es " + resultado);

}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let resulatado;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = (precioUno + precioDos + precioTres) / 3;
	alert("El promedio es " + resultado);
}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let resulatado;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = precioUno + precioDos + precioTres;
	resultado = resultado + (resultado * 0.21);
	
	alert("Elprecio final es " + resultado);
}