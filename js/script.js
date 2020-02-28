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
   email2.classList.add('testtt')
 }else{
   email2.classList.add('testt')
 }
 if(!email.value) {
   erreur ="veiller rensegnier un email";
   email.classList.add('testtt')
 }else{
   email.classList.add('testt')
 }
 if(!pseudo.value){
   erreur ="veuiller rensegnier un pseudo";
   pseudo.classList.add('testtt')
 }else{
   pseudo.classList.add('testt')
 }
 
if (erreur) {
  event.preventDefault();  
  document.getElementById("erreur").innerHTML = erreur;
} else if (email.value != email2.value) {
 event.preventDefault();  
 email.mail.classList.add('testtt')
 email2.mail.classList.add('testtt')
} else {
 alert('formulaire envoyé '+ '' + Date())
}
});



