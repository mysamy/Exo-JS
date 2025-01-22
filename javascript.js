let prenom = "Alex" ;
console.log(prenom) ;

let agelimit = 18;

console.log("quel age avez vous?") ;
let row = [5,6];
console.log(row) ;

// ! Exercice 1 : Déclaration et affichage
// !Objectif : Déclarer des variables et afficher leur contenu dans la console.
// 1. Déclare une variable nommée "prenom" et assigne-lui ton prénom.
// 2. Déclare une variable nommée "age" et assigne-lui ton âge.
// 3. Affiche les deux variables dans la console avec un message personnalisé.

// ? Bonjour, je m'appelle Alex et j'ai 25 ans.

// ! Exercice 2 : Concaténation de chaînes de caractères
// ! Objectif : Manipuler des chaînes de caractères avec des variables.
// 1. Déclare une variable "nom" avec une valeur de ton choix.
// 2. Déclare une variable "ville" avec une valeur de ton choix.
// 3. Crée une nouvelle variable "message" qui combine les deux variables précédentes pour former une phrase comme : 
//    "Je m'appelle [nom] et je vis à [ville]."
// 4. Affiche la variable "message" dans la console.

const nom = "Gnaway";
const ville ="casablanca";
const message = `les ${nom} exercent à ${ville} ` ;
const message1 = "les " + nom + " exerce,t a " + ville;
console.log(message);
console.log(message1);

// ! Exercice 3 : Opérations mathématiques
// ! Objectif : Manipuler des variables numériques.
// 1. Déclare deux variables "nombre1" et "nombre2", et assigne-leur des valeurs numériques.
// 2. Calcule leur somme, leur différence, leur produit et leur division, puis stocke chaque résultat dans une nouvelle variable.
// 3. Affiche chaque résultat dans la console avec un message explicatif.

// ? Exemple attendu dans la console :
// ? La somme est : 15
// ? La différence est : 5
// ? Le produit est : 50
// ? La division est : 2

// ! Exercice 4 : Incrémentation et décrémentation
// ! Objectif : Comprendre comment modifier les valeurs des variables.
// 1. Crée une variable "compteur" et assigne-lui la valeur 0.
// 2. Incrémente la valeur de "compteur" de 1.
// todo -> voir les operandes.
// 3. decrémente la valeur de "compteur" de 1.
// 4. Affiche le résultat dans la console.




let compteur = 0;
compteur = 1 ;
compteur++ ;
console.log(compteur);
compteur = compteur + 1;
console.log(compteur);
compteur += 2;
console.log(compteur);
// ! Exercice 5 : Changement dynamique de type
// ! Objectif : Comprendre que les variables en JavaScript peuvent changer de type.
// 1. Déclare une variable "age" avec une valeur initiale de ton choix.
// 2. Affiche son type dans la console.
// 3. Modifie la valeur de "age" pour la transformer en chaîne de caractères.
// 4. Affiche son nouveau type dans la console.
let age1 = 32;
console.log(typeof(age1));
age1 = toString(age1);
console.log(typeof(age1));




// 1. Déclare une variable "variable" avec une valeur numérique (par exemple, 42).
// 2. Change la valeur de cette variable pour qu'elle devienne une chaîne de caractères (par exemple, "quarante-deux").
// 3. Change la valeur de cette variable pour qu'elle devienne un booléen (par exemple, true).
// 4. Affiche chaque changement dans la console.
let banane = 42;
console.log(banane);
banane = "42";
console.log(banane);
banane = true;
console.log(banane);







// ! Exercice 6 : Hoisting avec var
// ! Objectif : Comprendre le concept de hoisting.
// voici un exemple de code :
console.log(a);
var a = 5;
console.log(a);
// 1. Que va afficher le premier console.log ?
// 2. Que va afficher le second console.log ?

//  ! Exercice 7 : Comparaison var et let
// ! Objectif : Comprendre la différence entre var et let.
// Consigne : Comparez le comportement de var et let. Que se passe-t-il dans chaque cas ? Expliquez la différence.
console.log(x);
var x = 10;


let y = 20;
console.log(y);
// ! Exercice 8 : Hoisting et réassignation
// ! Objectif : Comprendre le comportement du hoisting avec la réassignation.
//  Consigne : Analysez le code suivant. Que va afficher chaque console.log() ?
var z = 30;
console.log(z);
var z;
console.log(z);
z = 40;
console.log(z);


//  ! Exercice 9 : Hoisting dans les blocs
// ! Objectif : Comprendre le comportement du hoisting dans les blocs.
// Consigne : Observez le comportement du hoisting dans différents blocs. Prédisez les sorties.
console.log(w);
{
    var w = 50;
}
console.log(w);
{
    let v = 60;
}




