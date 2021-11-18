// Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24"

let resultat = 1
let nombre = ""
nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
for(let i = 1; i <=nombre ; i ++){
  resultat *= i
};
console.log(resultat)

