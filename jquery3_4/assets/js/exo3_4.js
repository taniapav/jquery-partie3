// Déclaration de ma fonction qui englobe tout
 $(function(){
 //fonction qui va aggrandir le rectangle de 10 px au clic sur le bouton "aggrandir".
  $('#b1').click(function(){
//on va stoké dans la variable firstColor la couleur de base du rectangle.
//$('.rectangle').css('background-color') récupére la valeur de la propriété background-color parce qu'on n'a pas précisé de valeur.
    var firstColor = $('.rectangle').css('background-color');
     $('#changeHeight').click(function(){
    //on stock la hauteur de réctangle dans la variable "rectangleHeight".
    //$('.rectangle').height(); récupére la hauteur du réctangle parce qu'on n'a pas précisé de valeur.
     var rectangleHeight = $('.rectangle').height();
    //selon la hauteur qu'on récupere a chaque click, on y ajoute 10 ou on la remet a 10.
     	if (rectangleHeight < 100 ){
     		rectangleHeight += 10;
     }else{
     		rectangleHeight = 10;
  }
 //    $('.rectangle').animate({height: '+=10px'});
 //     var height = $('.rectangle').height();
 //     if(height >= 100){
 //    $('.rectangle').animate({height: '10px'});
  });
//Fonction qui met le rectangle en vert.
   $('#b2').click(function(){
   $('.rectangle').css('background-color', 'green');
  });
 //Fonction qui remet la couleur d'origine au rectangle.
   $('#b3').click(function(){
   $('.rectangle').css('background-color', firstColor);
  });
//Fonction qui va cacher le rectangle.
   $('#b4').click(function(){
   $('.rectangle').hide();
  });
//Fonction qui va afficher le rectangle.
   $('#b5').click(function(){
   $('.rectangle').show();
  });
});