// ! Exercice 10 : Hoisting et const
// ! Objectif : Comprendre le comportement du hoisting avec const.
// Consigne : Comparez le comportement de const avec celui de var en termes de hoisting. Que remarquez-vous ?

const u = 70;
console.log(u);
var t = 80;
console.log(t);

// ! Exercice 11 : Stockage des valeurs
// ! Objectif : Stocker les valeurs des champs dans des variables.
// 1. Récupère les valeurs des champs du formulaire dans des variables.
// 2. Affiche ces variables dans la console.

document.body.querySelector("form").addEventListener(
    "submit", function(event) {
        event.preventDefault();
        console.log("formulaire envoyé")
        const nomform = document.getElementById("nom").value;
        console.log(nomform);
    }
);





// Exercice 12 : Vérification de l'âge pour entrer dans une boîte de nuit
// Consigne : Écrivez un programme qui demande à l'utilisateur son âge et affiche un message indiquant s'il peut entrer dans une boîte de nuit (âge minimum requis : 18 ans).


// ?  let ageClient=prompt("Entrez votre age")
// if (ageClient>=18) {
//     alert("vous pouvez rentrez")
// } else {
//     alert("vous puvez pas rentrez")
// } 


// Exercice 13 : Vérification de la température pour savoir si on doit porter un manteau
// Consigne : Écrivez un programme qui demande à l'utilisateur la température extérieure et affiche un message indiquant s'il doit porter un manteau (température inférieure à 15°C).

// let temperature = prompt("quel temperature fait-il aujourd'hui ?")
// if (temperature >= 15) {
//     alert("vous etes bon")
// } else {
//     alert("vous devez mettre un manteau")
// }

// Exercice 14 : Vérification de la note pour savoir si l'élève a réussi l'examen
// Consigne : Écrivez un programme qui demande à l'utilisateur sa note à un examen et affiche un message indiquant s'il a réussi (note minimum requise : 50).

// Exercice 15 : Vérification du solde bancaire pour savoir si on peut faire un achat
// Consigne : Écrivez un programme qui demande à l'utilisateur son solde bancaire et le prix d'un article, puis affiche un message indiquant s'il peut effectuer l'achat (solde suffisant).

// let soldeBancaire = prompt("entrer le prix de l'article");
// let prixArticle = prompt("entrer le prix de l'article");
// if (soldeBancaire > prixArticle) {
//     alert("vous pour acheter l'article")
// }   else {
//     alert("vous navez pas les moyens")
// }

// Exercice 16 : Choix de film au cinéma en fonction de l'âge (utilisation de `switch`)
// Consigne : Écrivez un programme qui demande à l'utilisateur son âge et affiche les films qu'il peut regarder parmi une liste de films avec des classifications d'âge différentes (Tout public, 7+, 13+, 16+, 18+). Utilisez une structure `switch` pour déterminer les films accessibles en fonction de l'âge.
// let age = prompt("entrez votre age")
// let listeFilms = ["mickey","roi lion","harry potter","titanic","smile"]

// switch(true) {
//     case (age >= 3 && age <= 7):
//         alert("vous pouvez regarder mickey,roi lion ");
//         break;
//     case (age > 7 && age <= 13):
//         alert("vous pouvez regarder roi lion, harry potter, mickey");
//         break;
//     case (age >= 18):
//         alert("vous pouvez tous regarde");
//         break;
//     default:
//         alert("age non valide")
            
// }


let age = prompt("Quel est votre âge ?");
let films = [
  { titre: "Smile", ageMin: 18 },
  { titre: "Titanic", ageMin: 16 },
  { titre: "Harry potter", ageMin: 13 },
  { titre: "roi Lion", ageMin: 7 },
  { titre: "Mickey", ageMin: 3 }  
];

let filmsAccessibles = films.filter(film => age >= film.ageMin)
                            .map(film => film.titre);

if (filmsAccessibles.length > 0) {
  alert("Vous pouvez regarder les films suivants : " + filmsAccessibles.join(", "));
} else {
  alert("Désolé, aucun film n'est accessible pour votre âge.");
}


// Exercice 1: Déclarer une variable de type array et afficher le premier élément
let array = [1,3,5,7]
console.log(array[0]);
// Exercice 2: Déclarer une variable de type array et afficher le dernier élément
console.log(array[3]);
console.log(array[array.length - 1]);
console.log(array.at(-1));
// Exercice 3: Déclarer une variable de type array et afficher sa longueur
console.log(array.length);

