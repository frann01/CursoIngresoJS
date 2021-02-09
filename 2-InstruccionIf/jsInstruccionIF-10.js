function mostrar()
{
	let numero;

	numero = (Math.random()*9) + 1;
	numero = Math.round(numero);

	if(numero > 8)
	{
		alert("Excelente");
	}
	else 
	{
		if(numero > 4 && numero < 9)
		{
			alert("Aprobo");
		}
		else
	    {
		    alert("Vamos, la proxima se puede");
	    }
		
	}
}