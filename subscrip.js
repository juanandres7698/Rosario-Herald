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

 // Phone Number validation
 var formPhoneNumber = document.getElementById("form-phonenumber");
 var formPhoneNumberVal = document.getElementById("error-phonenumber");
 formPhoneNumber.addEventListener("blur", phoneNumberValidation);
 function phoneNumberValidation(e) {
    if (e.target.value.length>=7 && e.target.value.indexOf(" ")<0 && e.target.value.indexOf("-")<0 
    && e.target.value.indexOf("(")<0 && e.target.value.indexOf(")")<0 && !(e.target.value.match(/[a-zA-Z]/g))) {
        return (
           formPhoneNumberVal.textContent = 'Phone number verifed',
           formPhoneNumberVal.style.display="block",
           formPhoneNumberVal.style.fontSize="1.5vh",
           formPhoneNumber.style.border="0.2vh solid green",
           true
        )
    }
    else {
        return (
           formPhoneNumberVal.textContent = 'Phone number is not valid',
           formPhoneNumberVal.style.display="block",
           formPhoneNumberVal.style.fontSize="1.5vh",
           formPhoneNumber.style.border="0.2vh solid red",
           false
        )
    }
 }
 formPhoneNumber.addEventListener("focus", focusPhoneNumb);
 function focusPhoneNumb() {
   formPhoneNumberVal.style.display="none";
 }
 // Address validation (with regular expressions - Gonna change it)
 var formAddress = document.getElementById("form-address");
 var formAddressVal = document.getElementById("error-address");
 formAddress.addEventListener("blur", addressValidation);
 function addressValidation(e) {
    if (e.target.value.match(/[a-zA-Z]/g) && e.target.value.match(/[0-9]/g) && e.target.value.indexOf(" ")>0 && e.target.value.length>=5) {
        return (
           formAddressVal.textContent = 'Address verifed',
           formAddressVal.style.display="block",
           formAddressVal.style.fontSize="1.5vh",
           formAddress.style.border="0.2vh solid green",
           true
        )
    }
    else {
        return (
           formAddressVal.textContent = 'Phone number is not valid',
           formAddressVal.style.display="block",
           formAddressVal.style.fontSize="1.5vh",
           formAddress.style.border="0.2vh solid red",
           false
        )
    }
 }
 formAddress.addEventListener("focus", focusAdress);
 function focusAdress() {
    formAddressVal.style.display="none";
 }

 //City validation
   var formCity = document.getElementById("form-city");
   var formCityVal = document.getElementById("error-city")
   formCity.addEventListener("blur", CityValidation);
   function CityValidation(e) {
       if (formCity.value.length>=3) {
           return (
               formCityVal.textContent = 'City verifed',
               formCityVal.style.display="block",
               formCityVal.style.fontSize="1.5vh",
               formCity.style.border="0.2vh solid green",
               true
           )
       }
       else {
           return (
               formCityVal.textContent = 'Please, enter a valid city (at least 3 characters)',
               formCityVal.style.display="block",
               formCityVal.style.fontSize="1.5vh",
               formCity.style.border="0.2vh solid red",
               false
           )
       }
   }
   formCity.addEventListener("focus", focusCity);
   function focusCity() {
       formCityVal.style.display="none";
   }
 // ZIP Code validation
 var formZipCode = document.querySelector("#form-zipcode");
 var formZipCodeVal = document.querySelector("#error-zipcode");
 formZipCode.addEventListener("blur", zipCodeValidation);
 function zipCodeValidation(e) {
    var testZipCode = e.target.value;
    if (testZipCode.length>=3) {
        return (
           formZipCodeVal.textContent = 'Zip code verifed',
           formZipCodeVal.style.display="block",
           formZipCodeVal.style.fontSize="1.5vh",
           formZipCode.style.border="0.2vh solid green",
           true
        )
    }
    else {
        return (
           formZipCodeVal.textContent = 'Zip Code does not exist',
           formZipCodeVal.style.display="block",
           formZipCodeVal.style.fontSize="1.5vh",
           formZipCode.style.border="0.2vh solid red",
           false
        )
    }
 }
 formZipCode.addEventListener("focus", focusZipCode);
 function focusZipCode() {
    formZipCodeVal.style.display="none";
 }
 // ID Number validation
 var formIDNumber = document.getElementById("form-idnumber");
 var formIDNumberVal = document.getElementById("error-idnumber");
 formIDNumber.addEventListener("blur", idValidation);
 function idValidation(e) {
    var testDni = e.target.value;
    if (testDni.length>6 && testDni.length<9) {
        return (
           formIDNumberVal.textContent = 'ID Number verified',
           formIDNumberVal.style.display="block",
           formIDNumberVal.style.fontSize="1.5vh",
           formIDNumber.style.border="0.2vh solid green",
           true
        )
    }
    else {
        return (
           formIDNumberVal.textContent = 'Please enter a valid ID Number (7 or 8 numbers)',
           formIDNumberVal.style.display="block",
           formIDNumberVal.style.fontSize="1.5vh",
           formIDNumber.style.border="0.2vh solid red",
           false
        )
    }
}
 formIDNumber.addEventListener("focus", focusIDNumber);
 function focusIDNumber() {
    formIDNumberVal.style.display="none";
 }

}
