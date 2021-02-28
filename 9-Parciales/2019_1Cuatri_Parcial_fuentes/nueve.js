function mostrar()
{
	var respuesta=true;
	var paisIngresado;
	var temperaturaIngresada;
	var cantidadPoblacion;
	var cantidadTempPares=0;
	var minimaPoblacion;
	var paisMinimaPob;
	var banderaPoblacion=true;
	var cantidadPaises40=0;
	var acumuladorPoblacion=0;
	var contadorPaises=0;
	var promedioPoblacion;
	var banderaTemperaturaMin=true;
	var minimaTemperatura;
	var paisMinimaTemp;


	while(respuesta==true)
	{
		paisIngresado = prompt("Ingrese el nombre del pais");

		cantidadPoblacion= prompt("Cantidad de habitantes en millones");
		cantidadPoblacion= parseInt(cantidadPoblacion);

		while(cantidadPoblacion<0 || cantidadPoblacion> 7000)
		{
			cantidadPoblacion= prompt("Cantidad de habitantes en millones");
			cantidadPoblacion= parseInt(cantidadPoblacion);
		}

		temperaturaIngresada= prompt("la temperaruta mínima que se registra en su territorio");
		temperaturaIngresada= parseInt(temperaturaIngresada);

		while(temperaturaIngresada<-50 || temperaturaIngresada> 50)
		{
			temperaturaIngresada= prompt("la temperaruta mínima que se registra en su territorio");
			temperaturaIngresada= parseInt(temperaturaIngresada);
		}


		acumuladorPoblacion= acumuladorPoblacion + cantidadPoblacion;

		if(temperaturaIngresada % 2 == 0)
		{
			cantidadTempPares++;
		}

		if(cantidadPoblacion<minimaPoblacion || banderaPoblacion == true)
		{
			minimaPoblacion= cantidadPoblacion;
			paisMinimaPob = paisIngresado;
			banderaPoblacion=false;
		}

		if(temperaturaIngresada<minimaTemperatura || banderaTemperaturaMin == true)
		{
			minimaTemperatura= temperaturaIngresada;
			paisMinimaTemp = paisIngresado;
			banderaTemperaturaMin=false;
		}

		if(temperaturaIngresada>40)
		{
			cantidadPaises40++;
		}
		contadorPaises++;

		respuesta= confirm("Desea continuar?");

	}

	promedioPoblacion= acumuladorPoblacion / contadorPaises;

	document.write("La cantidad de temperaturas pares es "+cantidadTempPares+"<br>");
	document.write("El nombre del pais con menos habitantes "+paisMinimaPob+"<br>");
	document.write("la cantidad de paises que superan los 40 grados es "+cantidadPaises40+"<br>");
	document.write("el promedio de habitantes entre los paises ingresados es "+promedioPoblacion+"<br>");
	document.write("la temperatura mínima ingresada es "+minimaTemperatura+", y nombre del pais que registro esa temperatura es "+paisMinimaTemp+"<br>");
}
