const form = document.querySelector('#myForm');
const url = 'https://ghafmesle.iran.liara.run/api/client/login/';
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(url, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            // پاسخ موفقیت‌آمیز
            if (data.acsess){
                localStorage.setItem('access-token', data.acsess);
            }
            console.log(data);
            // window.location.href = 'index.html'
        })
        .catch(error => {
            // پاسخ خطا
            console.error(error);
            // window.location.href = 'login.html'

        });
});