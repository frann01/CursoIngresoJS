function mostrar()
{
	var precioIngresado;
	var descuento;
	var precioFinal;

	precioIngresado=prompt("Ingrese el precio");
	precioIngresado=parseInt(precioIngresado);
	descuento=prompt("Ingrese el descuento");
	descuento=parseInt(descuento)/100;

	precioFinal = precioIngresado - (precioIngresado*descuento);

	alert("El precio final es "+precioFinal);
}
