const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn)
for (const btn of allBtn){
    // console.log(btn)
    btn.addEventListener("click", function (event){
        const btnName = event.target.parentNode.childNodes[0].innerText
        
        const selectedContainer = document.getElementById("selected-seat-container")

        const div = document.createElement('div');
        div.classList.add('flex')
        div.classList.add('justify-center')
        div.classList.add('gap-36')

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText = btnName;
        p2.innerText = 'Economy';
        p3.innerText = parseInt('500');

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        selectedContainer.appendChild(div)
        
        updateTotalCost(500)
        updateGrandTotal()
    })
    
}

function updateGrandTotal(){
    const totalCost = getConvertedValue("total-cost")
    document.getElementById("grand-total").innerText = totalCost;
}



function updateTotalCost(value){

    const totalCost = getConvertedValue("total-cost")
    const sum = totalCost + value;
    document.getElementById('total-cost').innerText = sum
}









// for parse initail price and parseInt. and can function called.
function getConvertedValue(id){
    const price = document.getElementById(id).innerText
    const convertedPrice = parseInt(price);
    return convertedPrice;
}








// ---- jokhon lagbe use korbo
// const price = getConvertedValue('total-seat')
// const seatCount = getConvertedValue('seat')
// const left = getConvertedValue('')