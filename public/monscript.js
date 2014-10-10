// Utilise jQuery pour exécuter ce javascript une fois la page chargée
$(document).ready(function() {

 $('#toggleBtn').click(function(){
   $('#title').slideToggle(2000, function(){
     if($('#title').css('display') == 'none'){
       console.info("Le titre est masqué");
     }
   });
 });

 // Génère un entier entre 0 et 255
 function randomColor(){
  return Math.floor(Math.random()*256);
 }

 // Modification de la couleur de fond
 $('#cssBtn').click(function(){
   var couleur = 'rgba(' + randomColor() + ', '
			 + randomColor() + ', ' 
			 + randomColor() + ', ' 
			 + Math.random() + ')';
   $('div').css('background-color', couleur);
 });

 /////////////////////////////////////////////
 // Affichage de la liste par un appel AJAX //
 /////////////////////////////////////////////

 var bouton = $('#showList');
 
 // lors du clic sur le bouton, appelle la fonction d'affichage
 bouton.click(afficheListe);

 function afficheListe(){
   // récupère le <div> parent du bouton
   var parent = bouton.parent('div');
   
   // exécute une requête HTTP GET
   $.ajax({
     url: "data/list",		// l'URL demandée dans la requête
     type: "GET",		// le type de requête
     dataType: "json",		// type de données attendu dans la réponse
     success: function(data){	// fonction appelée si l'appel à fonctionné
	var i, div;
	console.info("Données reçues");
        for(i = 0; i < data.length; i++){
          div = $('<div class="elt ' + data[i].state + '">');		// création d'un element <div>
	  div.append('<p class="name">'+ data[i].name + '</p>');	// ajout du contenu
	  div.append('<p class="state">Etat : '+ data[i].state + '</p>');
          div.append('<p><a href="https://www.google.fr/maps/place/' + data[i].location + '/">' + data[i].location + '</a></p>');
          parent.append(div);		// ajout du div à l'élément parent
        }
     },
     error: function(jqXHR, textStatus, err){	// fonction appelée en cas d'erreur
       console.error(err);
     }    
   });
 }
});
