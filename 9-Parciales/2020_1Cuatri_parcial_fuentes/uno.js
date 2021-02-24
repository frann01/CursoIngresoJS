
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

	while(contadorProductos<3)
	{
		tipoProducto = prompt("Ingrese el tipo de producto");
		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Ingrese el tipo de producto");
		}
		
		precioProducto = prompt("Ingrese el precio de producto");
		precioProducto=parseInt(precioProducto);
		while(precioProducto > 300 || precioProducto < 100)
		{
			precioProducto = prompt("Ingrese el precio de producto");
			precioProducto=parseInt(precioProducto);
		}

		cantidadProducto = prompt("Ingrese la cantidad de producto");
		cantidadProducto=parseInt(cantidadProducto);
		while(cantidadProducto < 1 || cantidadProducto > 1000)
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
				precioBarbijo = precioProducto;
				fabricante = fabricanteBarbijo;
				break;

			case "alcohol":
				if(precioProducto < precioAlcohol || banderaAlcohol == true)
				{
					precioAlcohol = precioProducto;
					cantidadMinimaAlcohol = cantidadProducto;
					fabricante = fabricanteAlcohol;
				}
				cantidadAlcohol = cantidadAlcohol + cantidadProducto;
				break;

			case "jabon":
				cantidadJabon = cantidadJabon + cantidadProducto;
				precioJabon = precioProducto;
				fabricante = fabricanteJabon;
				break;		
		}

		contadorProductos++;

	}

	document.write("Alcohol mas barato se compraron "+cantidadMinimaAlcohol+" del fabricante" +fabricanteAlcohol+"<br/>");

	if(cantidadJabon > cantidadAlcohol && cantidadJabon > cantidadBarbijo)
	{
		promedioMayor = cantidadJabon/precioJabon;
		document.write("EL producto con mas cantidad es el jabon");
	}
	else
	{
		if(cantidadBarbijo > cantidadAlcohol && cantidadBarbijo > cantidadJabon)
		{
			promedioMayor = cantidadBarbijo/precioBarbijo;
			document.write("EL producto con mas cantidad es el barbijo");
		}
		else
		{
			promedioMayor = cantidadAlcohol/precioAlcohol;
			document.write("EL producto con mas cantidad es el alcohol");
		}
	}

	document.write("hay " + cantidadJabon +" cantidad de jabones");
}
