function inicio(){
	console.log("Has entrado en la página de inicio");
	return "Inicio";
}

function pagina1(){
	console.log("Has entrado en la página número 1");
	return "Pagina1";
}

function pagina2(){
	console.log("Has entrado en la página número 2");
	return "Pagina2";
}

function favicon(){
	console.log("Se ha pedido favicon");
	return "";
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;