
const input =document.querySelectorAll("input");
const form =document.querySelector("form");

window.onload = localLoadup;
form.addEventListener("submit",formcheck);
form.addEventListener("submit",handleSignUp);

function formcheck(e){
    form.submit();
}

function handleSignUp(event) {
    event.preventDefault
    const formData = new FormData(form), 
        formJSON = Object.fromEntries(formData),
        formStr = JSON.stringify(formJSON);
    localStorage.setItem("formStr", formStr)
    formStr.forEach((e) => {
        console.log(e)
    })
}

function localLoadup() {
    const formStr = JSON.parse(localStorage.getItem("formStr"));
    console.log(formStr)
    
}



