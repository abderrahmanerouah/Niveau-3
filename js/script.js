document.getElementById('email2').addEventListener("input", function(event){
  var paragErreur = document.getElementById("erreur");
  if (this.value != document.getElementById("email").value){
   paragErreur.innerHTML = "les 2 adresse mailsont incompatible";
  }else{
   paragErreur.innerHTML = "";
  }
});

document.getElementById("inscription").addEventListener("submit",
function (event) {
 var erreur ; 
 var pseudo = document.getElementById("pseudo")
 var email = document.getElementById("email")
 var email2 = document.getElementById("email2")
 if(!email2.value) {
   erreur ="veiller confirmer votre email";
   email2.style.border = "5px solid red"
 }else{
   email2.style.border ="2px solid green"
 }
 if(!email.value) {
   erreur ="veiller rensegnier un email";
   email.style.border = "5px solid red"
 }else{
   email.style.border ="2px solid green"
 }
 if(!pseudo.value){
   erreur ="veuiller rensegnier un pseudo";
   pseudo.style.border = "5px solid red"
 }else{
   pseudo.style.border ="2px solid green"
 }
 
if (erreur) {
  event.preventDefault();  
  document.getElementById("erreur").innerHTML = erreur;
  document.getElementById("erreur").style.color = "red";
 //  return false;
} else if (email.value != email2.value) {
 event.preventDefault();  
 email.style.border = "5px solid red";
 email2.style.border = "5px solid red";
} else {
 alert('formulaire envoyé ')
}
});



