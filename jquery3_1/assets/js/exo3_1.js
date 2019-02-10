$(function() {
var count = 0;

  $("#button").click(function() {
// ajoute 1 au compteur
    count++;
// fonction val permet de définir la valeur d'un champs text comme ex: input ou text textarea
    $("#counter").val("My current count is: '+ count);
  });

});
