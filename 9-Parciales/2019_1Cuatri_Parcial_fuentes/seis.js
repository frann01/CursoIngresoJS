function mostrar()
{
	var horaIngresada

	horaIngresada= laHora.value;
	horaIngresada=parseInt(horaIngresada);

	if(horaIngresada < 0 || horaIngresada>24)
	{
		alert("Hora no valida")
	}
	else
	{
		switch(true)
		{
			case horaIngresada > 5 && horaIngresada < 12:
			alert("Es de mañana");
			break;

			case horaIngresada>11 && horaIngresada<20:
			alert("Es la tarde");
			break;

			default:
			if(horaIngresada<24)
			{
				alert("Es de noche a dormir");
			}else
			{
				alert("Es de noche");
			}
			break;
		}
	}
	
}
