/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	let nombreAlumno = prompt("Introdusca su nombre");

	if(nombreAlumno == "")
	{
		alert("No ingreso su nombre");
	}
	else
	{
		alert("Su nombre es " + nombreAlumno);
	}
	
}

