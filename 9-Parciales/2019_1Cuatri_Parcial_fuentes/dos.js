function mostrar()
{

	var primerPeso;
	var segundoPeso;
	var primerNombre;
	var segundoNombre;
	var sumaPeso;
	var promedioPeso;

	primerNombre = prompt("Ingrese el nombre de la primer persona");
	segundoNombre = prompt("Ingrese el nombre de la segunda persona");
	primerPeso = prompt("Ingrese el peso de la primer persona");
	primerPeso=parseInt(primerPeso);
	segundoPeso = prompt("Ingrese el peso de la segunda persona");
	segundoPeso=parseInt(segundoPeso);

	sumaPeso=primerPeso+segundoPeso;
	promedioPeso=sumaPeso/2;

	alert("ustedes se llaman "+ primerNombre +" y "+ segundoNombre+", pesan "+primerPeso+
		" y "+segundoPeso+" kilos, que sumados son "+sumaPeso+
		" kilos y el promedio de peso "+promedioPeso);
}

