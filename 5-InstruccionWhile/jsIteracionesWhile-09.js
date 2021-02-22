/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var variable;
	banderaDelPrimero=true;
	respuesta=true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == true || numeroIngresado < numeroMinimo) 
		{
			numeroMinimo = numeroIngresado;		
		}
		if(banderaDelPrimero == true || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = false;
		}
		respuesta = confirm("desea continuar?");
	}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN