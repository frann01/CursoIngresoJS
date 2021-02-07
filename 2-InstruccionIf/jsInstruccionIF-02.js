function mostrar()
{
	let edadIng;

	edadIng = document.getElementById('txtIdEdad').value;
	edadIng = parseInt(edadIng);

	if(edadIng < 18)
	{
		alert("Es menor de edad");
	}
	else
	{
		alert("Es mayor de edad");
	}
	

}//FIN DE LA FUNCIÓN