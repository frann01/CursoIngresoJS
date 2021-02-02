/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let apellidoIng;
	let nombreIngresado;
	let edadingresada;
	
	apellidoIng = prompt("Cual es su apellido?");
	nombreIngresado = document.getElementById('txtIdNombre').value;
	edadingresada = document.getElementById('txtIdEdad').value;

	alert("Usted se llama " + nombreIngresado + " " + apellidoIng + " y tiene " + edadingresada + " años.");
	
}

