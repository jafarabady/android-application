// let formData = new FormData
const initialData = {
    name: 'mmd',
    family:'mmdy'
}

let url = "https://salamm.iran.liara.run/";

// برای Post
fetch(url, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(initialData)
})
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Network response was not ok.");
    })
    .then(function (responseData) {
        // پاسخ موفقیت‌آمیز از سرور دریافت شده است
        console.log(responseData);
    })
    .catch(function (error) {
        // خطا در ارتباط با سرور
        console.log(error);
    });

// // برای Get

fetch(url)
    .then(response => response.json())
    .then(data => {
        // const mmd = document.querySelector('.container')
        const habal = document.querySelector('h1')
        for (let i = 0; i < data.group.length ; i++){

            const ali = document.createElement('span')
            ali.innerText = data.group[i].name
            habal.append(ali)

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
