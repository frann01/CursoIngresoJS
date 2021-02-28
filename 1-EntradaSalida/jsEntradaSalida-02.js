
function mostrar()
{
	var cantidadMascotas=0;
	var tipoMacota;
	var raza;
	var edadIngresada;
	var nombreIngresado;
	var nombreViejoPerro;
	var nombreViejogatos;
	var nombreViejoPajaros;
	var nombreViejoOtros;
	var contadorPerros=0;
	var contadorGatos=0;
	var contadorPajaros=0;
	var contadorOtros=0;
	var EdadPerro;
	var EdadGatos;
	var EdadPajaros;
	var EdadOtros;
	var contadorsiamés=0;
	var contadorturco=0;
	var contadorPeterbald=0;
	var contadorgenerico=0;
	var acumuladorsiamés=0;
	var acumuladorturco=0;
	var acumuladorPeterbald=0;
	var acumuladorgenerico=0;
	var promediosiamés;
	var promedioturco;
	var promedioPeterbald;
	var promediogenerico;


	while(cantidadMascotas<10)
	{
		tipoMacota = prompt("Ingrese el tipo de mascota");
		while(tipoMacota != "gato" && tipoMacota != "perro" && tipoMacota != "pajaro" && tipoMacota != "otros")
		{
			tipoMacota = prompt("Ingrese el tipo de mascota");
		}
		nombreIngresado = prompt("Ingrese el nombre");
		
		switch(tipoMacota)
		{

			case "perro":
				raza = prompt("Ingrese la raza");
				while(raza != "pastor" && raza != "toy" && raza != "callejero")
				{	
					raza = prompt("Ingrese la raza");
				}

				edadIngresada = prompt("Ingrese la edad");
				edadIngresada=parseInt(edadIngresada);
				while(edadIngresada > 20 || edadIngresada < 1)
				{
					edadIngresada = prompt("Ingrese la edad");
					edadIngresada=parseInt(edadIngresada);
				}
				if(contadorPerros == 0 || edadIngresada > EdadPerro)
				{
					EdadPerro=edadIngresada;
					nombreViejoPerro=nombreIngresado;
				}
				contadorPerros++;
				break;

			case "gato":
				raza = prompt("Ingrese la raza");
				while(raza != "siamés" && raza != "turco" && raza != "Peterbald" && raza != "generico")
				{	
					raza = prompt("Ingrese la raza");
				}

				edadIngresada = prompt("Ingrese la edad");
				edadIngresada=parseInt(edadIngresada);
				while(edadIngresada > 20 || edadIngresada < 1)
				{
					edadIngresada = prompt("Ingrese la edad");
					edadIngresada=parseInt(edadIngresada);
				}

				if(contadorGatos == 0 || edadIngresada > EdadGatos)
				{
					EdadGatos=edadIngresada;
					nombreViejogatos=nombreIngresado;
				}

				switch(raza)
				{

					case "siamés":
					acumuladorsiamés=acumuladorsiamés+edadIngresada;
					contadorsiamés++;
					break;

					case "turco":
					acumuladorturco=acumuladorturco+edadIngresada;
					contadorturco++;
					break;

					case "Peterbald":
					acumuladorPeterbald=acumuladorPeterbald+edadIngresada;
					contadorPerros++;
					break;

					case "generico":
					acumuladorgenerico=acumuladorgenerico+edadIngresada;
					contadorgenerico++;
					break;		
				} 

				contadorGatos++;
				break;


			case "pajaro":
				raza = prompt("Ingrese la raza");
				edadIngresada = prompt("Ingrese la edad");
				edadIngresada=parseInt(edadIngresada);
				while(edadIngresada > 50 || edadIngresada < 1)
				{
					edadIngresada = prompt("Ingrese la edad");
					edadIngresada=parseInt(edadIngresada);
				}

				if(contadorPajaros == 0 || edadIngresada > EdadPajaros)
				{
					EdadPajaros=edadIngresada;
					nombreViejoPajaros=nombreIngresado;
				}
				contadorPajaros++;
				break;	


			case "otros":
				raza = prompt("Ingrese la raza");
				edadIngresada = prompt("Ingrese la edad");
				edadIngresada=parseInt(edadIngresada);
				while(edadIngresada > 100 || edadIngresada < 1)
				{
					edadIngresada = prompt("Ingrese la edad");
					edadIngresada=parseInt(edadIngresada);
				}

				if(contadorOtros == 0 || edadIngresada > EdadOtros)
				{
					EdadOtros=edadIngresada;
					nombreViejoOtros=nombreIngresado;
				}
				contadorOtros++;
				break;		
		}
		
		
		cantidadMascotas++;
	}


	promediosiamés=acumuladorgenerico/contadorsiamés;
	promedioturco=acumuladorturco/contadorturco;	
	promedioPeterbald=acumuladorPeterbald/contadorPeterbald;	
	promediogenerico=acumuladorgenerico/contadorgenerico;


	if(contadorPerros>0)
	{
		document.write("La edad del perro mas viejo es "+EdadPerro+" y su nombre es "+nombreViejoPerro+"<br/>");
	}
	if(contadorGatos>0)
	{
		document.write("La edad del gato mas viejo es "+EdadGatos+" y su nombre es "+nombreViejogatos+"<br/>");
	}
	if(contadorPajaros>0)
	{
		document.write("La edad del pajaro mas viejo es "+EdadPajaros+" y su nombre es "+nombreViejoPajaros+"<br/>");
	}
	if(contadorOtros>0)
	{
		document.write("La edad del otro mas viejo es "+EdadOtros+" y su nombre es "+nombreViejoPajaros+"<br/>");
	}



	if(contadorsiamés >  contadorturco && contadorsiamés > contadorPeterbald && contadorsiamés > contadorgenerico)
	{
		document.write("La raza con mas gatos es la siames y su promedio de edad es "+ promediosiamés+"<br/>");
	}
	else
	{
		if(contadorPeterbald > contadorturco && contadorPeterbald > contadorsiamés && contadorPeterbald > contadorgenerico)
		{
			document.write("La raza con mas gatos es la peterbald y su promedio de edad es "+promedioPeterbald+"<br/>");
		}
		else
		{
			if(contadorturco > contadorPeterbald && contadorturco > contadorsiamés && contadorturco > contadorgenerico)
			{
				document.write("La raza con mas gatos es la turca y su promedio de edads ed "+promedioturco+ "<br/>");
			}
			else
			{
				document.write("La raza con mas gatos es la generica "+promediogenerico+"<br/>");
			}
		}
	}		
}

