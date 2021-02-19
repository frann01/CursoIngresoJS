function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var resultado;

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
	
	resultado = parseInt(resultado);

	txtIdSuma.value = resultado;
	txtIdPromedio.value = resultado/5;


}//FIN DE LA FUNCIÓN