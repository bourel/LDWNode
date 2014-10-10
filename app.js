
var PORT = 8000;

// Chargement du module http (un module Node.js natif)
var http = require('http'),
    server;

// Création d'un serveur HTTP
server = http.createServer(function (req, res) {
  // Début de la fonction de callback : 
  // cette fonction est appelé à chaque requête du client
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('It works\n');
});

server.listen(PORT);

console.log('Le serveur HTTP écoute http://localhost:' + PORT);
