
/***********************************************/ 
/* On déclare une fonction pour savoir si la 
chaine de caractère est 100% majuscule */
/*********************************************/

function isUpperCase(str){
  if (str === str.toUpperCase()){
    return true
  }else {
    return false
  }
};


reponse = prompt("Bonjour je m'appele Bot, que veux tu?")
if (reponse[reponse.length -1 ] === "?"){
  console.log("ouai ouai")
}else if (isUpperCase(reponse)&& reponse !== ""){
  console.log("Wesh calme toi frere!!")
}else if( reponse.includes("Fortnite")){
  console.log("On se fait une partie en soum soum?")
}else if (reponse === ""){
  console.log("T'es en PLS ?")
}else{
  console.log("balek!!")
};


