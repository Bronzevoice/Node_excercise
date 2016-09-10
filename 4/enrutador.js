function enrutar(manejador, ruta, respuesta){
	console.log("Voy a rutear algo para " + ruta);
	if(typeof manejador[ruta] === 'function'){	
		return manejador[ruta](respuesta);
	}else{
		console.log("No existe una funcion para esta ruta " + ruta);
	}
}

exports.enrutar = enrutar;
