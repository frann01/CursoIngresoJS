function mostrar()
{
	var alturaIngresada;
	var sexoIngresado;
	var contadorJugadores=0;
	var acumuladorAlturas=0;
	var alturaMinima;
	var sexoAlturaMin;
	var mujeres190=0;
	var promedioAlturas;

	while(contadorJugadores<5)
	{
		alturaIngresada = prompt("Ingrese la altura");
		alturaIngresada = parseInt(alturaIngresada);
		while(alturaIngresada >250 || alturaIngresada < 0)
		{
			alturaIngresada = prompt("Ingrese la altura");
			alturaIngresada = parseInt(alturaIngresada);
		}
		acumuladorAlturas=acumuladorAlturas+ alturaIngresada;

		sexoIngresado = prompt("ingrese f ó m.");
		sexoIngresado = sexoIngresado.toLowerCase();

		while(sexoIngresado != "f" && sexoIngresado!= "m") 
		{
			sexoIngresado = prompt("ingrese f ó m.");
		}

		if(contadorJugadores==0 || alturaIngresada< alturaMinima)
		{
			alturaMinima= alturaIngresada;
			sexoAlturaMin= sexoIngresado;
		}

		if(sexoIngresado= 'f')
		{
			if(alturaIngresada > 190)
			{
				mujeres190++;
			}
		}

		contadorJugadores++;
	}
	promedioAlturas= acumuladorAlturas / 5;

	document.write("El promedio de altura es de "+ promedioAlturas+"<br>");
	document.write("La altura mas baja es de  "+ alturaMinima+" y su sexo es "+sexoAlturaMin+"<br>");
	document.write(" La cantidad de mujeres que su altura supere los 190 centimetros es "+ mujeres190+"<br>");
}
