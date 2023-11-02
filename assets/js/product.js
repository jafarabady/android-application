const url = "https://ghafmesle.iran.liara.run/api/product/list/";
const productParent = document.querySelector(".productParent");
console.log(productParent)

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
              <div class="text-center">
        <h2 class="text-black font-bold text-[16px] ">${data.product[i].name}</h2>
        <p class="text-black text-[13px]">${data.product[i].description}</p>
    </div>
            `
        }
    })
}
getReq()