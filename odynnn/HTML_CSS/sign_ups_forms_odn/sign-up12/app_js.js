const root = document.documentElement;
const formControls = document.querySelectorAll('.form_control');
const form = document.querySelector('.form');
const password1Input = document.querySelector("#password1");
const password2Input = document.querySelector("#password2");

let click = new Event("click");
const porscheLogoImg = document.querySelector('.porscheLogo_img');
const checkPasswords = () => {
    let password1Value = password1Input.value;
    let password2Value = password2Input.value;
    if(!password2Value) {
        password1.style.border = '1px solid green';
        password1.previousElementSibling.style.color = 'green'
    } else if (password1Value != password2Value) {
        password1.style.border = '1px solid red';
        password1.previousElementSibling.style.color = 'red';
        password2.style.border = '1px solid red';
        password2.previousElementSibling.style.color = 'red';
    } else {
        password1.style.border = '1px solid green';
        password1.previousElementSibling.style.color = 'green';
        password2.style.border = '1px solid green';
        password2.previousElementSibling.style.color = 'green';
    }
}

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const sunPseudo = document.querySelector('.sunPseudo');
const moonPseudo = document.querySelector('.moonPseudo');

sunPseudo.addEventListener('click', () => {
    if(!sun.classList.contains('arc-out-sun')){
        sun.classList.toggle('arc-out-sun');
        moon.classList.toggle('arc-in-moon');
    } else {
        moon.classList.toggle('arc-out-moon');
        sun.classList.toggle('arc-in-sun');
    }
    sunPseudo.classList.toggle('fade-out');
    moonPseudo.classList.toggle('fade-in');
    root.classList.add('night-mode');
    console.log('clicked');
})

moonPseudo.addEventListener('click', () => {
    moon.classList.toggle('arc-out-moon');
    sun.classList.toggle('arc-in-sun');
    sunPseudo.classList.toggle('fade-out');
    moonPseudo.classList.toggle('fade-in');
    root.classList.remove('night-mode');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formControls.forEach(control => {
        if(!control.value){
            control.style.border='1px solid red';
            control.previousElementSibling.style.color= 'red'
        }
    })
})

const nameInput = document.querySelector('#naem');
const emailInput = document.querySelector('#email');

password1Input.addEventListener('input', () => {
    checkPasswords();
})
password2Input.addEventListener('input', () => {
    checkPasswords();
})

formControls.forEach(control => {
    control.addEventListener('input', () => {
        if(control.value){
            control.style.border = '1px solid gren';
            control.previousElementSibling.style.color = 'green'
        } else {
            control.style.border= '1px solid red';
            control.prevoousElementSibling.style.color= 'red'
        }
    })
})

emailInput.addEventListener('input', () => {
    let inputValue = emailInput.value;
    console.log(inputValue);
    if(/@\w*(.com|.ca|.org|.pl)/.test(inputValue) === false){
        emailInput.style.border = '1px solid red';
        emailInput.previousElementSibling.style.color='red';
    }
})

formControls.forEach((control) => {
    control.addEventListener('focus', (e) => {
        if(e.target.style.borderColor != 'red' && e.target.style.borderColor != 'green'){
            if(!root.classList.contains('night-mode')){
                e.target.previousElementSibling.style.color = '#e98227';
            } else {
                e.target.previousElementSibling.style.color = '#e4700b3';
            }
        }
    })
    control.addEventListener('blur', (e) => {
        if(e.target.style.borderColor != 'red' && e.target.style.borderColor != 'green'){
            e.target.previousElementSibling.style.color = '';
        }
    })
})

let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(matched) {
    console.log('Tryb nocny');
    root.classList.add('night-mode');
    sunPseudo.dispatchEvent(click);
} else {
    console.log('Tryb dzienny*');
}