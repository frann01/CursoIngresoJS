function mostrar()
{
	var respuesta=true;
	var letraIngresada;
	var numeroIngresado;
	var cantidadPares=0;
	var cantidaImpares=0;
	var cantidadCeros=0;
	var acumuladorPositivos=0;
	var cantidadPositivos=0;
	var acumuladorNegativos=0;
	var banderaPrimero=true;
	var Minimo;
	var Maximo;
	var letraMinimo;
	var letraMaximo;
	var promedioPositivos;


	while(respuesta==true)
	{
		letraIngresada= prompt("Ingrese una letra");

		numeroIngresado= prompt("Ingrese unnumero entre 100 y -100");
		numeroIngresado= parseInt(numeroIngresado);
		while(numeroIngresado>100 || numeroIngresado<-100)
		{
			numeroIngresado= prompt("Ingrese unnumero entre 100 y -100");
			numeroIngresado= parseInt(numeroIngresado);
		}
		if(banderaPrimero== true)
		{
			Minimo= numeroIngresado;
			Maximo= numeroIngresado;
			letraMaximo= letraIngresada;
			letraMinimo= letraIngresada;
		}
		else
		{
			if(numeroIngresado>Maximo)
			{
				Maximo= numeroIngresado;
				letraMaximo= letraIngresada;
			}
			if(numeroIngresado<Minimo)
			{
				Minimo= numeroIngresado;
				letraMinimo= letraIngresada;
			}
		}

		if(numeroIngresado > 0)
		{
			acumuladorPositivos= acumuladorPositivos + numeroIngresado;
			cantidadPositivos++;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				acumuladorNegativos= acumuladorNegativos + numeroIngresado;
			}
			else
			{
				cantidadCeros++;
			}
		}

		if(numeroIngresado % 2 == 0)
		{
			cantidadPares++;
		}
		else
		{
			cantidaImpares++;
		}

		respuesta= confirm("Desea continuar?")
	}

	promedioPositivos= acumuladorPositivos/cantidadPositivos;

	document.write("Cantidad de numeros pares " + cantidadPares+"<br>");
	document.write("Cantidad de numeros Impares " +cantidaImpares+"<br>");
	document.write("Cantidad de ceros "+cantidadCeros+"<br>");
	document.write("El promedio de los numeros positivos es "+promedioPositivos+"<br>");
	document.write("Suma de todos los negativos "+ acumuladorNegativos+"<br>");
	document.write("El maximo es " +Maximo+ "y su letra"+"<br>" );
}
