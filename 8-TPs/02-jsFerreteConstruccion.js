/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let anchoTerreno;
	let largoTerreno;
	let alambreNecesario;

	anchoTerreno = document.getElementById('txtIdAncho').value;
	largoTerreno = document.getElementById('txtIdLargo').value;

	anchoTerreno = parseFloat(anchoTerreno);
	largoTerreno = parseFloat(largoTerreno);

	alambreNecesario = ((anchoTerreno + largoTerreno) * 2) * 3;

	alert("Se necesitan " + alambreNecesario + " metros de alambre,");
}
function Circulo () 
{
	let radioTerreno;
	let alambreNecesario;

	radioTerreno = document.getElementById('txtIdRadio').value;
	radioTerreno = parseFloat(radioTerreno);

	alambreNecesario = ((radioTerreno * 2) * 3.14) * 3;
	alert("Se necesitan " + alambreNecesario + " metros de alambre.");
}
function Materiales () 
{
	let anchoTerreno;
	let largoTerreno;
	let cementoNecesario;
	let calNecesario;

	anchoTerreno = document.getElementById('txtIdAncho').value;
	largoTerreno = document.getElementById('txtIdLargo').value;

	anchoTerreno = parseFloat(anchoTerreno);
	largoTerreno = parseFloat(largoTerreno);

	cementoNecesario = (anchoTerreno * largoTerreno) * 2;
	calNecesario = (anchoTerreno * largoTerreno) * 3;

	alert("Se necesitan " cementoNecesario + " bolsas de cemento y " + calNecesario + " bolsas de cal.");
}	