// Exercice 4: Déclarer une variable de type array et afficher tous les éléments
console.log(array);
// Exercice 5: Déclarer une variable de type array et afficher tous les éléments séparés par un espace (concatenez les éléments et des espaces entre eux pour les afficher ^^ )
console.log(array.join(' '));
// Exercice 6: Déclarer une variable de type array et afficher tous les éléments séparés par un tiret
console.log(array.join('-'));
// Exercice 7: Déclarer une variable de type array et afficher tous les éléments séparés par une virgule
console.log(array.join(','));
// Exercice 8: Déclarer une variable de type array et afficher tous les éléments séparés par un point-virgule
console.log(array.join(';'));
// Exercice 9: Déclarer une variable de type array et afficher tous les éléments séparés par un retour à la ligne
console.log(array.join('\n'));
// Exercice 10: Déclarer une variable de type array et afficher tous les éléments séparés par un espace et entourés de crochets
console.log(array.map(element => `[${element}]`).join(' '));
console.log(array.map(function(element) {
    return "[" + element + "]";
  }).join(' '));


  // Exercice 11: Déclarer une variable de type array et utiliser la methode concat() pour ajouter un élément à la fin du tableau (la méthode concat() ne modifie pas le tableau d'origine)

console.log(array.concat(11))
console.log(array)
// Exercice 12: Déclarer une variable de type array et utiliser la methode push() pour ajouter un élément à la fin du tableau (la méthode push() modifie le tableau d'origine)

console.log(array.push(11));
// Exercice 13: Déclarer une variable de type array et utiliser la methode unshift() pour ajouter un élément au début du tableau (la méthode unshift() modifie le tableau d'origine)
console.log(array.unshift(0))
// Exercice 14: Déclarer une variable de type array et utiliser la methode pop() pour supprimer le dernier élément du tableau (la méthode pop() modifie le tableau d'origine)
console.log(array.pop())
console.log(array)

// Exercice 15: Déclarer une variable de type array et utiliser la methode shift() pour supprimer le premier élément du tableau (la méthode shift() modifie le tableau d'origine)
console.log(array.shift())
console.log(array)
// Exercice 16: Déclarer une variable de type array et utiliser la methode slice() pour copier une partie du tableau (la méthode slice() ne modifie pas le tableau d'origine)
console.log(array.slice(0,2));
// Exercice 17: Déclarer une variable de type array et utiliser la methode splice() pour supprimer une partie du tableau (la méthode splice() modifie le tableau d'origine)
console.log(array.splice(0,2));
console.log(array);
// Exercice 18: Déclarer une variable de type array et utiliser la methode splice() pour ajouter un élément à une position donnée du tableau (la méthode splice() modifie le tableau d'origine)
console.log(array.splice(0,0,1,3));
console.log(array);
// Exercice 19: Déclarer une variable de type array et utiliser la methode indexOf() pour trouver l'index d'un élément donné
console.log(array.indexOf(7));
// Exercice 20: Déclarer une variable de type array et utiliser la methode lastIndexOf() pour trouver l'index d'un élément donné à partir de la fin du tableau
console.log(array.push(7))
console.log(array);
console.log(array.lastIndexOf(7));
// Exercice 21: Déclarer une variable de type array et utiliser la methode includes() pour vérifier si un élément est présent dans le tableau
console.log(array.includes(3));
console.log(array.includes(10));
// Exercice 22: Déclarer une variable de type array et utiliser la methode join() pour concaténer tous les éléments du tableau en une seule chaîne de caractère

console.log(array.join("")); //virgule par default
// Exercice 23: Déclarer une variable de type array et utiliser la methode reverse() pour inverser l'ordre des éléments du tableau
console.log(array.reverse());
// Exercice 24: Déclarer une variable de type array et utiliser la methode sort() pour trier les éléments du tableau (par défaut, les éléments sont triés par ordre alphabétique ou croissant)
console.log(array.sort());
// Exercice 25: Déclarer une variable de type array et utiliser la methode sort() avec une fonction de comparaison pour trier les éléments du tableau dans l'ordre décroissant
console.log(array.sort(function(a,b) {
    return b-a;
}));
console.log(array.sort((a, b) => b - a));
// Exercice 26: Déclarer une variable de type array et utiliser la methode map() pour appliquer une fonction à chaque élément du tableau
console.log(array.map(element => element * 2
  ));
// Exercice 27: Déclarer une variable de type array et utiliser la methode filter() pour filtrer les éléments du tableau en fonction d'une condition
console.log(array.filter(element => element >= 5));
// Exercice 28: Déclarer une variable de type array et utiliser la methode reduce() pour réduire les éléments du tableau à une seule valeur. indice: la méthode reduce() prend une fonction de rappel avec deux paramètres: l'accumulateur et la valeur actuelle (accumulator, currentValue)
console.log(array.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
console.log(array);
// Exercice 29: Déclarer une variable de type array et utiliser la methode forEach() pour afficher chaque élément du tableau
array.forEach(element => console.log(element));
// Exercice 30: Déclarer une variable de type array et utiliser la methode every() pour vérifier si tous les éléments du tableau satisfont une condition
console.log(array.every(nombre => nombre >= 1));