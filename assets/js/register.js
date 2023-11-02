const formRegister = document.querySelector('#register-form');
const urlRegister = 'https://ghafmesle.iran.liara.run/api/client/register/';
formRegister.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formRegister);

    fetch(urlRegister, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            // پاسخ موفقیت‌آمیز
            console.log(data);
            // window.location.href = 'index.html'
        })
        .catch(error => {
            // پاسخ خطا
            console.error(error);
            // window.location.href = 'login.html'

        });
});