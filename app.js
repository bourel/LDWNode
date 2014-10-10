
var PORT = 8000;

// Chargement du module http (un module Node.js natif)
var http = require('http'),
    server;

// Création d'un serveur HTTP
server = http.createServer(function (req, res) {
  console.log(req.url);
  // Début de la fonction de callback : 
  // cette fonction est appelé à chaque requête du client
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<!DOCTYPE html>' +
	'<html>' +
	  '<head>' +
	    '<title>TP Node</title>' +
	  '</head>' +
	  '<body>' +
	    '<h1>TP Node.js</h1>' +
	  '</body>' +
	'</html>');
});

server.listen(PORT);

console.log('Le serveur HTTP écoute http://localhost:' + PORT);
