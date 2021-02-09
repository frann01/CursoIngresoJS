function mostrar()
{
	let numero;

	numero = Math.random()*10;
	numero = Math.round(numero);

	if(numero > 8)
	{
		alert("Nota: " + numero +" Excelente");
	}
	else 
	{
		if(numero > 4 && numero < 9)
		{
			alert("Nota: " + numero +" Aprobo");
		}
		else
	    {
		    alert("Nota: " + numero + " Vamos, la proxima se puede");
	    }
		
	}
	
	


}//FIN DE LA FUNCIÓN