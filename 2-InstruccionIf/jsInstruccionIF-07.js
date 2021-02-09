function mostrar()
{
	let edadIng;
	let estadoCiv;
	edadIng = document.getElementById('txtIdEdad').value;
	estadoCiv = document.getElementById('estadoCivil').value;
	edadIng = parseInt(edadIng);

	if(edadIng < 18)
	{
		if(estadoCiv != "Soltero")
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}


}