// let formData = new FormData
const initialData = {
    name: 'mmd',
    username:'mmdy',
    loc:'qom',
    ncode:'037',
    password:'1111',
    cellphone:'0912',
    qom:1,
}

let url = "https://ghafmesle.iran.liara.run/api/client/register";

// برای Post
// fetch(url, {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(initialData)
// })
//     .then(function (response) {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error("Network response was not ok.");
//     })
//     .then(function (responseData) {
//         // پاسخ موفقیت‌آمیز از سرور دریافت شده است
//         console.log(responseData);
//     })
//     .catch(function (error) {
//         // خطا در ارتباط با سرور
//         console.log(error);
//     });

// // برای Get
//
fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => {
        // const mmd = document.querySelector('.container')
        const habal = document.querySelector('.our-price')
        const habal2 = document.querySelector('.product-name')
        const habal3 = document.querySelector('.their-price')
        for (let i = 0; i < 19 ; i++){
            const ali = document.createElement('span')
            const ali2 = document.createElement('span')
            const ali3 =document.createElement('span')
            ali.innerText = data.price
            ali2.innerText = data.category
            ali3.innerText = data.price
            ali.classList.add('text-green-500')
            ali2.classList.add('font-bold')
            ali3.classList.add('text-red-500')
            habal.append(ali)
            habal2.append(ali2)
            habal3.append(ali3)

        }


    })
// const getReq = async (obj) => {
//     return axios({
//         url: `${url}`,
//         method: "GET",
//         headers: {},
//         data: obj.body
//     });
// };
//
// // post request
// const postReq = async (obj) => {
//     return axios({
//         url: `${url}`,
//         method: "POST",
//         headers: {
//             withCredentials: true
//         },
//         data: formData
//     });
// }
//
// // delete request
// const deleteReq = async (obj) => {
//     return axios({
//         url: `${url}`,
//         method: "DELETE",
//         headers: {},
//         data: obj.body
//     });
// };
//
// // put&patch request
// const putOrPatch = async (obj) => {
//     return axios({
//         url: `${url}`,
//         method: "PATCH",
//         headers: {},
//         data: obj.body
//     });
// };
postReq()
// postReq()
// export files
// export { getReq, postReq, deleteReq, putOrPatch };
