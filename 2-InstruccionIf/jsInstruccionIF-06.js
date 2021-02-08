function mostrar()
{
	let edading;
	edadIng = document.getElementById('txtIdEdad').value;
	edadIng = parseInt(edadIng);

	if(edadIng > 17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		if(edadIng < 18 && edadIng > 12)
		{
			alert("es adolescente");
		}
		else
		{
			alert("Esun niño");
		}
	}


}//FIN DE LA FUNCIÓN