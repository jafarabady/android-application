// const allTimes =document.querySelectorAll(".time")
// const allDate=document.querySelectorAll(".date")
//
// allDate.forEach(date => {
//     date.addEventListener("click",(e)=>{
//         date.classList.add("activeButton")
//         const dateActive = document.querySelector(".activeButton")
//         if (dateActive) {
//             dateActive.classList.remove('activeButton')
//         }
//         console.log()
//         e.target.classList.add("activeButton")
//     })
// })
const mmd = document.querySelector('.alert-product')
const handleSubmit = ()=>{
    mmd.classList.remove('hidden')
    mmd.classList.add('block')
    setTimeout(()=> {
        window.location.href = 'index.html'
    },3000)
}
