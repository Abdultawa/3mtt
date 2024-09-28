const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

function handleLoginButton()
{
    alert(`Login ${username.value} Successfully`);
}

loginButton.addEventListener('click', function(){
        handleLoginButton()
    });
