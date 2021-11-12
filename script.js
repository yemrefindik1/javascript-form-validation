const form = document.getElementById('form');
const kullaniciadi = document.getElementById('kullaniciadi');
const email = document.getElementById('email');
const sifre = document.getElementById('sifre');
const sifretekrar = document.getElementById('sifretekrar');

function error(input, message) {
   input.className = 'form-control is-invalid'
   const div = input.nextElementSibling;
   div.innerText = message
   div.className = 'invalid-feedback';
}
function succes(input) {
    input.className = 'form-control is-valid'
}
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        succes(input);
    }else{
        error(input, 'Geçerli bir e-posta adresi girin')
    }
}

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.name} girin.`);
        }else{
            succes(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.name} en az ${min} karakter olmalıdır.`);
    }else if(input.value.length > max){
        error(input, `${input.name} en fazla ${max} karakter olmalıdır.`);
    }else{
        succes(input);
    }
}
function checkPasswords(input1,input2) {
    if (input1.value !== input2.value) {
        error(input2,'Şifreler eşleşmiyor')
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([kullaniciadi,email,sifre,sifretekrar]);
    checkEmail(email);
    checkLength(kullaniciadi,7,15);
    checkLength(sifre,7,15);
    checkPasswords(sifre,sifretekrar);
});
