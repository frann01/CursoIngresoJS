function mostrar()
{
	var respuesta=true;
	var tipoProducto;
	var cantidadIngresada;
	var importeProducto;
	var acumuladorBolsas=0;
	var totalSinDescuento=0;
	var contadorCal=0;
	var contadorArena=0;
	var contadorCemento=0;
	var acumuladorCal=0;
	var acumuladorArena=0;
	var acumuladorCemento=0;
	var banderaProductos=true;
	var mayorPrecio;
	var tipoMayorPrecio;
	var descuento=0;
	var precioDescuento;

	while(respuesta == true)
	{
		//Ingreso de datos
		tipoProducto = prompt("Ingrese el tipo de producto");
		tipoProducto=tipoProducto.toLowerCase();
		while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento")
		{
			tipoProducto = prompt("Ingrese el tipo de producto");
			tipoProducto=tipoProducto.toLowerCase();
		}
		
		importeProducto = prompt("Ingrese el importe del producto");
		importeProducto=parseInt(importeProducto);
		while(importeProducto < 0 || isNaN(importeProducto))
		{
			importeProducto = prompt("Ingrese el importe del producto");
			importeProducto=parseInt(importeProducto);
		}

		cantidadIngresada = prompt("Ingrese la cantidad de bolsas");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada))
		{
			cantidadIngresada = prompt("Ingrese la cantidad de bolsas");
			cantidadIngresada=parseInt(cantidadIngresada);
		}
		acumuladorBolsas= acumuladorBolsas+cantidadIngresada;
		totalSinDescuento= totalSinDescuento+ (importeProducto*cantidadIngresada);

		if(banderaProductos== true || importeProducto > mayorPrecio)
			{
				mayorPrecio=importeProducto;
				tipoMayorPrecio=tipoProducto;
			}

		switch(tipoProducto)
		{
			case "cal":
			acumuladorCal= acumuladorCal+cantidadIngresada;
		
			break;

			case "arena":
			acumuladorArena=acumuladorArena+cantidadIngresada;

			break;

			case "cemento":
			acumuladorCemento=acumuladorCemento+ cantidadIngresada;
			break;
		}

		respuesta=confirm("Desea continuar?");
	}

	if(acumuladorBolsas>10 &&acumuladorBolsas<30)
	{
		descuento=0.15;
	}
	else
	{
		if(acumuladorBolsas>30)
		{
			descuento=0.25;
		}
	}

	document.write("El total sin descuento es " + totalSinDescuento+"<br/>");

	if(descuento>0)
	{
		precioDescuento= totalSinDescuento-(totalSinDescuento*descuento);
		document.write("El total con descuento es " + precioDescuento+"<br/>");
	}

	if(acumuladorCal >  acumuladorCemento && acumuladorCal > acumuladorArena)
	{
		
		document.write("EL tipo con mas cantidad es Cal"+"<br/>");
	}
	else
	{
		if(acumuladorArena > acumuladorCemento && acumuladorArena > acumuladorCal)
		{
			document.write("EL tipo con mas cantidad es Arena"+"<br/>");
		}
		else
		{
			document.write("EL tipo con mas cantidad es Cemento"+"<br/>");
		}
	}

	document.write("EL tipo mas caro es "+tipoMayorPrecio+"<br/>");				
}

if(IsNaN())
{
	document.write("No se puede resolver");
}
else
{
	document.write("se puede resolver");
}
