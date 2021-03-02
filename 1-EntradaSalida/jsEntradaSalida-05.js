/*
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.11
b)la cantidad de temperaturas impares de europa111
c)El nombre del pais con menos habitantes11
d)la cantidad de paises que superan los 40 grados.11
e)la cantidad de paises de america que tienen menos de 0 grados .11
f)el promedio de habitantes entre los paises ingresados .11
g)el promedio de habitantes entre los paises que superan los 40 grados11        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 11
i) que continente tiene mas habitantes.11
	*/
function mostrar()
{	
	var contadorPaises;
	var Continente;
	var nombreIngresado;
	var cantidaHabitantes;
	var Pobreza;
	var contadorTempPraes=0;
	var contadorTempimpoarEu=0;
	var contadorPaises=0;
	var MenosHabitantes;
	var PaisMenosHabitantes;
	var paises40=0;
	var AmericaMenos0=0;
	var acumuladorHabitantes=0;
	var promedioHabitantesTotal;
	var acumuladorHabitantes40=0;
	var promedioHabitantes40;
	var contadorhabitantes40=0;
	var menorTemp;
	var nombreMenorTemp;
	var acumuladorHabitantesEuropa=0;
	var acumuladorHabitantesAmerica=0;
	var acumuladorHabitantesOceania=0;
	var acumuladorHabitantesAfrica=0;
	var acumuladorHabitantesAsia=0;



	while(contadorPaises<5)
	{
		continente = prompt("Ingrese el continente");
		continente=continente.toLowerCase();
		while(continente != "america" && continente != "africa" && continente != "europa"  && continente != "asia"  && continente != "oceania")
		{
			continente = prompt("Ingrese el continente");
			continente=continente.toLowerCase();
		}
		nombreIngresado = prompt("Ingrese el nombre");
		nombreIngresado=nombreIngresado.toLowerCase();
		
		cantidaHabitantes = prompt("Ingrese la cant. de habitantes");
		cantidaHabitantes=parseInt(cantidaHabitantes);
		while(cantidaHabitantes > 7000 || cantidaHabitantes < 1 || isNaN(cantidaHabitantes))
		{
			cantidaHabitantes = prompt("Ingrese la cant. de habitantes");
			cantidaHabitantes=parseInt(cantidaHabitantes);
		}

		pobreza = prompt("Ingrese el novel de pobreza");
		pobreza=pobreza.toLowerCase();
		while(pobreza != "pobre" && pobreza != "rico" && pobreza != "muy rico" || pobreza == "pobre" && continente=="europa")
		{
			
			pobreza = prompt("Ingrese el novel de pobreza");
			pobreza=pobreza.toLowerCase();
		}

		temperaturaIngresada = prompt("Cual es su temperatura minima?");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(temperaturaIngresada > 50 || temperaturaIngresada < -50 ||isNaN(temperaturaIngresada))
		{
			temperaturaIngresada = prompt("Cual es su temperatura minima?");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		acumuladorHabitantes=acumuladorHabitantes+cantidaHabitantes;

		if(temperaturaIngresada%2==0)
		{
			contadorTempPraes++;
		}

		if(contadorPaises== 0|| cantidaHabitantes < MenosHabitantes)
		{
			MenosHabitantes=cantidaHabitantes;
			PaisMenosHabitantes=nombreIngresado;
		}

		if(temperaturaIngresada>40)
		{
			acumuladorHabitantes40=acumuladorHabitantes40+cantidaHabitantes;
			contadorhabitantes40++;
		}
		
		if(contadorPaises == 0 || temperaturaIngresada < menorTemp)
			{
				temperaturaIngresada=menorTemp;
				nombreMenorTemp=nombreIngresado;
			}	

		switch(continente)
		{
			case "europa":
			if(temperaturaIngresada%2!=0)
			{
				contadorTempimpoarEu++;
			}
			acumuladorHabitantesEuropa=acumuladorHabitantesEuropa+cantidaHabitantes;	
			break;

			case "africa":
				acumuladorHabitantesAfrica=acumuladorHabitantesAfrica+cantidaHabitantes;
				break;

			case "oceania":
				acumuladorHabitantesOceania=acumuladorHabitantesOceania+cantidaHabitantes;
				break;	

			case "asia":
				acumuladorHabitantesAsia=acumuladorHabitantesAsia+cantidaHabitantes;
				break;
			
			case "america":
			if(temperaturaIngresada<0)
			{
				AmericaMenos0++;
			}
				break;			
		}

		contadorPaises++;

	}

	promedioHabitantesTotal=acumuladorHabitantes/contadorPaises;
	promedioHabitantes40=acumuladorHabitantes40/contadorhabitantes40;

	if(acumuladorHabitantesAmerica >  acumuladorHabitantesEuropa && acumuladorHabitantesAmerica > acumuladorHabitantesAfrica && acumuladorHabitantesAmerica > acumuladorHabitantesOceania && acumuladorHabitantesAmerica > acumuladorHabitantesAsia)
	{
		
		document.write("EL continente con mas habitantes es America"+"<br/>");
	}
	else
	{
		if(acumuladorHabitantesAfrica > acumuladorHabitantesEuropa && acumuladorHabitantesAfrica > acumuladorHabitantesOceania && acumuladorHabitantesAfrica > acumuladorHabitantesAsia)
		{
			document.write("EL continente con mas habitantes es Africa"+"<br/>");
		}
		else
		{
			if(acumuladorHabitantesEuropa > acumuladorHabitantesOceania && acumuladorHabitantesEuropa > acumuladorHabitantesAsia)
			{
				document.write("EL continente con mas habitantes es Europa"+"<br/>");
			}
			else
			{
				if(acumuladorHabitantesAsia > acumuladorHabitantesOceania)
				{
					document.write("EL continente con mas habitantes es Asia"+"<br/>");
				}
				else
				{
					document.write("EL continente con mas habitantes es Oceania"+"<br/>");
				}
			}
		}
	}


	if(contadorTempPraes == 0)
	{
		document.write("No hay temperaturas pares"+"<br/>");
	}
	else
	{
		document.write("La cantidad de temperaturas pares es "+contadorTempPraes+"<br/>");
	}

	if(contadorTempimpoarEu == 0)
	{
		document.write("No hay temperaturas impares en Europa"+"<br/>");
	}
	else
	{
		document.write("La cantidad de temperaturas impares en Eurpa es "+contadorTempimpoarEu+"<br/>");
	}

	
	document.write("El pais con menos habitantes es  "+PaisMenosHabitantes+"<br/>");

	if(contadorTempimpoarEu == 0)
	{
		document.write("No hay apises con mas de 40 grados"+"<br/>");
	}
	else
	{
		document.write("La cantidad de paises con mas de 40 es "+paises40+"<br/>");
	}

	document.write("La cantidad de paises de paises de america con menos de 0 es  "+AmericaMenos0+"<br/>");

	document.write("EL promedio de habitantes es "+promedioHabitantesTotal+"<br/>");

	if(isNaN(promedioHabitantes40))
		{
			document.write("No se pudo resolver"+"<br/>");
		}
		else
		{
			document.write("EL promedio de habitantes donde hace 40 grados es "+promedioHabitantes40+"<br/>");
		}
	document.write("El pais con menor temperatura es  "+nombreMenorTemp+"<br/>");

}

