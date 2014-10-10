
var PORT = 8000;

// Chargement du module http (un module Node.js natif)
var http = require('http'),
    server;

// Création d'un serveur HTTP
server = http.createServer(function (req, res) {
  console.log(req.url);
  // Début de la fonction de callback : 
  // cette fonction est appelé à chaque requête du client
  if(req.url == "/"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<!DOCTYPE html>' +
	'<html>' +
	  '<head>' +
	    '<title>TP Node</title>' +
	  '</head>' +
	  '<body>' +
	    '<h1>TP Node.js</h1>' +
	    '<p>Page d\'accueil</p>' +	
	  '</body>' +
	'</html>');
  } else if(req.url == "/about"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<!DOCTYPE html>' +
	'<html>' +
	  '<head>' +
	    '<title>TP Node</title>' +
	  '</head>' +
	  '<body>' +
	    '<h1>TP Node.js</h1>' +
	    '<p>A propos</p>' +
	  '</body>' +
	'</html>');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<!DOCTYPE html>' +
	'<html>' +
	  '<head>' +
	    '<title>TP Node</title>' +
	  '</head>' +
	  '<body>' +
	    '<h2>Argh page non trouvée</h1>' +
	  '</body>' +
	'</html>');
  }
});

server.listen(PORT);

console.log('Le serveur HTTP écoute http://localhost:' + PORT);
