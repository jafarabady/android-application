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
            Swal.fire({
                title: 'اکانت ساخته شد!',
                text: 'با خیال راحت وارد اپ شو',
                icon: 'success',
                confirmButtonText: 'حله'
            })

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
});