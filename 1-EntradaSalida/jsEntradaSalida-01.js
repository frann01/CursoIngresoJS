/*
2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado*/
function mostrar()
{
	var tipoProducto;
	var nombreProducto;
	var importeProducto;
	var procedenciaProducto;
	var pesoProducto;
	var respuesta=true;
	var contadorLimpieza=0;
	var contadorComestible=0;
	var contadorOtros= 0;
	var masPesadoComes;
	var nombrePesadoComes;
	var contadorProductos=0;
	var mayorImporte;
	var nombreMasCaro;
	var nombreBaratoElaborados;
	var precioBaratoELaborados;
	var contadorElaborados=0;
	var acumuladorPesoLimpieza=0;
	var acumuladorPesoOtros=0;
	var acumuladorPesoComestibles=0;
	var promedioPesoLimpieza;
	var promedioPesoOtros;
	var promedioPesoComestibles;
	var porcentajeELaborados;

	while(respuesta == true)
	{
		//Ingreso de datos
		tipoProducto = prompt("Ingrese el tipo de producto");
		tipoProducto=tipoProducto.toLowerCase();
		while(tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros")
		{
			tipoProducto = prompt("Ingrese el tipo de producto");
			tipoProducto=tipoProducto.toLowerCase();
		}

		nombreProducto = prompt("Ingrese el nombre del producto");
		
		importeProducto = prompt("Ingrese el importe del producto");
		importeProducto=parseInt(importeProducto);
		while(importeProducto < 0 || isNaN(importeProducto))
		{
			importeProducto = prompt("Ingrese el importe del producto");
			importeProducto=parseInt(importeProducto);
		}

		procedenciaProducto = prompt("Ingrese la procedencia de producto");
		procedenciaProducto=procedenciaProducto.toLowerCase();
		while(procedenciaProducto != "importado" && procedenciaProducto!= "elaborado" && procedenciaProducto != "nacional")
		{
			procedenciaProducto = prompt("Ingrese la procedencia de producto");
			procedenciaProducto=procedenciaProducto.toLowerCase();
		}

		pesoProducto = prompt("Ingrese el peso del producto");
		pesoProducto=parseInt(pesoProducto);
		while(pesoProducto>30 || isNaN(pesoProducto))
		{
			pesoProducto = prompt("Ingrese el peso del producto");
			pesoProducto=parseInt(pesoProducto);
		}

		switch(tipoProducto)
		{
			case "limpieza":
			contadorLimpieza++;
			acumuladorPesoLimpieza=acumuladorPesoLimpieza+pesoProducto;
			break;

			case "comestible":
			if(contadorComestible>0 || pesoProducto > masPesadoComes)
			{
				masPesadoComes=pesoProducto;
				nombrePesadoComes=nombreProducto;
			}
			acumuladorPesoComestibles=acumuladorPesoComestibles+pesoProducto;
			contadorComestible++;

			break;

			case "otros":
			acumuladorPesoOtros=acumuladorPesoOtros+pesoProducto;
			contadorOtros++;
			break;
		}


		if(procedenciaProducto="elaborado")
		{
			if(contadorElaborados>0 || importeProducto < precioBaratoELaborados)
			{
				precioBaratoELaborados=importeProducto;
				nombreBaratoElaborados=nombreProducto;

			}
			contadorElaborados++;
		}

		if(contadorProductos>0 || importeProducto > mayorImporte)
			{
				mayorImporte= importeProducto;
				nombreMasCaro=nombreProducto;
			}

		contadorProductos++;
		respuesta= confirm("Desea continuar?");
		
	}

	porcentajeELaborados= (contadorElaborados*100)/ contadorProductos;
	promedioPesoComestibles=acumuladorPesoComestibles/contadorComestible;
	promedioPesoOtros=acumuladorPesoOtros/contadorOtros;
	promedioPesoLimpieza=acumuladorPesoLimpieza/contadorLimpieza;

	if(contadorComestible >  contadorLimpieza && contadorComestible > contadorOtros)
	{
		
		document.write("EL tipo con mas cantidad es Comestibles"+"<br/>");
	}
	else
	{
		if(contadorOtros > contadorLimpieza && contadorOtros > contadorComestible)
		{
			document.write("EL tipo con mas cantidad es Otros"+"<br/>");
		}
		else
		{
			document.write("EL tipo con mas cantidad es Limpieza"+"<br/>");
		}
	}
	document.write("El mas pesado de los comestibles es " + nombrePesadoComes+"<br/>");
	document.write("El mas caro de los productos es " + nombreMasCaro+"<br/>");
	document.write("El mas barato de los elaborados es " + nombreBaratoElaborados+"<br/>");
	document.write("El promedio de peso de limpieza, comestibles y otros es "+promedioPesoLimpieza+", "+promedioPesoComestibles+"; "+promedioPesoOtros+"<br/>");
	document.write("El porcentaje de elaborados es " + porcentajeELaborados+"<br/>");
}

