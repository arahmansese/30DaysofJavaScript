let person = ['Haticenur','SESE',15,2012]
 
console.log(person.length)
console.log(person[1])

let doldurma =  Array(8).fill("----")
let baslik = "Loading \n"
let birlestir = baslik.concat(doldurma) // iki farkli degeri birlestirmek icin kullanilir.
console.log(birlestir)
console.log(person.indexOf(15)) //yazilarn degerin dizi icinde olup olmadigina bakar.
console.log(person.indexOf(2003)) // deger varsa dizi icindeki yerini doner,yoksa -1 doner.
console.log(person.includes('Haticenur')) //degerin dizi icinde olup olmadigi ture false olarak doner.
console.log(person.includes('Abdurrahman')) 
console.log(Array.isArray(doldurma)) // verini dizi olup olmadigini ture false olarak doner.
console.log(Array.isArray(baslik))
console.log(doldurma.join('')) // dizi icindeki degerleri birlestiriken aralarini nasil doldumak istersniz oyle yapilandirir.
console.log(person.slice()) // -> it copies all  item
console.log(person.slice(0)) // -> it copies all  item
console.log(person.slice(0, person.length)) // it copies all  item
console.log(person.slice(1,3)) // ->['SESE',15,2012]  // it doesn't include the ending position
