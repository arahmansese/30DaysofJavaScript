const fonksiyon = number =>  number ** 2
function cube (cd,number){
    return cd ( number ) * number
}
console.log( cube (fonksiyon,3))    

// ic ice fonksiyon kullanimina ornek
const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}

console.log ( a(5)(10)(20))

//
const numbers = [1,2,3,4,5,6,4]
let total = 0 
let calculate = number => total += number
numbers.forEach(calculate)// foreach kullanimini gosterdi ancak bunu sonra arastiram gerek
console.log(total)

function sayHello(){
    console.log('Hello')
}

setInterval(sayHello,5000) //calistirilan kodun verilen sure bittigi zaman tekrar calismaisini saglar.
setTimeout(sayHello,1000) // kodun gecikmeli calismasini saglar,bir kez calistirir.

const interval = setInterval(sayHello,1000)

const timeout = setTimeout(()=>{
    clearInterval(setInterval)
    console.log('Interval islemi iptal!')
},5000)

setTimeout(() => {
    clearTimeout (timeout)
    console.log('timeout islem iptal edildi, interval devam edecek.')
}, 3000)
 
let users = [
    {
        id: 1,
        name: 'Abdurrahman',
        age : 20,
        gender : 1
    },
    {
        id : 2,
        name : "Aysenur",
        age  : 22,
        gender : 2

    },
    {
        id : 3,
        name : "Zahid",
        age : 32,
        gender : 1
    },
    {
        id : 4,
        name : "Haticenur",
        age : 13,
        gender : 2
    }
]

users = users.map (users => {
    if (users.id == 2){
        users.name = "Hakan"
    }
    return users
})

console.log(users)

console.log(numbers.filter(number => number > 3) // veri icinden deger filtrelemek icin kullanilabilir 
)

  console.log(
    numbers.reduce((oldValue,currentValue)=>{
        return oldValue + currentValue
       
    },0 )
  )
  console.log(users.every(user => user.gender == 1))
  console.log(users.some(user => user.gender == 1))

  const currentUser = users.find(user=> user.id == 3)
  console.log(currentUser) 

  const names = ['Tayfun',"Ertan","Seval"]
  const numaralar = [2,5,9,6,4,8,1,10,25,31]
  names.sort((a,b)=>b-a) 
  numaralar.sort((a,b)=>b-a)
  console.log(names,numaralar)