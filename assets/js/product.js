const url = "https://ghafmesle.iran.liara.run/api/product/list/";
const productParent = document.querySelector(".productParent");

function getReq(parent){
    fetch(url)
        .then(response => response.json()).then(data=>{
        console.log(data.product.length)
        for (let i=0;i<data.product.length;i++){
            // const ali = document.createElement('span')
            // ali.innerText= data.product[i].name
            // productParent.append(ali)
            console.log(data)
            productParent.innerHTML+=`
        <div class="flex items-center mx-auto gap-4 justify-between w-full">
              <div class="text-center w-full">
        <h2 class="text-black font-bold text-[16px] text-center ">${data.product[i].name}</h2>
        <p class="text-black text-[13px] text-center">${data.product[i].description}</p>
    </div>
        <div class="flex gap-4">
        <button class="increaseBtn border border-2 rounded-2xl px-4 py-2 hover:bg-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#1D2026" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M8.25 12H15.75" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8.25V15.75" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button class="decreaseBtn border border-2 rounded-2xl px-4 py-2 hover:bg-red-500" >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#1D2026" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M8.25 12H15.75" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
    </div>
            `
        }
    })
    let count = 0;
    const setCount = document.createElement("h2")
    setCount.append(count)
    const increaseBtn=document.querySelector(".increaseBtn");
    console.log(increaseBtn)
    const decreaseBtn = document.querySelector(".decreaseBtn");
    increaseBtn.addEventListener("click",()=>{
        count++;
    })
    decreaseBtn.addEventListener("click" ,()=>{
        count--;
    })
}
getReq()

function counter(){

}
counter()
