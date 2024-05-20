const formControl = document.querySelectorAll(".formControl");
const SubmitBtn = document.querySelector(".btn");
const password1 = document.querySelector(".pass1").value;
const password2 = document.querySelector(".pass2").value;

SubmitBtn.addEventListener("click", function(event){
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

const password1 = document.querySelector(".pass1").value;
const password2 = document.querySelector(".pass2").value;
const PassNotMatchError = document.querySelector("span");
if(password2 !== '' & password1 !== ''){
        if(password1 !== password2){
            event.preventDefault();
            notMachingPass();
        }else{
            machingPass();
        }
    }
})
const machingPass = function(){
    const PassNotMatchError = document.querySelectorAll(".errorMessage");

    document.querySelector('.pass1').classList.remove("invalid");
    document.querySelector('.pass2').classList.remove("invalid");
    document.querySelector('.pass1').classList.add("valid");
    document.querySelector('.pass2').classList.add("valid");

    PassNotMatchError.forEach(function(errorMassage){
        errorMassage.style.display = "none" ; 
    });
    
}
const notMachingPass = function(){
    const PassNotMatchError = document.querySelectorAll(".errorMessage");

    document.querySelector('.pass1').classList.remove("valid");
    document.querySelector('.pass2').classList.remove("valid");
    document.querySelector('.pass1').classList.add("invalid");
    document.querySelector('.pass2').classList.add("invalid");

     PassNotMatchError.forEach(function(errorMassage){
        errorMassage.style.display = "block" ; 
    });
}