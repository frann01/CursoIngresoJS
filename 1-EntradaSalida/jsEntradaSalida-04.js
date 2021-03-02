/* 
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado11
b)El porcentaje de enfermos sobre el total de mascotas11
c)El nombre de la ultima mascota de tipo "otra cosa"11
d)El animal sin pelo con menor temperatura corporal11
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal11
f)Sumando gatos y perros que porcentaje del total de mascotas son?11
g)Que estado clinico tiene la menor cantidad de mascotas 11      
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 11
i)El nombre y raza del gato sin pelos mas liviano
*/
function mostrar()
{
	var respuesta= true;
	var tipoMacota;
	var tipoPelaje;
	var edadIngresada;
	var pesoIngresado;
	var estadoClinico;
	var temperaturaIngresada;
	var nombreIngresado;
	var razaIngresada;

	var contadorGatos=0;
	var contadorPerros=0;
	var contadorotra=0;
	var contadorMacotas=0;
	var contadorEnfermos=0;
	var contadorAdopcion=0;
	var contadorInternado=0;

	var pesoPerroPesado;
	var nombrePerroPesado;
	var porcentajeEnfermos;
	var ultimootra;
	var menorTempEnfermos;
	var nombreTempEnfermos;

	var promedioTempGatos=0;
	var promedioTempPerros=0;
	var promedioTempotra=0;
	var acumuladorTempPerros=0;
	var acumuladorTempGatos=0;
	var acumuladorTempOtra=0;
	var promedioPerrosGatos;
	var acumuladorPeso=0;
	var promediopeso;
	var banderaGatoLiviano=true;
	var pesoGatoLiviano;
	var razaLiviano;
	var NombreLiviano;
	var contadorSinPelo=0;

	while(respuesta==true)
	{
		tipoMacota = prompt("Ingrese el tipo de mascota");
		tipoMacota=tipoMacota.toLowerCase();
		while(tipoMacota != "gato" && tipoMacota != "perro" && tipoMacota != "otra")
		{
			tipoMacota = prompt("Ingrese el tipo de mascota");
			tipoMacota=tipoMacota.toLowerCase();
		}

		tipoPelaje = prompt("Ingrese el tipo de pelaje");
		tipoPelaje=tipoPelaje.toLowerCase();
		while(tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo")
		{
			tipoPelaje = prompt("Ingrese el tipo de pelaje");
			tipoPelaje=tipoPelaje.toLowerCase();
		}

		edadIngresada = prompt("Ingrese la edad");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada < 0 || isNaN(edadIngresada) || edadIngresada>100)
		{
			edadIngresada = prompt("Ingrese la edad");
			edadIngresada=parseInt(edadIngresada);
		}

		nombreIngresado = prompt("Ingrese el nombre");
		while(isNaN(nombreIngresado)== false)
		{
			nombreIngresado = prompt("Ingrese el nombre");

		}
		razaIngresada = prompt("Ingrese la raza");

		pesoIngresado = prompt("Ingrese el peso");
		pesoIngresado=parseInt(pesoIngresado);
		while(pesoIngresado < 0 || isNaN(pesoIngresado) || pesoIngresado >50)
		{
			pesoIngresado = prompt("Ingrese el peso");
			pesoIngresado=parseInt(pesoIngresado);
		}

		estadoClinico = prompt("Ingrese el estado clinico");
		estadoClinico=estadoClinico.toLowerCase();
		while(estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion")
		{
			estadoClinico = prompt("Ingrese el estado clinico");
			estadoClinico=estadoClinico.toLowerCase();
		}

		temperaturaIngresada = prompt("Cual es su temperatura?");
		while(isNaN(temperaturaIngresada))
		{
			temperaturaIngresada = prompt("Cual es su temperatura?");
		}

		switch(tipoMacota)
		{

			case "perro":
				if(contadorPerros == 0 || pesoIngresado > pesoPerroPesado)
				{
					pesoPerroPesado=pesoIngresado;
					nombrePerroPesado=nombreIngresado;
				}
				acumuladorTempPerros=acumuladorTempPerros+temperaturaIngresada;
				contadorPerros++;
				break;

			case "gato":
				acumuladorTempGatos=acumuladorTempGatos+temperaturaIngresada;
				if(tipoPelaje=="sin pelo")
				{
					if(banderaGatoLiviano == true || pesoIngresado < pesoGatoLiviano)
					{
					pesoGatoLiviano=pesoIngresado;
					NombreLiviano=nombreIngresado;
					razaLiviano=razaIngresada;
					banderaGatoLiviano=false;
					}
				}
				contadorGatos++;
				break;

			case "otra":
				acumuladorTempOtra=acumuladorTempOtra+temperaturaIngresada;
				ultimootra=nombreIngresado;
				contadorotra++;
				break;		
		}

		if(tipoPelaje=="sin pelo")
		{
			if(contadorSinPelo == 0 || temperaturaIngresada < menorTempEnfermos)
			{
				temperaturaIngresada=menorTempEnfermos;
				nombreTempEnfermos=nombreIngresado;
			}
			contadorSinPelo++;
		}

		switch(estadoClinico)
		{

			case "internado":
				contadorInternado++;
				break;

			case "enfermo":

				
				contadorEnfermos++;
				break;

			case "adopcion":
				contadorAdopcion++;
				break;		
		}

		contadorMacotas++;
		acumuladorPeso=acumuladorPeso+pesoIngresado;

		respuesta=confirm("Desea continuar?");
	}

	porcentajeEnfermos= (contadorEnfermos*100)/contadorMacotas;
	if(contadorPerros>0)
	{
		promedioTempPerros=acumuladorTempPerros/contadorPerros;
	}

	if(contadorotra>0)
	{
		promedioTempotra=acumuladorTempOtra/contadorotra;
	}

	if(contadorGatos>0)
	{
		promedioTempGatos=acumuladorTempGatos/contadorGatos;
	}
	
	promedioPerrosGatos=((contadorPerros+contadorGatos)*100)/contadorMacotas;
	promediopeso=acumuladorPeso/contadorMacotas;

	if(promedioTempPerros >  promedioTempGatos && promedioTempPerros > promedioTempotra)
	{
		
		document.write("EL tipo con mas temperatura es Perros"+"<br/>");
	}
	else
	{
		if(promedioTempotra > promedioTempGatos)
		{
			document.write("EL tipo con mas temperatura es Otra"+"<br/>");
		}
		else
		{
			document.write("EL tipo con mas temperatura es Gatos"+"<br/>");
		}
	}

	if(contadorEnfermos <  contadorAdopcion && contadorEnfermos < contadorInternado)
	{
		
		document.write("EL estado clinico con menor cantidad es enfermos"+"<br/>");
	}
	else
	{
		if(contadorInternado < contadorAdopcion)
		{
			document.write("EL estado clinico con menor cantidad es internados"+"<br/>");
		}
		else
		{
			document.write("EL estado clinico con menor cantidad es en adopcion"+"<br/>");
		}
	}

	if(nombrePerroPesado == undefined)
		{
			document.write("No hay perros"+"<br/>");
		}
		else
		{
			document.write("El perro maspesado es "+nombrePerroPesado+"<br/>");
		}

	if(ultimootra == undefined)
		{
			document.write("No hay mascota de tipo otra"+"<br/>");
		}
		else
		{
			document.write("El nombre de la ultima mascota de tipo cosa es "+ultimootra+"<br/>");
		}

	if(nombreTempEnfermos == undefined)
		{
			document.write("No hay mascota sin pelo"+"<br/>");
		}
		else
		{
			document.write("El animal sin pelo con menor temperatura es  "+nombreTempEnfermos+"<br/>");
		}

	if(isNaN(promediopeso))
		{
			document.write("No se pudo resolver"+"<br/>");
		}
		else
		{
			document.write("El promedio de peso es  "+promediopeso+"<br/>");
		}

	if(NombreLiviano == undefined)
		{
			document.write("No hay gatos"+"<br/>");
		}
		else
		{
			document.write("El nombre y raza del gato mas liviano es  "+NombreLiviano+razaLiviano+"<br/>");
		}


	document.write("El porcentaje de enfermos sobre el total es  "+porcentajeEnfermos+"<br/>");
	document.write("El porcentaje de perros mas gatos sobre el total es "+promedioPerrosGatos+"<br/>");

}	