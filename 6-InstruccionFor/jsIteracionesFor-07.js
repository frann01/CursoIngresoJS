function mostrar()
{
	var numero;
	var contador=0;

	numero= prompt("ingrese un numero");
	numero=parseInt(numero);

	for(i=2;i<=numero;i++)
	{
		if(numero%i==0)
		{
			document.write(i+"<br>");
			contador++;
		}
	}
	document.write("La cantidad de divisores es "+contador+"<br>");
}