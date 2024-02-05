// 1 - A l'aide des boites de dialogue du navigateur, créez un console.log qui réalise l'addition de deux nombres entiers entrés par l'utilisateur.
var nombre1 = prompt("Entrez un nombre entier");
var nombre2 = prompt("Entrez un autre nombre entier");
console.log(Number(nombre1) + Number(nombre2)); // erreur : il faut convertir les chaînes de caractères en nombres

//Fini

// 2 - Réalisez une fonction "nombrePair" qui affiche dans la console les nombres pairs de 0 à 100.
function nombrePair() {
  for (var i = 0; i <= 100; i= i+2) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
nombrePair();

//Fini

// 3 - Créez une fonction qui génère un nombre entre 0 et 1 dans la console.
function nombreAleatoire() {
  var nombre = Math.random(); // code manquant : il faut appeler la fonction Math.random()
  console.log(nombre); 
}
nombreAleatoire();

//Fini

// 4 - Trouvez comment arrondir ce nombre et affichez le.
function arrondirNombre(nombre) {
  var arrondi = Math.round(nombre); // code non fonctionnel : il faut passer le nombre en paramètre de la fonction Math.round()
  console.log(arrondi);
}
arrondirNombre(1.7);

//Fini

// 5 - Générez un nombre entre 0 et 1000, demandez un chiffre à l'utilisateur et affichez dans la console si votre nombre est divisible par le chiffre de l'utilisateur.
var nombre = Math.floor(Math.random() * 1000); // code manquant : il faut utiliser la fonction Math.floor() pour obtenir un nombre entier
var chiffre = prompt("Entrez un chiffre");
if (nombre % Number(chiffre) === 0) {
  console.log("Le nombre " + nombre + " est divisible par " + chiffre);
} else {
  console.log("Le nombre " + nombre + " n'est pas divisible par " + chiffre);
}

//Fini

// 6 - Affichez une boîte "alert" lorsque l'utilisateur fait un clic droit.
window.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // code manquant : il faut empêcher le comportement par défaut du clic droit
  alert("Vous avez fait un clic droit");
});



// 7 - Changez la couleur du titre h1 au chargement de la page.
window.addEventListener("load", function () {
  var titre = document.getElementByName("h1"); // erreur : il faut utiliser le sélecteur "h1" et non l'id "h1"
  titre.style.color = "red";
});

// 8 - Faites une boucle qui affiche le contenu du tableau js "petitTableau1" dans la console
var petitTableau1 = ["un", "deux", "trois"];
for (var i = 0; i < petitTableau1.length; i++) {
  console.log(petitTableau1[i]);
}

// 9 - Faites une boucle qui insère une <div> pour chaque item du tableau js "petitTableau2" avec son contenu à l'intérieur.
var petitTableau2 = ["quatre", "cinq", "six"];
var body = document.body; // code manquant : il faut sélectionner l'élément body
for (var i = 0; i < petitTableau2.length; i++) {
  var div = document.createElement("div"); // code manquant : il faut créer un élément div
  div.textContent = petitTableau2[i]; // code manquant : il faut assigner le contenu du tableau à la propriété textContent du div
  body.appendChild(div); // code manquant : il faut ajouter le div au body
}

// 10 - Créez une variable "grandTableau" et insérez y le contenu des deux petits tableaux précédents
var grandTableau = petitTableau1.concat(petitTableau2); // code non fonctionnel : il faut utiliser la méthode concat() pour fusionner les deux tableaux
console.log(grandTableau);
