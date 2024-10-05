let inputField = document.getElementById("input_field");
let btn = document.getElementById("btn");
let displayPassword = document.getElementById("display_password");
let charecter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|:;'<>,.?";

// password genetartor js start

const passwordGenerator = ()=>{
    if(inputField.value == ""){
        alert("please input number. how long password you want")
    }
    else{
        let password = "";
    for(let i = 0; i<inputField.value; i++){
        let result = Math.floor(Math.random() * charecter.length);
        let randomLetter = charecter[result];
        password += randomLetter;
    }
    displayPassword.innerHTML = password;
    }
}