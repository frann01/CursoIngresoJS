function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = document.getElementById("txtIdDestino").value;
	var aumentoDescuento;
	var precioBase;
	var precioFinal;

	aumentoDescuento = 0;
	precioBase = 15000;

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destino)
		{
			case "Bariloche":
			aumentoDescuento = 0.2;
			break;

			case "Cordoba":
			case "Cataratas":
			aumentoDescuento = -0.1;
			break;

			case "Mar del plata":
			aumentoDescuento = -0.2;
			break;
		}
		break;

		case "Verano":
		switch(destino)
		{
			case "Bariloche":
			aumentoDescuento = -0.2;
			break;

			case "Cordoba":
			case "Cataratas":
			aumentoDescuento = 0.1;
			break;

			case "Mar del plata":
			aumentoDescuento = 0.2;
			break;
		}
		break;

		case "Otoño":
		case "Primavera":
		switch(destino)
		{
			case "Bariloche":
			aumentoDescuento = 0.1;
			break;

			case "Cataratas":
			aumentoDescuento = 0.1;
			break;

			case "Mar del plata":
			aumentoDescuento = 0.1;
			break;
		}
		break;

	}

	precioFinal = precioBase + (precioBase * aumentoDescuento);

	alert("El precio final es de " + precioFinal);

}//FIN DE LA FUNCIÓN