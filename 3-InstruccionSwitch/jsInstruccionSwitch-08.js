function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		alert("Hace Frio");
		break;

		case "Cataratas":
		case "Mar del plata":
		alert("Hace calor");
		break;
	}

}//FIN DE LA FUNCIÓN