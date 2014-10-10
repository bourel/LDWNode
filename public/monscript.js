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

 $('#cssBtn').click(function(){
   var couleur = 'rgba(' + randomColor() + ', '
			 + randomColor() + ', ' 
			 + randomColor() + ', ' 
			 + Math.random() + ')';
   $('div').css('background-color', couleur);
 });

});
