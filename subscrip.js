window.onload=function() {
    //----- Arrays for register button -----// 
    var fieldsArray = [];
    var errorArray = [];
    //Full name validation
    var formName = document.querySelector('#form-name');
    var formNameVal = document.querySelector('#error-name');
    formName.addEventListener('blur', nameValidation);
    function nameValidation(e) {
        var nameVal = e.target.value;
        if (nameVal="" || nameVal.length<6 || nameVal.indexOf(" ")<=0) {
           return (
               formNameVal.textContent = 'Full name field must have more than 6 letters and, at least, one blank space',
               formNameVal.style.display='block',
               formName.style.border='0.2vh solid red',
               fieldsArray[0] = 'error',
               errorArray[0] = 'Error! Invalid full name: Full name field must have more than 6 letters and, at least, one blank space.' + '\n',
               true
           )   
        }
        else {
           return (
               formNameVal.textContent = 'Name verifed',
               formNameVal.style.display='block',
               formName.style.border='0.2vh solid green',
               fieldsArray[0] ='Full Name: ' + formName.value + '\n',
               errorArray[0] = null,
               false
           )
        }
    }
    formName.addEventListener('focus', focusFullName);
    function focusFullName() {
        formNameVal.style.display='none';
    }
    //Email Validation
    var formEmail = document.getElementById('form-email');
    var formEmailVal = document.getElementById('error-email');
    formEmail.addEventListener('blur', emailValidation);
    function emailValidation() {
        if (formEmail.value.indexOf('@')>0 && formEmail.value.indexOf('.')>0) {
            return (
                formEmailVal.textContent = 'Email verifed',
                formEmailVal.style.display='block',
                formEmail.style.border='0.2vh solid green',
                fieldsArray[1] ='Email: ' + formEmail.value + '\n',
                errorArray[1] = null,
                true
            ) 
        }
        else {
            return (
                formEmailVal.textContent = 'Email format is not valid',
                formEmailVal.style.display='block',
                formEmail.style.border='0.2vh solid red',
                fieldsArray[1] = 'error',
                errorArray[1] = 'Error! Invalid email format.' + '\n',
                false
            )
        }
    }
    email.addEventListener('focus', focusEmail)
    function focusEmail() {
        formEmailVal.style.display='none';  
    }
 // Password validation (with regular expressions - gonna change it)
 var formPassword = document.getElementById('form-password');
 var formPasswordVal = document.getElementById('error-password');
 formPassword.addEventListener('blur', validatePassword);
 function validatePassword(e) {
     if (e.target.value.match(/[a-zA-Z]/g) && e.target.value.match(/[0-9]/g) && e.target.value.length>=8) {
         return (
            formPasswordVal.textContent = 'Password verifed',
            formPasswordVal.style.display='block',
            formPassword.style.border='0.2vh solid green',
            fieldsArray[2] ='Password: ' + formPassword.value + '\n',
            errorArray[2] = null,
            true
         )
     }
     else {
         return (
            formPasswordVal.textContent = 'At least 8 characters, using letters and numbers',
            formPasswordVal.style.display='block',
            formPassword.style.border='0.2vh solid red',
            fieldsArray[2] = 'error',
            errorArray[2] = 'Invalid password: Use at least 8 characters, using letters and numbers' + '\n',
            false
         )
     }
 }
 formPassword.addEventListener('focus', focusPassword);
 function focusPassword() {
     formPasswordVal.style.display='none';
 }
 //Repeat password validation (with regular expressions - gonna change it)
 
 var formRepeatPassword = document.querySelector('#form-rpassword');
 var formRepeatPasswordVal = document.querySelector('error-rpassword');
 formRepeatPassword.addEventListener('blur', validateRePassword);
 function validateRePassword(e) {
     if (formRepeatPassword.value == formPassword.value && e.target.value.match(/[a-zA-Z]/g) && e.target.value.match(/[0-9]/g) && e.target.value.length>=8) {
         return (
            formRepeatPasswordVal.textContent = 'Password verifed',
            formRepeatPasswordVal.style.display='block',
            formRepeatPassword.style.border='0.2vh solid green',
            fieldsArray[3] = 'Confirm Password: ' + formRepeatPassword.value + '\n',
            errorArray[3] = null,
            true
         )
     }
     else {
         return (
             formRepeatPasswordVal.textContent = 'Please, write the same password',
             formRepeatPasswordVal.style.display='block',
             formRepeatPassword.style.border='0.2vh solid red',
             fieldsArray[3] = 'error',
             errorArray[3]= 'Please confirm password.' + '\n',
             false
         )
     }
 }
 formRepeatPassword.addEventListener("focus", focusRePassword);
 function focusRePassword() {
     formRepeatPasswordVal.style.display="none";
 }
 
 // Age validation
 var formAge = document.getElementById('form-age');
 var formAgeVal = document.getElementById('error-age');
    formAge.addEventListener('blur', ageValidation);
    function ageValidation(e) {
        if (formAge.value>=18) {
            return (
                formAgeVal.textContent = 'Age verifed',
                formAgeVal.style.display='block',
                formAge.style.border='0.2vh solid green',
                fieldsArray[4] = 'Age: ' + formAge.value + '\n',
                errorArray[4] = null,
                true
            )
        }
        else {
            return (
                formAgeVal.textContent = 'You must be at least 18 years old',
                formAgeVal.style.display='block',
                formAge.style.border='0.2vh solid red',
                fieldsArray[4] = 'error',
                errorArray[4] = 'Error! You must be at least 18 years old.' + '\n',
                false
            )
        }
    }
 formAge.addEventListener('focus', focusAge);
 function focusAge() {
     formAgeVal.style.display='none';
 }

 // Phone Number validation
 var formPhoneNumber = document.getElementById('form-phonenumber');
 var formPhoneNumberVal = document.getElementById('error-phonenumber');
 formPhoneNumber.addEventListener('blur', phoneNumberValidation);
 function phoneNumberValidation(e) {
    if (e.target.value.length>=7 && e.target.value.indexOf(' ')<0 && e.target.value.indexOf('-')<0 
    && e.target.value.indexOf('(')<0 && e.target.value.indexOf(')')<0 && !(e.target.value.match(/[a-zA-Z]/g))) {
        return (
           formPhoneNumberVal.textContent = 'Phone number verifed',
           formPhoneNumberVal.style.display='block',
           formPhoneNumber.style.border='0.2vh solid green',
           fieldsArray[5] = 'Phone Number: ' + formPhoneNumber.value + '\n',
           errorArray[5] = null,
           true
        )
    }
    else {
        return (
           formPhoneNumberVal.textContent = 'Phone number is not valid',
           formPhoneNumberVal.style.display='block',
           formPhoneNumber.style.border='0.2vh solid red',
           fieldsArray[5] = 'error',
           errorArray[5] = 'Error! Phone number is not valid.' + '\n',
           false
        )
    }
 }
 formPhoneNumber.addEventListener('focus', focusPhoneNumb);
 function focusPhoneNumb() {
   formPhoneNumberVal.style.display="none";
 }
 // Address validation (with regular expressions - Gonna change it)
 var formAddress = document.getElementById('form-address');
 var formAddressVal = document.getElementById('error-address');
 formAddress.addEventListener('blur', addressValidation);
 function addressValidation(e) {
    if (e.target.value.match(/[a-zA-Z]/g) && e.target.value.match(/[0-9]/g) && e.target.value.indexOf(' ')>0 && e.target.value.length>=5) {
        return (
           formAddressVal.textContent = 'Address verifed',
           formAddressVal.style.display='block',
           formAddress.style.border='0.2vh solid green',
           fieldsArray[6] = 'Address: ' + formAddress.value + '\n',
           errorArray[6] = null,
           true
        )
    }
    else {
        return (
           formAddressVal.textContent = 'Address is not valid',
           formAddressVal.style.display='block',
           formAddress.style.border='0.2vh solid red',
           fieldsArray[6] = 'error',
           errorArray[6] = 'Please verify your address.' + '\n',
           false
        )
    }
 }
 formAddress.addEventListener('focus', focusAdress);
 function focusAdress() {
    formAddressVal.style.display='none';
 }
 //City validation
   var formCity = document.getElementById('form-city');
   var formCityVal = document.getElementById('error-city')
   formCity.addEventListener('blur', CityValidation);
   function CityValidation(e) {
       if (formCity.value.length>=3) {
           return (
               formCityVal.textContent = 'City verifed',
               formCityVal.style.display='block',
               formCity.style.border='0.2vh solid green',
               fieldsArray[7] = 'City: ' + formCity.value + '\n',
               errorArray[7] = null,
               true
           )
       }
       else {
           return (
               formCityVal.textContent = 'Please, enter a valid city (at least 3 characters)',
               formCityVal.style.display='block',
               formCity.style.border='0.2vh solid red',
               fieldsArray[7] = 'error',
               errorArray[7] = 'Please verify your city' + '\n',
               false
           )
       }
   }
   formCity.addEventListener('focus', focusCity);
   function focusCity() {
       formCityVal.style.display='none';
   }
 // ZIP Code validation
 var formZipCode = document.querySelector('#form-zipcode');
 var formZipCodeVal = document.querySelector('#error-zipcode');
 formZipCode.addEventListener('blur', zipCodeValidation);
 function zipCodeValidation(e) {
    var testZipCode = e.target.value;
    if (testZipCode.length>=3) {
        return (
           formZipCodeVal.textContent = 'Zip code verifed',
           formZipCodeVal.style.display='block',
           formZipCode.style.border='0.2vh solid green',
           fieldsArray[8] = 'Zip Code: ' + formZipCode.value + '\n',
           errorArray[8] = null,
           true
        )
    }
    else {
        return (
           formZipCodeVal.textContent = 'Zip Code does not exist',
           formZipCodeVal.style.display='block',
           formZipCode.style.border='0.2vh solid red',
           fieldsArray[8] = 'error',
           errorArray[8] = 'Invalid Zip Code' + '\n',
           false
        )
    }
 }
 formZipCode.addEventListener('focus', focusZipCode);
 function focusZipCode() {
    formZipCodeVal.style.display="none";
 }
 // ID Number validation
 var formIDNumber = document.getElementById('form-idnumber');
 var formIDNumberVal = document.getElementById('error-idnumber');
 formIDNumber.addEventListener('blur', idValidation);
 function idValidation(e) {
    var testDni = e.target.value;
    if (testDni.length>6 && testDni.length<9) {
        return (
           formIDNumberVal.textContent = 'ID Number verified',
           formIDNumberVal.style.display='block',
           formIDNumber.style.border='0.2vh solid green',
           fieldsArray[9] = 'ID Number: ' + formIDNumber.value + '\n',
           errorArray[9] = null,
           true
        )
    }
    else {
        return (
           formIDNumberVal.textContent = 'Please enter a valid ID Number (7 or 8 numbers)',
           formIDNumberVal.style.display='block',
           formIDNumber.style.border='0.2vh solid red',
           fieldsArray[9] = 'error',
           errorArray[9] = 'Your ID Number is wrong' + '\n',
           false
        )
    }
}
 formIDNumber.addEventListener('focus', focusIDNumber);
 function focusIDNumber() {
    formIDNumberVal.style.display='none';
 }
 //Close modal 

    var modal = document.getElementById('my-modal');
    var close = document.getElementById('modal-button');
    close.addEventListener('click',closeModal);
    function closeModal(e) {
        modal.style.display = 'none';
    }
    
 //Weekly Problem 6

    var dataStorage = function () {
        localStorage.setItem('name', formName.value);
        localStorage.setItem('email', formEmail.value);
        localStorage.setItem('password', formPassword.value);
        localStorage.setItem('confirm password', formPassword.value);
        localStorage.setItem('age', formAge.value);
        localStorage.setItem('phone number', formPhoneNumber.value);
        localStorage.setItem('address', formAddress.value);
        localStorage.setItem('city', formCity.value);
        localStorage.setItem('zip code', formZipCode.value);
        localStorage.setItem('id number', formIDNumber.value);
    }
    var button = document.getElementById('submit-button');
    button.addEventListener('click',clickEvent);
    function clickEvent(e) {
        var url = 'https://curso-dev-2021.herokuapp.com/newsletter?name='+formName.value+'&email='
        +formEmail.value+'&password='+formPassword.value+'&confirmPassword='+ formRepeatPassword.value+'&age='+
        formAge.value+'&phoneNumber='+formPhoneNumber.value+'&address='+formAddress.value+'&city='
        +formCity.value+'&postalCode='+formZipCode.value+'&id='+formIDNumber.value;
        var message = document.getElementById('modal-message');
        var titleMessage = document.getElementById('modal-title');
        if(fieldsArray.length == 0) {
            modal.style.display = 'block';
            message.innerHTML = 'Please complete the form!';
        } else if(fieldsArray.includes("error")) {
            modal.style.display = 'block';
            var errorMessages = '<ul class ="list-modal">';
            for(var i = 0; i < errorArray.length; i++) {
                if(errorArray[i] !== null && errorArray[i] !== '' && errorArray[i] !== undefined) {
                    errorMessages += '<li>' + errorArray[i] + '</li>';
                }
            }
            errorMessages += '</ul>';
            message.innerHTML = errorMessages;
        } else {
            fetch(url)
                .then(function(res) {
                    if(res.status === 200) {
                        return res.json();
                    } else {
                        throw Error(res.status);
                    }
                })
                .then(function(data) {
                    if(formName.value !== '' && formEmail.value !== '' && formPassword.value !== '' 
                      && formRepeatPassword.value !== '' 
                      && formAge.value !== '' && formPhoneNumber.value !== '' && formAddress.value !== ''
                      && formCity.value !== ''  && formZipCode.value !== '' && formIDNumber.value !== '') {
                        modal.style.display = 'block';  
                        titleMessage.innerHTML = 'Thank you for your subscription!';
                        var fieldsMessages = '<ul class = "list-modal">';
                        for(var i = 0; i < fieldsArray.length; i++) {
                            fieldsMessages += '<li>' + fieldsArray[i] + '</li>';
                        }
                        fieldsMessages += '</ul>';
                        message.innerHTML = fieldsMessages;
                        dataStorage();
                    } else {
                        modal.style.display = 'block';
                        message.innerHTML = 'Please complete the form!';
                    }  
                })
                .catch(function(err) {
                    modal.style.display = 'block';
                    message.innerHTML = err;
                }) 
        }
    }

 // CHECK LOCAL STORAGE

    function checkLocalStorage () {
        formName.value = !!localStorage.getItem('name') ? localStorage.getItem('name') : null;
        formEmail.value = !!localStorage.getItem('email') ? localStorage.getItem('email') : null;
        formPassword.value = !!localStorage.getItem('password') ? localStorage.getItem('password') : null;
        formRepeatPassword.value = !!localStorage.getItem('confirm password') ? localStorage.getItem('confirm password') : null;
        formAge.value = !!localStorage.getItem('age') ? localStorage.getItem('age') : null;
        formPhoneNumber.value = !!localStorage.getItem('phone number') ? localStorage.getItem('phone number') : null;
        formAddress.value = !!localStorage.getItem('address') ? localStorage.getItem('address') : null;
        formCity.value = !!localStorage.getItem('city') ? localStorage.getItem('city') : null;
        formZipCode.value = !!localStorage.getItem('zip code') ? localStorage.getItem('zip code') : null;
        formIDNumber.value = !!localStorage.getItem('id number') ? localStorage.getItem('id number') : null;
    };
    window.onload = checkLocalStorage();


 // Bonus
    var hiName = document.getElementById('form-name');
    hiName.addEventListener('keyup',autoCompleteEvent);
    hiName.addEventListener('focus',autoCompleteEvent);
    function autoCompleteEvent(e) {
        var  valueName = e.target.value;
        var headerName = document.getElementById('hello-header');
        headerName.innerHTML = 'Hello ' + valueName + ' !';
    }
 
}