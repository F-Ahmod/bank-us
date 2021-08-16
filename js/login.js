document.getElementById('login-submit').addEventListener
('click', function(){
    window.location.href= 'banking.html';
    
    

    const emaifield= document.getElementById('user-email');
    const useremail =emaifield.value;
   

    const passfield =document.getElementById('user-pass');
    const userpass =passfield.value;
   
    
    // if(useremail=='fateh@gmail.com' && 
    // userpass=='fateh'){
        
    //     window.location.href= 'banking.html';
    // }
});

document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'sontan@baap.com' && userPassword == '123') {
        window.location.href = 'banking.html';
    }
});


