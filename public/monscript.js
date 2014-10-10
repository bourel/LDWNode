
(function(){

 $('#toggleBtn').click(function(){
   $('#title').slideToggle(2000, function(){
     if($('#title').css('display') == 'none'){
       console.info("Le titre est masqué");
     }
   });
 });

})();
