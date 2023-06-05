const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btnCount = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')


const checkBill = () => {

    if(price.value == '' || people.value == '' || tip.value == 0){
        error.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none'
    } else {
        error.textContent = ''
        countBill()
       
    }
}

const countBill = () => {
    const newPeople = people.value
    const newPrice = price.value
    const newTip = tip.value

    const sum = (newPrice + (newPrice * newTip)) / newPeople
    
    costInfo.style.display = 'block'
    cost.textContent = sum.toFixed(2)
}



btnCount.addEventListener('click', checkBill)