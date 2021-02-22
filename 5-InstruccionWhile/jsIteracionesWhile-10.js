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
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var promedioNegativos=0;
	var promedioPositivos=0;
	var diferenciaPP;
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
	}//fin del while

	promedioNegativos = sumaNegativos/cantidadNegativos;
	promedioPositivos = sumaPositivos/cantidadPositivos;
	diferenciaPP = sumaPositivos + sumaNegativos;

	document.write("la suma de negativos es :"+sumaNegativos+"<br/>");
	document.write("la suma de los positivos es "+sumaPositivos+"<br/>");
	document.write("cantidad de positivos: "+cantidadPositivos+"<br/>");
	document.write("cantidad de negativos: "+cantidadNegativos+"<br/>");
	document.write("cantidad de ceros"+cantidadCeros+"<br/>");
	document.write("cantidad de pares "+cantidadPares+"<br/>");
	document.write("promedio positivos"+promedioPositivos+"<br/>");
	document.write("promedio negativos "+promedioNegativos+"<br/>");
	document.write("Diferencia entre positivos y negativos"+diferenciaPP+"<br/>");
}//FIN DE LA FUNCIÓN