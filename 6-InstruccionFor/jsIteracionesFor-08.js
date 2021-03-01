function mostrar()
{
	var numero;
	var contador=0;
	var mensaje;

	numero= prompt("ingrese un numero");
	numero=parseInt(numero);

	for(i=2;i<=numero;i++)
	{
		if(i!=numero)
		{
			if(numero%i==0)
			{ 
				mensaje="No es primo";
				break;
			}
			else
			{
				mensaje="Es primo";
			}
		}	
	}
	alert(mensaje);
	
}