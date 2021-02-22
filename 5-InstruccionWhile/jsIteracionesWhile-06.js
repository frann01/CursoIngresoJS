function mostrar()
{
	var contador;
	var acumulador;
	var resultado;
	var promedio;

	contador = 0;
	acumulador = 0;
	resultado = 0;

	while(contador < 5)
    {
    	acumulador = prompt("Ingrese un numero");
    	acumulador = parseInt(acumulador); 
    	resultado = resultado + acumulador;
    	contador++;
    }
	
	promedio= resultado/5;

	txtIdSuma.value = resultado;
	txtIdPromedio.value = promedio;


}//FIN DE LA FUNCIÓN