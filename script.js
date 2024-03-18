//Variable assignment
const nav  = document.querySelector('nav');
const sections = document.querySelectorAll('.section');
const state = document.querySelector('.status');
const userNamePage = document.querySelector('.username');
const userName= document.getElementById('uname');
const firstName = document.getElementById('fname');
const emailPage = document.querySelector('.email');
const email = document.getElementById('email')
const passwordPage = document.querySelector('.password');
const password = document.getElementById('pwd');
const confirmPassword = document.getElementById('confirmPwd');
const successPage = document.querySelector('.success');
const ok = document.querySelector('.ok');
const nextButton  = document.querySelector('.next');
let currentSectionIndex = 0;
const passwordSectionIndex = 2;
const successSectionIndex = 3;

//Scripts for nav function
nav.addEventListener('click', () => {
  if (currentSectionIndex > 0) {
    if(emailPage.style.display === 'block'){
      state.children[2].style.backgroundColor = "";
      nav.style.opacity = 0;
      nextButton.style.opacity = 1;
    }
    if(passwordPage.style.display === "block"){
      state.children[4].style.backgroundColor = "";
      nextButton.style.opacity = 1;
    }
    if(successPage.style.display === 'block'){
      state.children[6].style.backgroundColor = "";
      nextButton.style.opacity = 1;
    }
    sections[currentSectionIndex].style.display = 'none';
    currentSectionIndex--;
    sections[currentSectionIndex].style.display = 'block';
  }
});

//Sripts for nextButton function
if(state.children[2].style.backgroundColor === ""){
  nextButton.addEventListener('click', ()=>{
    if(userName.value === "" || firstName.value===""){
      userName.value="";
      alert("Please enter Username and Firstname")
    }
  })
}

nextButton.addEventListener('click', () => {
  if (currentSectionIndex === passwordSectionIndex) {
    const currentSection = sections[currentSectionIndex];
  if (password && confirmPassword && password.value && confirmPassword.value) {
    // Check if passwords match
    if (password.value === confirmPassword.value) {
      currentSection.style.display = 'none';
      currentSectionIndex++;
      if
      (currentSectionIndex < sections.length) {
        sections[currentSectionIndex].style.display = 'block';
      }
    } else {
      alert('Passwords do not match');
    }
  } else {
    alert('Please fill in both password and confirm password fields');
  }
} else {
  const currentSection = sections[currentSectionIndex];
  const inputField = currentSection.querySelector('input');
  if (inputField && inputField.value) {
     currentSection.style.display = 'none';
     currentSectionIndex++;
  if (currentSectionIndex < sections.length) {
     sections[currentSectionIndex].style.display = 'block';
     if(emailPage.style.display === 'block'){
        email.focus();
        state.children[2].style.backgroundColor = "black";
        email.style.marginBottom = "8px";
        nav.style.opacity = 1;
      }
      if(state.children[2].style.backgroundColor === "black"){
        nextButton.addEventListener('click', ()=>{
          if(email.value === ""){
            alert("Please enter the email address")
          }
        })
      }
    if(passwordPage.style.display === "block"){
        password.focus();
        state.children[4].style.backgroundColor = "black";
        password.style.marginBottom = "8px";
        confirmPassword.style.marginBottom = "8px";
      }
    }  
   }
  }
  if (currentSectionIndex === successSectionIndex) {
    // Update styles for the successPage section here
    state.children[6].style.backgroundColor = 'black';
    nextButton.style.opacity = 0;
  }
});


//Rules for username
function userNameValidation() {
  const name = userName.value;
  const value = name.toLowerCase();
  const specialChars = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '+', '=', '[', ']', '{', '}', '|', ':', ';', "'", '"', ',', '.', '?', '<', '>', " ", '/'];
  const escapedSpecialChars = specialChars.map(char => char.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
  const regexPattern = new RegExp(`[${escapedSpecialChars.join('')}]`);

  if(value.length > 1 && value.length < 4){
    alert('Username is too short'); 
    userName.value = "";
    return;
  }

  if (regexPattern.test(value)) {
    alert('No spaces or special characters allowed');
    userName.value = "";
  }
}

userName.addEventListener('blur', ()=> {
  userNameValidation();
});

//Rules for Email
function emailValidation(){
const emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!emailValidRegex.test(email.value)){
  alert('Please enter the valid email address'); 
  email.value=""; 
}
}

email.addEventListener('blur', ()=>{
  emailValidation();
})

// Rules for password
function pwdValidation(){
const pwdValidRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
if(!pwdValidRegex.test(password.value)){
  password.value = "";
  confirmPassword.value = "";
  alert('Password does not meet the policy');
}
}
password.addEventListener('blur', ()=>{
  pwdValidation();
})

ok.addEventListener('click', ()=>{
  state.children[8].style.backgroundColor = "black";
  window.location.reload(true)
})

//Event listeners for prevent default
email.addEventListener('keypress', function(event){
  if(event.key === "Enter"){
    event.preventDefault()
  }
});

password.addEventListener('keypress', function(event){
  if(event.key === "Enter"){
    event.preventDefault()
  }
});

confirmPassword.addEventListener('keypress', function(event){
  if(event.key === "Enter"){
    event.preventDefault()
  }
});





