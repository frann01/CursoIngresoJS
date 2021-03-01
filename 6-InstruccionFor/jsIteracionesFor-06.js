function mostrar()
{
	var numero;
	var contador=0;

	numero= prompt("ingrese un numero");
	numero=parseInt(numero);

	for(i=0;i<=numero;i=i+2)
	{
		document.write(i+"<br>");
		contador++;
	}
	document.write("La cantidad de pares es "+contador+"<br>");
}