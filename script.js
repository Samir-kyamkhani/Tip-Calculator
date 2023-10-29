const calculate = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const totalAmount = document.getElementById("total")


function calculateTotal(){
    
    const billValue  = billInput.value
    const tipValue  = tipInput.value

    const total = billValue * (1 + tipValue / 100)
    totalAmount.innerHTML = total.toFixed(2)

}

calculate.addEventListener("click", calculateTotal)