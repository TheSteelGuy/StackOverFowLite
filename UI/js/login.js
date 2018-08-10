

var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
        let username =  document.getElementById("username").value;
        let password = document.getElementById("pwd").value;
        if(password.length < 4){
            document.getElementById('error').innerHTML = 'Password too short'
            document.getElementById('error').style.backgroundColor = 'sienna'
            document.getElementById('error').style.padding = '4px'
            document.getElementById('error').style.color = 'white'
            console.log(password.length)
        }
        if (password && username === " "){
            document.getElementById('error').innerHTML = 'Provide username and password'
            document.getElementById('error').style.backgroundColor = 'sienna'
            document.getElementById('error').style.padding = '4px'
            document.getElementById('error').style.color = 'white'
        }
         else {
            window.location = 'questions.html'
        }


});
