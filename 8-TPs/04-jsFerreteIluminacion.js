/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadLamp;
 	let marcaSel;
 	let precioDesc;
 	let precioLamp;
 	let descuento;
 	let IIBB;

 	IIBB = 0;
 	precioLamp = 35;

 	cantidadLamp = document.getElementById('txtIdCantidad').value;
 	cantidadLamp = parseInt(cantidadLamp);
 	marcaSel = document.getElementById('Marca').value;

 	switch(cantidadLamp)
 	{
 		case 5:

 			switch(marcaSel)
 			{
 				case "ArgentinaLuz":
 					descuento = 0.4;
 					break;

 				default:
 					descuento = 0.3;
 					break;	
 			}
 		break;
 		
 		case 4:

 			switch(marcaSel)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					descuento = 0.25;
 					break;

 				default:
 					descuento = 0.2;
 					break;

 			}
 		break;
 		
 		case 3:

 			switch(marcaSel)
 			{
 				case "ArgentinaLuz":
 					descuento = 0.15;
 					break;

 				case "FelipeLamparas":
 					descuento = 0.1;
 					break;

 				default:
 					descuento = 0.05;
 					break;		
 			}

 		case 1:
 		case 2:
 			descuento = 0;
 			break;

 		default:
 			descuento = 0.5;
 			break;

 	}

 	precioDesc = (precioLamp * cantidadLamp);
 	precioDesc = precioDesc - (precioDesc * descuento);

 	if (precioDesc > 120) 
 	{
 		precioFinal = precioDesc + (precioDesc * 0.10);
 		IIBB = precioDesc * 0.10;
 		alert("IIBB usted pago: " + IIBB);
 	}
 	else
 	{
 		precioFinal = precioDesc;
 	}

 	document.getElementById('txtIdprecioDescuento').value = precioFinal;
}



/function CalcularPrecio () 
{
 	let cantidadLamp;
 	let marcaSel;
 	let precioDesc;
 	let precioLamp;
 	let descuento;
 	let IIBB;

 	IIBB = 0;
 	precioLamp = 35;

 	cantidadLamp = document.getElementById('txtIdCantidad').value;
 	marcaSel = document.getElementById('Marca').value;

 	if(cantidadLamp > 5)
 	{
 		descuento = 0.5;
 	}
 	else
 	{
 		if(cantidadLamp == 5)
 		{
 			if(marcaSel == "ArgentinaLuz") 
 			{
 				descuento = 0.4;
 			}
 			else
 			{
 				descuento = 0.3;
 			}
 		}
 		else
 		{
 			if(cantidadLamp == 4)
 		    {
 			    if (marcaSel == "ArgentinaLuz" || marcaSel == "FelipeLamparas") 
 			    {
 				    descuento = 0.25;
 			    }
 			    else
 			    {
 				    descuento = 0.20;
 			    }
 			}
 			else
 			{
 				if (cantidadLamp == 3) 
 		        {
 			        if (marcaSel == "ArgentinaLuz") 
 			        {
 				        descuento = 0.15;
 			        }
 			        else
 			        {
 			        	if (marcaSel == "FelipeLamparas") 
 			            {
 				            descuento = 0.10;
 			            }
 			            else
 			            {
 				            descuento = 0.05;
 			            }
 			        }
 		        }
 			}    
 		}		
 	}

 	precioDesc = (precioLamp * cantidadLamp);
 	precioDesc = precioDesc - (precioDesc * descuento);

 	if (precioDesc > 120) 
 	{
 		precioFinal = precioDesc + (precioDesc * 0.10);
 		IIBB = precioDesc * 0.10;
 		alert("IIBB usted pago: " + IIBB);
 	}
 	else
 	{
 		precioFinal = precioDesc;
 	}

 	document.getElementById('txtIdprecioDescuento').value = precioFinal;
}
/