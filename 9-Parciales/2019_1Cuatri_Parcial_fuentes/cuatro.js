function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	var restaBandera=false;


	primerNumero=prompt("Ingrese el primer numero");
	segundoNumero=prompt("Ingrese el segundo numero");

	if(primerNumero==segundoNumero)
	{
		alert(primerNumero+segundoNumero);
	}
	else
	{
		segundoNumero=parseInt(segundoNumero);
	    primerNumero=parseInt(primerNumero);

		if (primerNumero>segundoNumero) 
		{
			resultado=primerNumero - segundoNumero;
			if(resultado>10)
			{
				alert("la resta es "+resultado+" y superó el 10");
			}
			else
			{
				alert("la resta es "+resultado);
			}
		}
		else
		{
			resultado= primerNumero +segundoNumero;
			alert("El resultado es "+resultado);
		}
	}

}
