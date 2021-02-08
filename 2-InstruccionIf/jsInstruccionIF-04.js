function mostrar()
{
	let edadIng;

	edadIng = document.getElementById('txtIdEdad').value;
	edadIng = parseInt(edadIng);

	if(edadIng < 18 && edadIng > 12)
	{
		alert("Es adolescente");
	}
	

}//FIN DE LA FUNCIÓN