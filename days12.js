//regex
//1- RegEx constructor
//RegEx tanimi

let str = 'Ben 20 yasindayim ve 2003 dogumluyum.'
let username = 'Abdurrahman sese'

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern,flag)

let regex = /love/gi

//let regex = /love/gi == let regEx = new RegExp('love','gi')

/*
let world = /salak/i //burada ki i buyuk kucuk harf duyarliligi ekler.
let commet = prompt ('kelimlelerini dikkatli sec')


if (world.test(commet)== true){
    alert('Yorum kaldirilmistir')
    console.log('bu yorum argo kullanilimindan dolayi kaldirilmistir.') 
} else {
    alert('Yorumunuz basari bir sekilde eklenmistir.')
    console.log(commet)
}
*/

let string = 'I love Love lOve lOVE you.'
console.log(string.match(/love/ig)) // burda g harfi butunn eslesmeleri getirmek icin kullanilir
console.log(string.search(/love/ig)) // seach macth ten farkli olarak ilk buldugunu baslangic index ini gosterir.

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let macthReplaced = txt.replace(/python/gi,'JavaScript')
console.log(macthReplaced)
    