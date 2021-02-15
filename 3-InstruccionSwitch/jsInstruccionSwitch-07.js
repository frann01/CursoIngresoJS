function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		alert("Se encuentra al oeste");
		break;

		case "Cataratas":
		alert("Se encuentra al norte");
		break;

		case "Ushuaia":
		alert("Se encuentra al sur");
		break;

		case "Mar del plata":
		alert("Se encuentra al este");
		break;
	}

}//FIN DE LA FUNCIÓN