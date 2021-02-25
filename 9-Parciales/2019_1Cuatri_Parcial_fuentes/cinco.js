function mostrar()
{
	var continenteIngresado;
	var cantidadDias;
	var precioPorDia=100;
	var precioViaje;
	var descuento;
	var medioDePago;
	var precioConDescuento;

	continenteIngresado = Marca.value
	cantidadDias=prompt("¿Cunatos dias viajara?");
	medioDePago = prompt("Con que va apagar?");

	precioViaje=cantidadDias * precioPorDia;

	switch(continenteIngresado)
	{
		case "América":
			switch(medioDePago)
			{
				case "debito":
				descuento = 0.6;
				break;

				default:
				descuento=0.5;
				break;
			}
			break;

		
		case "Asia":
			descuento = -0.2;
			break;

		case "Europa":
		switch(medioDePago)
			{
				case "debito":
				descuento = 0.35;
				break;

				case "mercado pago":
				descuento = 0.3;
				break;

				default:
				descuento=0.25;
				break;
			}
			break;

		case "Oceania":
			descuento = -0.2;
			break;

		case "África":
		
			switch(medioDePago)
			{
				case "mercado pago":
				case "efectivo:":
				descuento= 0.75;
				break;

				default:
				descuento = 0.6;
				break;
			}		
	}

	precioConDescuento= precioViaje - (precioViaje * descuento);

	alert("EL precio final del viaje es de "+precioConDescuento);
}
