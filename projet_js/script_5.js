/*
Est-ce que tous les livres ont été au moins empruntés une fois ?
Quel est livre le plus emprunté ?
Quel est le livre le moins emprunté ?
Trouve le livre avec l'ID: 873495 ;
Supprime le livre avec l'ID: 133712 ;
Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

*/


const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


/************* Question 1 **************/

let resultat = ""

for(let book in books){
  if (books[book].rented > 0){
  resultat = true
  }else if(books[book].rented === 0)
  {
    resultat = false
    break
  }
};

if(resultat){
  console.log("Tous les livres empruntés")
}else{
  console.log("Tous les livres n'ont pas été empruntés")
}

/************* Question 2 **************/
let rentedBookArray= []
for(let book in books){
  rentedBookArray.push(books[book].rented) 
};

let rentedMax = Math.max(...rentedBookArray)

console.log(rentedMax)

/************* Question 3 **************/

let rentedMin = Math.min(...rentedBookArray)

console.log(rentedMin)

/************* Question 4 **************/

for(let book in books){
  if(books[book].id === 873495){
    console.log(`${books[book].title} correspond à l'id 873495`)
  }
};

/************* Question 5  et Question 6 **************/


for(let book in books){
  if(books[book].id === 133712){
  books.shift(book)
  console.log(books)
}
books.sort(function compare(a, b){
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
});
};
console.log(books)

