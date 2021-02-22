/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var resultado;
	contador=0;
	acumulador=0;
	respuesta=true;
	resultado = 0;

	while(respuesta == true)
	{
		
    	acumulador = prompt("Ingrese un numero");
    	acumulador = parseInt(acumulador); 
    	resultado = resultado + acumulador;
    	contador++;
    	respuesta = confirm("Desea continuar?");
	}

	txtIdSuma.value=resultado;
	txtIdPromedio.value=resultado/contador;

}//FIN DE LA FUNCIÓN