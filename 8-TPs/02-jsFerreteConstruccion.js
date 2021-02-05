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

	alambreNecesario = ((radioTerreno * 2) * Math.PI) * 3;
	alert("Se necesitan " + alambreNecesario + " metros de alambre.");
}
function Materiales () 
{
	let largoTerreno;
	let anchoTerreno;
	let cemento;
	let cal;
	let perimetro;

	anchoTerreno = document.getElementById('txtIdAncho').value;
	largoTerreno = document.getElementById('txtIdLargo').value;

	anchoTerreno = parseFloat(anchoTerreno);
	largoTerreno = parseFloat(largoTerreno);

	perimetro = anchoTerreno * largoTerreno;
	cemento = perimetro * 2;
	cal = perimetro * 3;

	alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal");
}
