function mostrar()
{
	let edadIng;

	edadIng = document.getElementById('txtIdEdad').value;
	edadIng = parseInt(edadIng);

	if(edadIng <= 17 && edadIng >= 13)
	{
		alert("Es adolescente");
	}
	else
	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN