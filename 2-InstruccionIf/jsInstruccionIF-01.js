function mostrar()
{
	let edadIng;

	edadIng = document.getElementById('txtIdEdad').value;
	edadIng = parseInt(edadIng);

	if(edadIng == 15)
	{
		alert("Niña bonita");
	}
	else
	{
		alert("no");
	}

}//FIN DE LA FUNCIÓN