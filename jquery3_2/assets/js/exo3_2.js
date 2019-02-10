$(function() {
var count = 0;

  $('#button1').click(function() {  //clique sur le bouton +
    count++;  //ajoute 1 au compteur
  $('#Number').val('My number is: '+count);
  })
  $('#button2').click(function() {  //clique sur le bouton -
    count--;  // retire 1 au compteur
  $('#Number').val('My number is: '+count);
  })
<label fr="lasteName">Nombre de clicque : </label>
});
