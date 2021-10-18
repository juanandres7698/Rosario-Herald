window.onload=function() {
    //Full name validation
    var formName = document.querySelector('#form-name');
    var formNameVal = document.querySelector('#error-name');
    formName.addEventListener("blur", nameValidation);
    function nameValidation(e) {
        var testing = e.target.value;
        if (testing="" || testing.length<6 || testing.indexOf(" ")<=0) {
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
    formName.addEventListener("focus", focusValidation)
    function focusValidation() {
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
 var formPasswordError = document.getElementById("error-password");
 formPassword.addEventListener("blur", validatePassword);
 function validatePassword(e) {
     var letters = /[a-zA-Z]/g;
     var numbers = /[0-9]/g;
     var testPwd = e.target.value;
     if (testPwd.match(letters) && testPwd.match(numbers) && testPwd.length>=8) {
         return (
            formPasswordError.textContent = 'Password verifed',
            formPasswordError.style.display="block",
            formPasswordError.style.fontSize="1.5vh",
            formPassword.style.border="0.2vh solid green",
             true
         )
     }
     else {
         return (
            formPasswordError.textContent = 'At least 8 characters, using letters and numbers',
            formPasswordError.style.display="block",
            formPasswordError.style.fontSize="1.5vh",
            formPassword.style.border="0.2vh solid red",
             false
         )
     }
 }
 formPassword.addEventListener("focus", focusPassword);
 function focusPassword() {
     formPasswordError.style.display="none";
 }

}