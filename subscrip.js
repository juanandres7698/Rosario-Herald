window.onload=function() {
    //Full name validation
    var formName = document.querySelector('#form-name');
    var formNameVal = document.querySelector('#error-name');
    formName.addEventListener("blur", nameValidation);
    function nameValidation(e) {
        var nameVal = e.target.value;
        if (nameVal="" || nameVal.length<6 || nameVal.indexOf(" ")<=0) {
           return (
               formNameVal.textContent = 'Full name field must have more than 6 letters and, at least, one blank space',
               formNameVal.style.display="block",
               formNameVal.style.fontSize="1.5vh",
               formName.style.border="0.2vh solid red",
               true
           )   
        }
        else {
           return (
               formNameVal.textContent = 'Name verifed',
               formNameVal.style.display="block",
               formNameVal.style.fontSize="1.5vh",
               formName.style.border="0.2vh solid green",
               false
           )
        }
    }
    formName.addEventListener("focus", focusFullName)
    function focusFullName() {
        formNameVal.style.display="none";
    }
    //Email Validation
    var formEmail = document.getElementById("form-email");
    var formEmailVal = document.getElementById("error-email")
    formEmail.addEventListener("blur", emailValidation);
    function emailValidation() {
        if (formEmail.value.indexOf("@")>0 && formEmail.value.indexOf(".")>0) {
            return (
                formEmailVal.textContent = 'Email verifed',
                formEmailVal.style.display="block",
                formEmailVal.style.fontSize="1.5vh",
                formEmail.style.border="0.2vh solid green",
                true
            ) 
        }
        else {
            return (
                formEmailVal.textContent = 'Email format is not valid',
                formEmailVal.style.display="block",
                formEmailVal.style.fontSize="1.5vh",
                formEmail.style.border="0.2vh solid red",
                false
            )
        }
    }
    email.addEventListener("focus", focusEmail)
    function focusEmail() {
        formEmailVal.style.display="none";  
    }
 // Password validation (with regular expressions - gonna change it)
 var formPassword = document.getElementById("form-password");
 var formPasswordVal = document.getElementById("error-password");
 formPassword.addEventListener("blur", validatePassword);
 function validatePassword(e) {
     if (e.target.value.match(/[a-zA-Z]/g) && e.target.value.match(/[0-9]/g) && e.target.value.length>=8) {
         return (
            formPasswordVal.textContent = 'Password verifed',
            formPasswordVal.style.display="block",
            formPasswordVal.style.fontSize="1.5vh",
            formPassword.style.border="0.2vh solid green",
             true
         )
     }
     else {
         return (
            formPasswordVal.textContent = 'At least 8 characters, using letters and numbers',
            formPasswordVal.style.display="block",
            formPasswordVal.style.fontSize="1.5vh",
            formPassword.style.border="0.2vh solid red",
             false
         )
     }
 }
 formPassword.addEventListener("focus", focusPassword);
 function focusPassword() {
     formPasswordVal.style.display="none";
 }
 //Repeat password validation (with regular expressions - gonna change it)
 var formRepeatPassword = document.querySelector('#form-rpassword');
 var formRepeatPasswordVal = document.querySelector("error-rpassword");
 formRepeatPassword.addEventListener("blur", validateRePassword);
 function validateRePassword(e) {
     if (formRepeatPassword.value == formPassword.value && e.target.value.match(/[a-zA-Z]/g) && e.target.value.match(/[0-9]/g) && e.target.value.length>=8) {
         return (
            formRepeatPasswordVal.textContent = 'Password verifed',
            formRepeatPasswordVal.style.display="block",
            formRepeatPasswordVal.style.fontSize="1.5vh",
            formRepeatPassword.style.border="0.2vh solid green",
            true
         )
     }
     else {
         return (
             formRepeatPasswordVal.textContent = 'Please, write the same password',
             formRepeatPasswordVal.style.display="block",
             formRepeatPasswordVal.style.fontSize="1.5vh",
             formRepeatPassword.style.border="0.2vh solid red",
             false
         )
     }
 }
 formRepeatPassword.addEventListener("focus", focusRePassword);
 function focusRePassword() {
     formRepeatPasswordVal.style.display="none";
 }
 // Age validation
 var formAge = document.getElementById("form-age");
 var formAgeVal = document.getElementById("error-age");
    formAge.addEventListener("blur", ageValidation);
    function ageValidation(e) {
        if (formAge.value>=18) {
            return (
                formAgeVal.textContent = 'Age verifed',
                formAgeVal.style.display="block",
                formAgeVal.style.fontSize="1.5vh",
                formAge.style.border="0.2vh solid green",
                true
            )
        }
        else {
            return (
                formAgeVal.textContent = 'You must be at least 18 years old',
                formAgeVal.style.display="block",
                formAgeVal.style.fontSize="1.5vh",
                formAge.style.border="0.2vh solid red",
                false
            )
        }
    }
 formAge.addEventListener("focus", focusAge);
 function focusAge() {
     formAgeVal.style.display="none";
 }

}
