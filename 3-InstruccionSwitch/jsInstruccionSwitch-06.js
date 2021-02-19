function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia);
	
	switch(true)
	{
		case horaDelDia > 6 && horaDelDia < 12:
		alert("Es de mañana");
		break;

		case horaDelDia > 11 && horaDelDia < 20:
		alert("Es de tarde");
		break;

		case horaDelDia > 19 && horaDelDia < 25:
		case horaDelDia >= 0 && horaDelDia < 7:
		alert("Es de noche");
		break;

		default:
		alert("Esa hora no existe");
		break;


	}

}//FIN DE LA FUNCIÓN