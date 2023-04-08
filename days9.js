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

setTimeout(()=>{
    clearInterval(setInterval)
    console.log('Interval islemi iptal!')
},5000)

setTimeout(() => {
    clearTimeout (timeout)
    console.log('timeout islem iptal edildi, interval devam edecek.')
}, 3000)
 //bu bir testtir v2
 // calistiiii !!!!