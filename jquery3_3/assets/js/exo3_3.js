

$(function() {
  // on crée une valeur aléatoire entre 0 et 100
  var random = Math.floor(Math.random()*101);
  var count = 0;
  // On initialise le compteur  de coups
    $('#submit').click(function() {
      // au clic on récupère la saisie utilisateur et on la stocke.
    var test = $('#nombre').val();
// On incrémente le nombre de coups.
    count++;
  //Si les deux valeurs sont égales, on affiche Correct et on donne la valeur du compteur
    if(test == random){
      alert('Correct !');
 //Si la saisie utilisateur est inférieure au nombre généré, on préviens l'utilisateur
    }else if (test<random) {
      alert('Plus');
  //Si la saisie utilisateur est supérieure au nombre généré, on préviens l'utilisateur
    }else if (test>random) {
      alert('Mois');
  //Si la saisie utilisateur n'est pas un nombre, on préviens l'utilisateur.
    }else{
      alert('Veuillez entrer un nombre !');
    }
  });
});
