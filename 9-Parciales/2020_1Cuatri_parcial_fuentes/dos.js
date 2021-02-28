function mostrar()
{
	var respuesta=true;
	var tipoProducto;
	var cantidadProducto;
	var precioProducto;
	var descuento;
	var totalAPagar;
	var preciomovible;
	var precioTotal=0;
	var cantidadTotal=0;
	var cantidadCal=0;
	var cantidadCemento=0;
	var cantidadArena=0;
	var precioTotalDescuento;
	var precioMayorCal;
	var precioMayorCemento;
	var precioMayorArena;
	var banderaCal=true;
	var banderaCemento=true;
	var banderaArena=true;

	while(respuesta == true)
	{
		//Ingreso de datos
		tipoProducto = prompt("Ingrese el tipo de producto");
		while(tipoProducto != "cal" && tipoProducto != "arena" && tipoProducto != "cemento")
		{
			tipoProducto = prompt("Ingrese el tipo de producto");
		}

		cantidadProducto = prompt("Ingrese la cantidad de bolsas");
		cantidadProducto=parseInt(cantidadProducto);
		
		precioProducto = prompt("Ingrese el precio por bolsa");
		precioProducto=parseInt(precioProducto);
		while(precioProducto < 0)
		{
			precioProducto = prompt("Ingrese el precio por bolsa");
			precioProducto=parseInt(precioProducto);
		}

		preciomovible = precioProducto * cantidadProducto;
		precioTotal = precioTotal + preciomovible;
		cantidadTotal = cantidadTotal + cantidadProducto;

		//datos particulares
		switch(tipoProducto)
		{
			case "cemento":
				cantidadCemento = cantidadCemento + cantidadProducto;
				if(banderaCemento == true || precioMayorCemento< precioProducto)
				{
					precioMayorCemento = precioProducto;
					banderaCemento = false;
				}
				break;

			case "cal":
				cantidadCal = cantidadCal + cantidadProducto;
				if(banderaCal == true || precioMayorCal< precioProducto)
				{
					precioMayorCal = precioProducto;
					banderaCal = false;
				}
				break;

			case "arena":
				cantidadArena = cantidadArena + cantidadProducto;
				if(banderaArena == true || precioMayorArena< precioProducto)
				{
					precioMayorArena = precioProducto;
					banderaArena = false;
				}
				break;		
		} 

		respuesta=confirm("desea continuar?");
	}

	//sacar el descuento
	if(cantidadTotal > 14)
		{
			descuento = 0.15;
		}
		else
		{
			if(cantidadTotal > 29)
			{
				descuento = 0.3;
			}
			else
			{
				descuento = 0;
			}
		}

	//a) precio total	
	precioTotalDescuento = precioTotal - (precioTotal * descuento);
	document.write("El precio total es "+precioTotal+"<br/>");
	//precio con descuento
	if(descuento > 0)
	{
		document.write("El precio con descuento es " + precioTotalDescuento+"<br/>");
	}	

	//tipo con mayor cantidad de bolsas
	if(cantidadArena > cantidadCal && cantidadArena > cantidadCemento)
	{
		
		document.write("EL producto con mas cantidad es arena"+"<br/>");
	}
	else
	{
		if(cantidadCemento > cantidadCal && cantidadCemento > cantidadArena)
		{
			document.write("EL producto con mas cantidad es el cemento"+"<br/>");
		}
		else
		{
			document.write("EL producto con mas cantidad es cal"+"<br/>");
		}
	}

	//tipo mas caro
	if(precioMayorArena > precioMayorCal && precioMayorArena > precioMayorCemento)
	{
		document.write("EL producto mas caro es la arena"+"<br/>");
	}
	else
	{
		if(precioMayorCemento > precioMayorCal && precioMayorCemento > precioMayorArena)
		{
			document.write("EL producto mas caro es el cemento"+"<br/>");
		}
		else
		{
			document.write("EL producto mas caro es cal"+"<br/>");
		}
	}				
}

if(IsNaN())
{
	document.write("No se puede resolver");
}
else
{
	document.write("se puede resolver");
}
