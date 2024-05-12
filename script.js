const formControl = document.querySelectorAll(".formControl");
const SubmitBtn = document.querySelector(".btn");
const password1 = document.querySelector(".pass1").value;
const password2 = document.querySelector(".pass2").value;

SubmitBtn.addEventListener("click", function(){
// after the submit button is pressed, the if function checks the answers,
//  and with css its change the border of the input
formControl.forEach(input => {
    if(!input.validity.valid){
        input.classList.add("invalid");
    }
    else{
        input.classList.add("valid");
    }
    
    
})

})
// when the user get out of password1 field, code checks if other password
//  is empty and if its not, then checks if the passwords are the same
// and then calls functions machingPass() or notMachingPass.

document.querySelector('.pass1').addEventListener("blur",function(){

    const password1 = document.querySelector(".pass1").value;
    const password2 = document.querySelector(".pass2").value;

    if(password2 !== '' & password1 !== ''){
        if(password1 !== password2){
            notMachingPass();
        }else{
            machingPass();
        }
    }
})
document.querySelector('.pass2').addEventListener("blur",function(){

    const password1 = document.querySelector(".pass1").value;
    const password2 = document.querySelector(".pass2").value;

    if(password2 !== '' & password1 !== ''){
        if(password1 !== password2){
            notMachingPass();
        }else{
            machingPass();
        }
    }
})
const machingPass = function(){
    document.querySelector('.pass1').classList.add("valid");
    document.querySelector('.pass2').classList.add("valid");
}
const notMachingPass = function(){
    document.querySelector('.pass1').classList.add("invalid");
    document.querySelector('.pass2').classList.add("invalid");
}