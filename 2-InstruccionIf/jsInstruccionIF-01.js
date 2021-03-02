function mostrar()
{
		//validacion palabras
		variable = prompt("");
		variable=variable.toLowerCase();
		while(variable != "" && variable != "" && variable != "")
		{
			variable = prompt("");
			variable=variable.toLowerCase();
		}



		//validacion numeros
		variable = prompt("");
		variable=parseInt(variable);
		while(variable < 0 || isNaN(variable) || variable>100)
		{
			variable = prompt("");
			variable=parseInt(variable);
		}



		//palabras simple
		variable = prompt("");
		while(isNaN(variable)== false)
		{
			variable = prompt("");
			
		}



		//numero simple
		variable = prompt("");
		while(isNaN(variable))
		{
			variable = prompt("");
		}



		//switch 4 casos
		switch(variable)
		{

			case "caso 1":
				
				break;

			case "caso 2":
				
				break;

			case "caso 3":
				
				break;

			case "caso 4":
				
				break;				
		}



		//sacar menor
		if(bandera == true || variable  < pesoGatoLiviano)
		{
			pesoGatoLiviano=variable;
		}



		//sacar mayor
		if(bandera == true || variable  > pesoGatoLiviano)
		{
			pesoGatoLiviano=variable;
			variable2=variable3;
		}



		//sacar mayor entre 3
		if(variable1 >  variable2 && variable1 > variable 3)
		{
			
			document.write("EL tipo con mas temperatura es Perros"+"<br/>");
		}
		else
		{
			if(variable 3 > variable2)
			{
				document.write("EL tipo con mas temperatura es Otra"+"<br/>");
			}
			else
			{
				document.write("EL tipo con mas temperatura es Gatos"+"<br/>");
			}
		}


		//sacar mayor entre 5
		if(variable1 >  variable2 && variable1 > variable3 && variable1 > variable4 && variable1 > variable5)
		{
			
			document.write(""+"<br/>");
		}
		else
		{
			if(variable3 > variable2 && variable3 > variable4 && variable3 > variable5)
			{
				document.write(""+"<br/>");
			}
			else
			{
				if(variable2 > variable4 && variable2 > variable5)
				{
					document.write(""+"<br/>");
				}
				else
				{
					if(variable5 > variable4)
					{
						document.write(""+"<br/>");
					}
					else
					{
						document.write(""+"<br/>");
					}
				}
			}
		}



		//chequear si hay algo
		if(banderaNegativos == true)
		{
			document.write("No hay negativos"+"<br/>");
		}
		else
		{
			document.write("Negativo maximo: "+negativoMaximo+"<br/>");
		}



		//verificar si una variable da undefined(palabras)
		if(variable == undefined)
		{
			document.write("no"+"<br/>");
		}
		else
		{
			document.write(+"<br/>");
		}

		//verificar si una variable es isNaN (promedios)
		if(isNaN(promediopeso))
		{
			document.write("No se pudo resolver"+"<br/>");
		}
		else
		{
			document.write("El promedio de peso es  "+promediopeso+"<br/>");
		}

}