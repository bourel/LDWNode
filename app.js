
var PORT = 8000;

// chargement du module Express depuis le répertoire "node_modules"
var express = require('express'), 
    app = express();

// Rends le CONTENU du répertoire disponible de manière statique
app.use(express.static(__dirname + '/public'));

// route '/' renvoie le fichier de la page d'accueil
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
// route '/about' renvoie le fichier d'a propos
app.get('/about', function(req, res){
  res.sendFile(__dirname + '/about.html');
});

// route '/data/list' renvoie une liste de données
app.get('/data/list', function(req, res){
  var list = [ 
    { name: "Annick", state: "TAG", location: "Brest" },
    { name: "Annegrete", state: "OFF", location: "Quimper" },
    { name: "Agathe", state: "FREE", location: "Quimper" },
    { name: "Angelique", state: "DISCONNECTED", location: "Rennes" },
    { name: "Annabelle", state: "OFF", location: "Quimper" },
    { name: "Andrée", state: "TAG", location: "Brest" } 
  ];
  res.json(list);
});

var server = app.listen(PORT, function() {
    console.log('Le serveur HTTP écoute %d', server.address().port);
});
