function mostrar()
{
	let edadIng;

	edadIng = document.getElementById('txtIdEdad').value;
	edadIng = parseInt(edadIng);

	if(edadIng > 17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN