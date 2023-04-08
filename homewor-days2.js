let challenge =  '30 Days Of JavaScript',
day = 'Wenesday'
console.log(challenge,day)
console.log(length.challenge,length.day)
console.log(challenge.toUpperCase,day.toUpperCase)
console.log(challenge.toLowerCase)
console.log(challenge.substr(5,12),day.substring(5.25))
console.log(challenge.includes('Script'))
let markalar = {
    brnad_1 :'Facebook',
    brnad_2 :'Google',
    brnad_3 :'Microsoft',
    brnad_4 :'Apple',
    brnad_5 :'IBM',
    brnad_6 :'Oracle',
    brnad_7 :'Amazon'
} 
console.log(challenge.replace('Java','Python'))
console.log(challenge.charAt(15))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let word = 'because is a conjunction, because you cannot end a sentence with because.'
console.log(word.indexOf('because'),word.lastIndexOf('because'),word.search('because'))
console.log(challenge.match('a'))
let halfword_1 = '30 Days of'
let halfword_2 = 'JavaScript'
console.log(challenge.concat(halfword_1,halfword_2))
console.log(challenge.repeat(2))
console.log("he quote 'There is no exercise better for the heart than reaching down and lifting people up.'\
 by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same\
 -- with charity you give love, so don't just give money but reach out your hand instead.")
let check_number1 = '10'
let check_number2 = 10
console.log(check_number1 == check_number2)
let num = parseFloat('9.8');
if (num < 10) {
  num = 10;
}
let metin_1 = "I hope this course is not full of jargon"
console.log(metin_1.search('jargon'))
let num_1 = Math.random()      
let numrandom = num_1 * 101
let randomNumber = Math.floor(numrandom)
console.log(randomNumber)

let number2 = Math.floor(Math.random() * 51) + 50;
console.log(number2);

let number3 = Math.floor(Math.random()*251)
console.log(number3);

let randomIndex = Math.floor(Math.random() * 10); 
let str = "JavaScript";
let char = str.charAt(randomIndex);
console.log(char);
console.log("1 1 1 1 1")
console.log("2 1 2 4 8")
console.log("3 1 3 9 27")
console.log("4 1 4 16 64")
console.log("5 1 5 25 125")

let metin2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(metin2.substr(30,8))

let metin3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(metin3.match(/love/gi))

let metin4 = 'You cannot end a sentence with because because because is a conjunction'
console.log(metin4.match(/because/gi))

let metin5 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let aylik = metin5.substr(8,4) 
let yillik_ciro = metin5.substr(41,6) 
let cursmoney = metin5.substr(66,5)
let yillik_gelir = aylik + cursmoney
console
console.log(yillik_gelir)

