/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
let intento;
let diferencia;

function comenzar()
{
	
	numeroSecreto = (Math.random()*99) + 1;
	numeroSecreto = Math.round(numeroSecreto);
	contadorIntentos = 0;
	contadorIntentos = parseInt(contadorIntentos);

}

function verificar()
{
	intento = document.getElementById('txtIdNumero').value;

	contadorIntentos = contadorIntentos + 1;

	if (intento > numeroSecreto) 
	{
		diferencia = intento - numeroSecreto;
		alert("Se paso por " + diferencia);

	}
	if (intento < numeroSecreto)
	{
		diferencia = numeroSecreto - intento;
		alert("Te faltaron " + diferencia);
	}
	if(intento == numeroSecreto)
	{
		alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos")
	}
	
}