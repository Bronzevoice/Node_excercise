var servidor = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar, manejador){
	function arrancaServidor (requiere, respuesta){

		var ruta = url.parse(requiere.url).pathname;

		if(ruta == "/"){
			ruta = "index.html";
		}


		console.log("Alguien se ha conectado");
		/*var contenido = enrutar(manejador,ruta,respuesta);*/

		var registro = fs.createWriteStream('registro.txt', {'flags':'a'});
		registro.write(ruta +'\n');

		var contenido = fs.readFileSync('www/'+ ruta);

		
		respuesta.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
		respuesta.write(contenido);
		respuesta.end();
		
	}

		servidor.createServer(arrancaServidor).listen(8080);
}

exports.iniciar = iniciar;