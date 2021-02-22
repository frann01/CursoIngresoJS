/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var promedioNegativos;
	var promedioPositivos;
	var diferenciaPP;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	
	var cantidadPares=0;

	respuesta=true;

	while(respuesta==true)
	{ 
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado % 2 == 0) 
		{
    		cantidadPares++;
  		}
  		
  		switch(true)
  		{
  			case numeroIngresado < 0:
  				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNegativos++;
				break;

			case numeroIngresado > 0:
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos++;
				break;

			case numeroIngresado==0:
				cantidadCeros++;
				break;		
  		}

		respuesta=confirm("desea continuar?");
	}

	promedioNegativos = sumaNegativos/cantidadNegativos;
	promedioPositivos = sumaPositivos/cantidadPositivos;
	diferenciaPP = sumaPositivos + sumaNegativos;

	document.write("Suma de negativos: "+sumaNegativos+"<br/>"+
		"Suma de los positivos: "+sumaPositivos+"<br/>"+
		"Cantidad de positivos: "+cantidadPositivos+"<br/>"+
		"Cantidad de negativos: "+cantidadNegativos+"<br/>"+
		"Cantidad de ceros: "+cantidadCeros+"<br/>"+
		"Pantidad de pares: "+cantidadPares+"<br/>"+
		"Promedio positivos: "+promedioPositivos+"<br/>"+
		"Promedio negativos: "+promedioNegativos+"<br/>"+
		"Diferencia entre positivos y negativos: "+diferenciaPP+"<br/>");
	
}//FIN DE LA FUNCIÓN