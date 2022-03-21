var getOtp = document.getElementById('getOtp');
var login = document.getElementById('login');
var register = document.getElementById('register');
var btn = document.getElementById('btn');

function registered() {
    getOtp.style.display = "none";
    login.style.display = "none";
    register.style.display = "block";
    btn.style.left= "110px";
}

function logined() {
    getOtp.style.display = "block";
    login.style.display = "block";
    register.style.display = "none";
    btn.style.left= "0";
}




