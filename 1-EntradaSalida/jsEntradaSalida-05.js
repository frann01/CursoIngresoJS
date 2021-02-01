/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado = document.getElementById('txtIdNombre').value;
	let edadingresada = document.getElementById('txtIdEdad').value;

	alert("Usted se llama " + nombreIngresado + " y tiene " + edadingresada + " años.");
	
}

