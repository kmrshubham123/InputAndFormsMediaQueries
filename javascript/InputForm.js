//UC1:-User Need to enter a valid name First
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let namRegex = new RegExp('^[A-Z][a-z]{2,}$');
    if (namRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name is incorrect";
});
//UC2:-User need to Enter valid Email
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let pattern = RegExp('^[A-Z a-z]{1,}([+-_.]*)[A-Z a-z 0-9 _+-.]*[@]{1}[A-Z a-z 0-9 +_-]{1,}[.]{1}[a-z]{2,3}([.]{1}[a-z]{2})*$');
    if (pattern.test(email.value))
        emailError.textContent = '';
    else
        emailError.textContent = "Email is Incorrect";
});
//UC3:-User Need to follow Pre-defined Mobile format
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function () 
{
    let telRegex = RegExp('^[0-9]{2}[ ][0-9]{10}$');
    //Checking number is valid or not using if else condition
    if (telRegex.test(tel.value)) 
        telError.textContent = "";
    else 
        telError.textContent = "telephone number is not Valid";
    
});
//UC4:-Rule:-Password Minimum 8 Character
const pwd = document.querySelector('#pwd');
const passworderror = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
    let passwordpattern = RegExp('^[a-zA-Z0-9-+_!@#$%^&*.,?]{8,}$');
    if (passwordpattern.test(pwd.value))
        passworderror.textContent = ' ';
    else
        passworderror.textContent = 'Password is Incorrect!';
});