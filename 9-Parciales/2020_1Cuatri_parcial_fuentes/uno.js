
function mostrar()
{
	var contadorProductos=0;
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var fabricante;
	var marca;
	var cantidadBarbijo=0;
	var cantidadJabon=0;
	var cantidadAlcohol=0;
	var precioBarbijo; 
	var precioJabon;
	var precioAlcohol;
	var fabricanteAlcohol;
	var banderaAlcohol=true;
	var cantidadMinimaAlcohol;
	var promedioMayor;
	var contadorBarbijo=0;
	var contadorAlcohol=0;
	var contadorJabon=0;

	while(contadorProductos<5)
	{
		tipoProducto = prompt("Ingrese el tipo de producto");
		tipoProducto=tipoProducto.toLowerCase();
		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Ingrese el tipo de producto");
			tipoProducto=tipoProducto.toLowerCase();
		}
		
		precioProducto = prompt("Ingrese el precio de producto");
		precioProducto=parseInt(precioProducto);
		while(precioProducto > 300 || precioProducto < 100 || isNaN(precioProducto))
		{
			precioProducto = prompt("Ingrese el precio de producto");
			precioProducto=parseInt(precioProducto);
		}

		cantidadProducto = prompt("Ingrese la cantidad de producto");
		cantidadProducto=parseInt(cantidadProducto);
		while(cantidadProducto < 1 || cantidadProducto > 1000 || isNaN(cantidadProducto))
		{
			cantidadProducto = prompt("Ingrese la cantidad de producto");
			cantidadProducto=parseInt(cantidadProducto);
		}

		fabricante = prompt("Ingrese el fabricante");
		marca=prompt("Ingrese la marca");

		switch(tipoProducto)
		{
			case "barbijo":
				cantidadBarbijo = cantidadBarbijo + cantidadProducto;
				contadorBarbijo++;
				break;

			case "alcohol":
				if(precioProducto < precioAlcohol || banderaAlcohol == true)
				{
					precioAlcohol = precioProducto;
					cantidadMinimaAlcohol = cantidadProducto;
					fabricanteAlcohol= fabricante;
				}
				cantidadAlcohol = cantidadAlcohol + cantidadProducto;
				contadorAlcohol++;
				break;

			case "jabon":
				cantidadJabon = cantidadJabon + cantidadProducto;
				contadorJabon++;
				break;		
		}

		contadorProductos++;

	}

	document.write("Del alcohol mas barato se compraron "+cantidadMinimaAlcohol+", del fabricante " +fabricanteAlcohol+"<br/>");

	if(cantidadJabon > cantidadAlcohol && cantidadJabon > cantidadBarbijo)
	{
		promedioMayor = cantidadJabon/contadorJabon;
		document.write("EL producto con mas cantidad es el jabon y el promedio por compra es "+promedioMayor+"<br>");
	}
	else
	{
		if(cantidadBarbijo > cantidadAlcohol && cantidadBarbijo > cantidadJabon)
		{
			promedioMayor = cantidadBarbijo/contadorBarbijo;
			document.write("EL producto con mas cantidad es el barbijo y el promedio por compra es "+promedioMayor+"<br>");
		}
		else
		{
			promedioMayor = cantidadAlcohol/contadorAlcohol;
			document.write("EL producto con mas cantidad es el alcohol, y el promedio por compra es "+promedioMayor+"<br>");
		}
	}

	document.write("hay " + cantidadJabon +" cantidad de jabones<br>");
}
