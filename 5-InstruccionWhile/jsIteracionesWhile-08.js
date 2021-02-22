/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;

	while(respuesta == true)
	{
		
    	acumulador = prompt("Ingrese un numero");
    	acumulador = parseInt(acumulador);

    	if(acumulador < 0)
    	{
    		multiplicacionNegativos = multiplicacionNegativos * acumulador;
    	}
    	else
    	{
    		sumaPositivos = sumaPositivos + acumulador;
    	} 
    	
    	contador++;
    	respuesta = confirm("Desea continuar?");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN