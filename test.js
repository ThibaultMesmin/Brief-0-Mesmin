// 7 - Changez la couleur du titre h1 au chargement de la page.
window.addEventListener("load", function () {
  var titre = document.getElementsByClassName("h1"); // erreur : il faut utiliser le sélecteur "h1" et non l'id "h1"
  titre.style.color = "red";
});