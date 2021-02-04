/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaIng;
	let temperaturaCambiada;


	temperaturaIng = document.getElementById('txtIdTemperatura').value;
	temperaturaIng = parseFloat(temperaturaIng);

	temperaturaCambiada = (temperaturaIng - 32) *(5/9);

	alert(temperaturaIng + " grados fahrenheit son " + temperaturaCambiada + " grados centigrados");
}

function CentigradosFahrenheit () 
{
	let temperaturaIng;
	let temperaturaCambiada;


	temperaturaIng = document.getElementById('txtIdTemperatura').value;
	temperaturaIng = parseFloat(temperaturaIng);

	temperaturaCambiada = (temperaturaIng * 9/5) + 32;

	alert(temperaturaIng + " centigrados son " + temperaturaCambiada + " grados fahrenheit");


}
