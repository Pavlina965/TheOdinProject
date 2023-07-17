const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwords = document.querySelectorAll('#password, #confirm-password')
const errorMsg=document.querySelector('.error-msg')
passwords.forEach(psw=>{
  psw.addEventListener('input', ()=>{
      Check()
  })
})
function Check(){
    if(password.value ===confirmPassword.value){
        password.classList.remove('error');
        confirmPassword.classList.remove('error')
        errorMsg.textContent = ''
    }
    else{
        password.classList.add('error');
        confirmPassword.classList.add('error')
        errorMsg.textContent='Passwords does not match'
    }
}