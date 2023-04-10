const numbers = [10,12,14]

const [ahmet,mehmet] = numbers

console.log(numbers[0])//10
console.log(ahmet)//10

console.log(numbers[1])//12
console.log(mehmet)//12

console.log(numbers[2])//14

 const stack = [
 ['HTML','CSS','JAVASCRIPT',undefined],
 ['PHP','MYSQL','NODEJS',['C#']]
 ]

 const [forntend ] = stack // direk olarak ilk diziye ulasir 
 const [[FirstLanguages]] = stack // ilk dizinin ilk degerine ulasir.
 const [[],[ , , ,[deger4]]] = stack // C# degerine ulasmak icin.
 const [ , , ,belirsiz= 'PYTHON' ] = stack // undefined olarak gecen bir degeri doldurabilrisin.

 console.log(forntend)
 console.log(FirstLanguages)
 console.log(deger4)
 console.log(belirsiz)

const MyFamily = ['Ertan','Seval','Abdurrahman','Aysenur','Haticenur','Safiyenur']

const MyParents = [MyFather,MyMother, ,...MySiblings] = MyFamily // buradaki '...' noktanin gorevi rest operatoru olarak kalanlari bir dizi haline getirmek.
console.log(MyMother)
console.log(MyFather)
console.log(MySiblings) 

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
    ['Turkey','Ankara']
    ]

for (const [country, city] of countries) {
console.log(country, city)
}


const users = {
    name : 'Abdurrahman',
    surname : 'SESE',
    age : 19,
    pets : {
        cats : 'Kedi',
        dog : 'Kopek'
    }
}

const {name : isim, surname : soyad} = users  // ismin obje icindeki key ile ayni olmasi lazim,dizi ler gibi  anahtarsiz degil cunku
const {from = 'Ankara'} = users

console.log(isim,soyad)
console.log(from)

const sayilar = [1,2,3,4,5,6[7,8,9,10]]
const sayilar_yedek = [...sayilar,[...sayilar]] // kopyalamak icin kullanilabilir ancak dizi icinde diziye erisemedim


console.log(sayilar_yedek)