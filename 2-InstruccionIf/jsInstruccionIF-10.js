function mostrar()
{
	let numero;

	numero = Math.random()*10+1;
	numero = Math.round(numero);

	if(numero > 8)
	{
		alert("nota: " + numero +" Excelente");
	}
	else if(numero > 4 && numero < 9)
	{
		alert("nota: " + numero +" Aprobo");
	}
	else
	{
		alert("nota: " + numero + " Vamos, la proxima se puede");
	}
	


}//FIN DE LA FUNCIÓN