function mostrar()
{
	var respuesta=true;
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	var nombreMayorTemp;
	var mayorTemperatura;
	var banderaMayorTemp=true;
	var conatadorMayoresViudos=0;
	var contadorViudosSolteros=0;
	var acumuladorEdadSolteros=0;
	var personasMayores38=0;
	var promedioEdadSolteros;
	var contadorSolteros=0;

	while(respuesta == true)
	{
		nombreIngresado = prompt("Nombre:");

		edadIngresada = prompt("Edad:");
		edadIngresada = parseInt(edadIngresada);
		while(edadIngresada < 1)
		{
			edadIngresada = prompt("Edad:");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Sexo:");
		sexoIngresado = sexoIngresado.toLowerCase();
		while(sexoIngresado != "f" && sexoIngresado!= "m") 
		{
			sexoIngresado = prompt("Sexo:");
		}
		
		estadoCivilIngresado = prompt("Estado Civil:");
		while(estadoCivilIngresado != "casado" && estadoCivilIngresado != "soltero" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("Estado civil:");
		}

		temperaturaIngresada = prompt("Cual es su temperatura?");

		if(mayorTemperatura<temperaturaIngresada || banderaMayorTemp == true)
		{
			mayorTemperatura = temperaturaIngresada;
			nombreMayorTemp=nombreIngresado;
			banderaMayorTemp=false;
		}
		
		if (edadIngresada > 59 && temperaturaIngresada > 37) 
		{
			personasMayores38++;
		}

		switch(estadoCivilIngresado)
		{
			case "viudo":

				if (sexoIngresado == "m")
				{
					contadorViudosSolteros++;
				}
				if(edadIngresada > 17)
				{
					conatadorMayoresViudos++;
				}
				break;

			case "soltero":
				if (sexoIngresado == "m")
				{
					contadorViudosSolteros++;
					acumuladorEdadSolteros = edadIngresada + acumuladorEdadSolteros;
					contadorSolteros++;
				}
				break;			
		}

		respuesta = confirm("Desea continuar?");
	}
	promedioEdadSolteros = acumuladorEdadSolteros/contadorSolteros;

	document.write("El nombre de la persona con mas temperatura es: " +nombreMayorTemp+"<br/>");
	document.write("mayores de edad que estan viudos: " +conatadorMayoresViudos+"<br/>");
	document.write("hombres que hay solteros o viudos: " +contadorViudosSolteros+"<br/>");
	document.write("personas de la tercera edad con mas de 38 de temperatura: " +personasMayores38+"<br/>");
	document.write("promedio de edad entre los hombres solteros: " +promedioEdadSolteros+"<br/>");	
}

