const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameErr');
const emailError = document.getElementById('emailErr');
const passwordError = document.getElementById('passErr')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword()){
        alert("Form Submitted Successfully")
    }

});

function validateName(){
    let name = document.getElementById('username').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter valid email";
        return false;
    }

    emailError.innerHTML = "";
    return true;
}

function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
        passwordError.innerHTML = "Password is required";
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passwordError.innerHTML = "contain 1 Uppercase, 1 Lowercase, 1 digit & 1 Alphabet";
        return false; 
    }
    passwordError.innerHTML = "";
    return true;
}
