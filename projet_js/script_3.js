

let resultat = ""
let etage = ""
etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

for (let i = 1; i <= etage; i++) {
  for (let j = 0; j < etage - i; j++) {
    resultat += " ";
  }
  
  for (let k = 0; k < i; k++) {
    resultat += "*";
  }
  resultat += "\n";
}
console.log(resultat);