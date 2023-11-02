const formRegister = document.querySelector('#register-form');
const urlRegister = 'https://ghafmesle.iran.liara.run/api/client/register/';
const password = document.querySelector("#password")
const passwordRepeat = document.querySelector("#password-repeat")
console.log(passwordRepeat)
formRegister.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formRegister);
const password1 =password.value
    const password2 = passwordRepeat.value
    console.log(password1,password2)
    fetch(urlRegister, {
        method: 'POST',
        body: formData,
    })

        .then(response => response.json())
        .then(data => {
            // پاسخ موفقیت‌آمیز
            console.log(data);
            Swal.fire({
                title: 'اکانت ساخته شد!',
                text: 'با خیال راحت وارد اپ شو',
                icon: 'success',
                confirmButtonText: 'حله'
            })
            setTimeout(() => {
                window.location.href="login.html"
            },3000)
        })
    if (password1 !==password2){
        Swal.fire({
            title: 'رمز عبور ها یکسان نیستند ',
            text: 'دوباره امتحان کن',
            icon: 'error',
            confirmButtonText: 'حله!'
        })
        .catch(error => {
            // پاسخ خطا
            console.error(error);
            Swal.fire({
                title: 'اکانت ساخته نشد!',
                text: 'دوباره امتحان کن',
                icon: 'error',
                confirmButtonText: 'حله!'
            })

        });

    }
});