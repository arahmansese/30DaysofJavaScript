// -- Ilkle olan veri turleri --
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

// --Ilkel olmayan veri turleri--
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Abdurrahman',
role:'studnent',
country:'Turkey'
}

let userTwo = {
name:'Abdurrahman',
role:'studnent',
country:'Turkey'
}

console.log(userOne == userTwo) // false
/*
Karsilastirma yaptigim zaman her ne kadar ayni gozukse de
degerlerin referanslari farkli oldugu icin False degerini verdi.
*/
let nums1 = [1, 2, 3]
let numbers1 = nums1

console.log(nums1 == numbers1) // true
/*
karsilastirma da  referans ayni olursa deger True olarak doner.
*/

let name = 'Abdurrahman'
let surname = 'SESE'
let FullName = name+' '+  surname
console.log(FullName)
const paragraph = "dsdasd\
sdad\ " // "\" kullanarak metni alt kod satirindan devam ettirebilrsin.
console.log(paragraph)
/*
 --Escape Sequences in Strings--
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
/*  --Template Literals (Template Strings)--
bir degeri  string deger icinde cagirmak istersek ${} seklinde cagrilir
dikkat edilmesi gereken nokta,parantezi `` bunlar ile acmamiz gerek.
*/
console.log(`deneme ${surname}`)
//split(): The split method splits a string at a specified place.
let car = ' togg tgx10 ' 
console.log(car.split())   // split metodu yazdiginiz string metodu belli yerlerden istediginiz sekilde boler.
console.log(car.split('')) // burda harflere  ayiriken.
console.log(car.split(' '))// burda kelimelere boluyor.

//trim(): Removes trailing space in the beginning or the end of a string.
console.log(car.trim()) // bosluk silici

//includes(): string deger icindeki kelimleri aratir ve boolean veri doner
// Dikkat !!! buyuk ve kucuk harfe duyarlidir !!!
console.log(car.includes('togg')) // true

/*replace(): deger icindeki veriyi degistir.
Dikkat !!! bir deger icinde iki tane ayni veriyi degistirmek istesek
replaceAll (): metodunu kullanmamiz gerekir.
*/
console.log(car.replace('tgx10','suvmodel'))

let gpt = 'chatgpt 3 or chatgpt 4'
console.log(gpt.replaceAll('gpt','ptt'))

/*
         Truthy values (true kabul edilen veri tipleri)
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true

         Falsy values (false kabul edilen veri turleri)
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
*/

let count = 0
console.log(++count)        // 1 burda '++' nereye koydugunuz cok onemli, eger basina koyarsaniz,
console.log(count)          // 1 islemi yaparken arttirma yapar,sonuna koyarsaniz islemi bitirken koyar.

//tek saritlik basit bir kosul ifade icin kullanila yontem.
let question =true ? console.log('evet kaynadi') : console.log('Hayri kaynamadi')