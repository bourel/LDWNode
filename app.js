
var PORT = 8000;

// chargement du module Express depuis le répertoire "node_modules"
var express = require('express'), 
    app = express();

// route '/' renvoie le fichier de la page d'accueil
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// route '/about' renvoie le fichier d'a propos
app.get('/about', function(req, res){
  res.sendFile(__dirname + '/about.html');
});

var server = app.listen(PORT, function() {
    console.log('Le serveur HTTP écoute %d', server.address().port);
});
