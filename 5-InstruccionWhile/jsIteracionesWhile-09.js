
function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var negativoMaximo;
	var parMinimo;
	var contador;
	var banderaNegativos=true;
	var banderaPares=true;
	contador=0;
	
	while(contador < 10)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(numeroIngresado == 0)
		{
			numeroIngresado = prompt("Error: Ingrese un numero distinto de cero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		
		if(numeroIngresado % 2 == 0)
		{
			if (numeroIngresado < parMinimo || banderaPares==true) 
			{
				parMinimo = numeroIngresado;
				banderaPares=false;
			}
		}	
		
		if(numeroIngresado < 0)
		{
			if(banderaNegativos==true || numeroIngresado>negativoMaximo)
			{
				negativoMaximo=numeroIngresado;
				banderaNegativos=false;
			}
		}			
		contador++;			
	}
	if(banderaNegativos == true)
	{
		document.write("No hay negativos"+"<br/>");
	}
	else
	{
		document.write("Negativo maximo: "+negativoMaximo+"<br/>");
	}

	if(banderaPares == true)
	{
		document.write("No hay pares");
	}
	else
	{
		document.write("Par minimo: "+parMinimo+"<br/>");
	}	
		
}//FIN DE LA FUNCIÓN
