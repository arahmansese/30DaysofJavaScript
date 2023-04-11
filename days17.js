//localStirage.setitem('name', 'tayfun')

const names = ['tayfun','ahmet ','mert']
const user = {
    name : 'abdurrahman',
    surname : 'sese'
}

localStorage.setItem('users',JSON.stringify(user))
localStorage.setItem('names',JSON.stringify(names))


console.log(localStorage)

console.log(
    JSON.parse(localStorage.getItem('user'))
)
 
const basket = JSON.parse(localStorage.getItem('basket')) || []
const  products = [
    {
        id : 1 ,
        title : 'MacBook Pro 2021',
        price : 40_000
    },
    {
        id : 2,
        title : 'keychron K6',
        price : 40_000,
    },
    {
        id : 3,
        title : 'Dellmonitor',
        price : 40_000
    }
]

function addBasket (productId) {
    basket.push(productId)
    localStorage.setItem('basket',JSON.stringify(basket))
}

function removeBasket(productId){
    basket = basket.filter(id => id != productId)
}
 addBasket(2)
 addBasket(3)

 console.log(basket)
