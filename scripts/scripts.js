const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn)
for (const btn of allBtn){
    // console.log(btn)
    btn.addEventListener("click", function (event){
        const btnName = event.target.parentNode.childNodes[0].innerText
        
        const selectedContainer = document.getElementById("selected-seat-container");

        // for 1 time press of any button
        event.target.setAttribute("disabled", false)
      

        // for limit of for seat
        const firstSeatCount = getConvertedValue("seat-count")
        if(firstSeatCount+1>4){
            alert('You can select 4 seats')
            return;
        }
        event.target.parentNode.style.background = "#1DD100"
        event.target.parentNode.style.borderRadius = "8px"
        event.target.parentNode.style.color = "white"

        // seat update
        const totalSeat = getConvertedValue("total-seat");
        document.getElementById("total-seat").innerText = totalSeat - 1;


        // ticket update

        const seatCount = getConvertedValue("seat-count");
        document.getElementById("seat-count").innerText = seatCount + 1;





        const div = document.createElement('div');
        div.classList.add('flex')
        div.classList.add('justify-center')
        div.classList.add('gap-36')

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText = btnName;
        p2.innerText = 'Economy';
        p3.innerText = parseInt('550');

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        selectedContainer.appendChild(div)
        
        updateTotalCost(550)
        updateGrandTotal()
    })
    
}


function updateGrandTotal(status){

    const totalCost = getConvertedValue("total-cost")
    if(status==undefined){
        
        document.getElementById("grand-total").innerText = totalCost;

    }
    else{
    const couponCode= document.getElementById("coupon-code").value;
        if(couponCode=='Couple 20') {
            const discount = totalCost * 0.2;
            document.getElementById("grand-total").innerText = totalCost-discount
                // if one click then hidden
             const hidden = document.getElementById('apply-btn');
            hidden.parentNode.classList.add('hidden')


        }
        else if(couponCode=='NEW15'){
            const discount = totalCost * 0.15;
            document.getElementById("grand-total").innerText = totalCost-discount
                          // if one click then hidden
             const hidden = document.getElementById('apply-btn');
             hidden.parentNode.classList.add('hidden')

        }
        
        else{
            alert('Please enter a right coupon code')
        }

    }

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

