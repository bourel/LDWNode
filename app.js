
var PORT = 8000;

// Chargement du module http (un module Node.js natif)
var http = require('http'),
    fs = require('fs'),
    server;

// Création d'un serveur HTTP
server = http.createServer(function (req, res) {
  var fichier = "404.html",
      codeReponse = 404;

  console.log(req.url);
  // Début de la fonction de callback : 
  // cette fonction est appelé à chaque requête du client
  if(req.url == "/"){
    fichier = "index.html";
    codeReponse = 200;
  } else if(req.url == "/about"){
    fichier = "about.html";
    codeReponse = 200;
  } 

  fs.readFile(fichier, function(err, data){	
    res.writeHead(codeReponse, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

server.listen(PORT);

console.log('Le serveur HTTP écoute http://localhost:' + PORT);
