/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	respuesta=true;

	banderaDelPrimero = prompt("Ingrese un numero");
	banderaDelPrimero = parseInt(banderaDelPrimero);
	respuesta = prompt("desea continuar?");

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < banderaDelPrimero)
		{
			numeroMinimo = numeroIngresado;
		}

		if(numeroIngresado > banderaDelPrimero)
		{
			numeroMaximo = numeroIngresado;
		}

		respuesta = confirm("desea continuar?");
		banderaDelPrimero = numeroIngresado;
	}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN