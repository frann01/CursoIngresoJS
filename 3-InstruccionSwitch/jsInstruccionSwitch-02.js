function mostrar()
{
	var mesDelAño=txtIdMes.value;
	var mensaje;

	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		mensaje = "Falta para el invierno.";
		break;

		case "Julio":
		case "Agosto":
		mensaje = "Abrigate que hace frio."
		break;

		case "Septiembre":		
		case "Octubre":		
		case "Noviembre":
		case "Diciembre":
		mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;
	}

	alert(mensaje);




}//FIN DE LA FUNCIÓN