let seq1 = "CCGUCGUUGCGCUACAGC";
let seq2 = "CCUCGCCGGUACUUCUCG";


/*************************************/ 
/* On transforme les Arns en Codons */
/***********************************/

function transform(ARN){
  let array = [];

array.push(ARN.slice(0,3));
array.push(ARN.slice(3,6));
array.push(ARN.slice(6,9));
array.push(ARN.slice(9,12));
array.push(ARN.slice(12,15));
array.push(ARN.slice(15,18));
return array; 
};

let codonsSeq1 = transform(seq1);
console.log(codonsSeq1);

let codonsSeq2 = transform(seq2);
console.log(codonsSeq2);

/*********************************************/ 
/* On convertit les codons en Acide aminées */
/*******************************************/

function convert(codons){
for(let valeur in codons){
  if (codons[valeur] === "UCU"||codons[valeur] === "UCC"||codons[valeur] === "UCA"||codons[valeur] === "UCG"||codons[valeur] === "AGU"||codons[valeur] === "AGC"){
      codons[valeur] = "Sérine"
  }else if (codons[valeur] === "CCU"||codons[valeur] === "CCC"||codons[valeur] === "CCA"||codons[valeur] === "CCG"){
    codons[valeur] = "Proline"
  }else if (codons[valeur] === "UUA"||codons[valeur] === "UUG"){
    codons[valeur] = "Leucine"
  }else if(codons[valeur] === "UUU"||codons[valeur] === "UUC"){
    codons[valeur] = "Phénylaline"
  }else if(codons[valeur] === "CGU"||codons[valeur] === "CGA"||codons[valeur] === "CGG"||codons[valeur] === "UGA"||codons[valeur] === "AGG"||codons[valeur] === "CGC"){
    codons[valeur] = "Arginine"
  }else if(codons[valeur] === "UAU"||codons[valeur] === "UAC"){
    codons[valeur] = "Tyrosine"}
}
return codons;
};

/***********************************************/ 
/* On change les array en chaine de caractère */
/*********************************************/


console.log(convert(codonsSeq1));
let acideAminé = codonsSeq1.join("-")
console.log(acideAminé)


console.log(convert(codonsSeq2));
let acideAminé2 = codonsSeq2.join("-")
console.log(acideAminé2)