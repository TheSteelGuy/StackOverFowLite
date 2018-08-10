
var signupForm = document.getElementById("signupform");
signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let username =  document.getElementById("username").value;
    let email = document.getElementById('email').value;
    let password = document.getElementById("pwd").value;
    let confirm_pwd = document.getElementById("cpwd").value;
    if (password === confirm_pwd){
        window.location = 'questions.html'
    }else{
        document.getElementById('error').innerHTML = 'Password and confirm password fields must be the same'     
        document.getElementById('error').style.backgroundColor = 'sienna';
        document.getElementById('error').style.padding='17px';
        document.getElementById('error').style.color = 'white';
               
    };
        
});
