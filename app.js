
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
  
  console.log("Debut de la lecture");	
  fs.readFile(fichier, function(err, data){	
    console.log("Fin de la lecture du fichier");
    res.writeHead(codeReponse, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  console.log("Fin de la function");
});

server.listen(PORT);

console.log('Le serveur HTTP écoute http://localhost:' + PORT);
