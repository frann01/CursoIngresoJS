function mostrar()
{
	let edadIng;
	let estadoCiv;
	edadIng = document.getElementById('txtIdEdad').value;
	estadoCiv = document.getElementById('estadoCivil').value;
	edadIng = parseInt(edadIng);

	if(edadIng > 17 && estadoCiv == "Soltero")
	{
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN