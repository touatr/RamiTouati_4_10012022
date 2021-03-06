function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Les élémments du DOM auxquelles on accéde
const modalbg = document.querySelectorAll(".bground");
const modalClose = document.querySelectorAll(".close");
const modalInscriptionButton = document.querySelector(".btn-submit");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeInscriptionButton = document.querySelectorAll(".btn-signup");
const formData = document.querySelectorAll(".formData");
const textControl = document.getElementsByClassName("text-control");//la classe text control correspond à l'input
const inscription = document.getElementById("inscription");
const firstName = document.getElementById("first");
const firstNameError = document.getElementById("first-name-error");
const lastName = document.getElementById("last");
const lastNameError = document.getElementById("last-name-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const birthdate = document.getElementById("birthdate");
const birthdateError =  document.getElementById("birthdate-error");
const tournoiNumber = document.getElementById("quantity");
const tournoiNumberError = document.getElementById("tournoi-number-error");
const tournoiChoices = document.querySelectorAll(".tournoi-choice");
const tournoiChoiceError = document.getElementById("tournoi-choice-error");
const conditionsUtilisation = document.getElementById("checkbox1");
const conditionsUtilisationError = document.getElementById("conditions-utilisation");


// launch modal form: cette fonction affiche le formulaire
function launchModal() {
  modalbg[0].style.display = "block";
  }
  
//close modal form: cette fonction ferme le formulaire
function closeModal() {
  modalbg[0].style.display = "none";
}

//lunch modal inscription: cette fonction affiche un modal merci pour votre inscription
function launchThanksModal() {
  modalbg[0].style.display = "none";
  modalbg[1].style.display = "block";
}

//cette fonction ferme le modal grâce au bouton fermer
function closeThanksModal() {
modalbg[1].style.display = "none";
modalbg[0].style.display = "none";
}



//fonction qui vérifie si le champ texte contient que des lettres
function stringIsValid(value) {
  return /[a-zA-Z]/.test(value);
}  

//fonction qui valide le champ prénom
function validateFirstName() {
  if(firstName.value == "") {
    firstNameError.innerHTML = "Vous devez entrer un prénom.";
    firstName.style.border = "1px solid red";
    return false;
  }
  if(stringIsValid(firstName.value) == false) {
    firstNameError.innerHTML = "Vous devez entrer un prénom valide.";
    return false;
  }
  if(firstName.value.length <2) {
    firstNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  }
  else {
    firstNameError.innerHTML = "";
    firstName.style.border = "none";
    return true;
  }
}

//fonction qui valide le champ nom
function validateLastName() {
if(lastName.value == "") {
  lastNameError.innerHTML = "Vous devez entrer un nom.";
  lastName.style.border = "1px solid red";
  return false;
}
if(stringIsValid(lastName.value) == false) {
  lastNameError.innerHTML = "Vous devez entrer un nom valide.";
  lastName.style.border = "1px solid red";
  return false;
}
if(lastName.value.length < 2) {
  lastNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  return false;
}
else {
  lastNameError.innerHTML = "";
  lastName.style.border = "none";
  return true;
}
}  

//fonction qui vérifie le format d'une adresse mail s'il est valide
function emailIsValid(value) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

//fonction qui valide l'adresse email avec l'expression régulière regex
function validateEmail() {
  if(email.value == "") {
    emailError.innerHTML = "Vous devez entrer une adresse mail.";
    email.style.border = "1px solid red";
    return false;
  }
  if(emailIsValid(email.value) == false) {
    emailError.innerHTML = "Veuillez entrer une adresse mail valide.";
    email.style.border = "1px solid red";
    return false;
  }
  else {
    emailError.innerHTML = "";
    email.style.border = "none";
    return true;
  }
}

//Vérifier le champ date de naissance
function validateBirthdate() {
  if(birthdate.value == "") {
    birthdateError.innerHTML = "Vous devez entrer une date de naissance.";
    birthdate.style.border = "1px solid red";
    return false;
  }
  if(birthdate.value >= "1999/01/01") {
    birthdateError.innerHTML = "Veuillez entrer une date de naissance supérieur à 1999.";
    birthdate.style.border = "1px solid red";
    return false;
  }
  else {
    birthdateError.innerHTML = "";
    birthdate.style.border = "none";
    return true;
  }
}

//Vérifier le champ date de nombre de tournois
function validateTournoiNumber() {
  if(tournoiNumber.value == "") {
    tournoiNumberError.innerHTML = "Vous devez entrer un nombre.";
    tournoiNumber.style.border = "1px solid red";
    return false;
  }
  if(tournoiNumber.value < 0 || tournoiNumber.value > 99) {
    tournoiNumberError.innerHTML = "Veuillez entrer un nombre entre 0 et 99.";
    tournoiNumber.style.border = "1px solid red";
    return false;
  }
  else {
    tournoiNumberError.innerHTML = "";
    tournoiNumber.style.border = "none";
    return true;
  }
}

  //boucle for qui parcourt le tableau tournoiChoices pour vérifier quelle bouton radio est coché
//Vérifier la case choix du tournoi si elle est cochée
function validateTournoiChoice() {
  const checked = document.querySelector('.tournoi-choice:checked') !== null;
  console.log(checked);
  if(!checked) {
    tournoiChoiceError.innerHTML ="Vous devez choisir une option.";
    return false;
  }
  else {
    tournoiChoiceError.innerHTML ="";
    return true; 
  }
    
}  
  

//Vérifier la case conditions d'utilisation si elle est cochée
function validateConditionsUtilisation() {
  if(conditionsUtilisation.checked) {
    conditionsUtilisationError.innerHTML = "";
    //conditionsUtilisationError.innerHTML = conditionsUtilisation.checked;
    return true;
  }
  else {
    conditionsUtilisationError.innerHTML = "Vous devez accepter les conditions d'utilisation.";
    //conditionsUtilisationError.innerHTML = conditionsUtilisation.checked;
    return false;
  }
}



// launch modal event : l'événement click qui lance le modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event : l'evénement click qui ferme le modal via la croix
modalClose[0].addEventListener('click', closeModal);
modalClose[1].addEventListener('click', closeThanksModal);

//close modal event : l'evénement click qui ferme le modal via le bouton fermer
closeInscriptionButton[2].addEventListener('click', closeThanksModal);


//Ecouter l'événement submit pour déclencher l'évenement d'envois du formulaire
inscription.addEventListener('submit', function(event){
  event.preventDefault();//Empêcher la page à se recharger après l'évènement submit
  if(validateFirstName()         
    && validateLastName()  
    && validateEmail()
    && validateBirthdate()
    && validateTournoiNumber()     
    && validateTournoiChoice()
    && validateConditionsUtilisation()) {
    launchThanksModal();//si tous les champs validés: lancer le modal merci pour votre inscription
  }
});

//Ecouter tous les champs en temps réel
//Ecouter l'événement input champ de saisi du prénom
firstName.addEventListener('input', validateFirstName);

//Ecouter l'événement input champ de saisi du nom
lastName.addEventListener('input', validateLastName);

//Ecouter l'événement input champ de saisi du mail
email.addEventListener('input', validateEmail);

//Ecouter l'événement input champ de saisi de la date de naissance
birthdate.addEventListener('input', validateBirthdate);

//Ecouter l'événement input champ de saisi du nombre de tournoi GameOn
tournoiNumber.addEventListener('input', validateTournoiNumber);

























