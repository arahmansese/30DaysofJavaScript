function sayHello(){
  let msg = 'Hello World'
  return msg// tam olarak mantigini anlamadim sonrasinda bakicam
}

let Hello = sayHello()
console.log(Hello)

function hesap(num1,num2 =5) { // sayi verilmez ise num2  default olarak 5 sayisini doner
  console.log('Sonuc',num1 * num2)
    
}

hesap(2,5)

function topla (){
  let total = 0 
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i] 
  }
  return total
}
console.log(topla(2,3,5,6,9,8))// girdi sayisini bilmez isek kullanilan bir yontem.

const Write_name = function(name){
  return `Hello ${name}`
}
console.log(Write_name('Abdurrahman'));

(function(){
  console.log('Welcome back !!!')
})() // kendini otomatik calistirir bu sekilde  

const demo  = name => {console.log(`Hello ${name}`)}
demo('Haticenur')
