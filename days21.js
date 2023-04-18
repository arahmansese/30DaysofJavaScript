// html collection oldugu icin array gibi davranmiyor.
const h2 = document.getElementsByClassName('title-1') 
const h1 = document.getElementsByTagName('h1')
const h3 = document.getElementById('title')
const css = document.querySelector('.title-1 + #title') // ilk esleseni almak icin kullanilir.
console.log(css)
console.log(h3)
console.log(document.querySelectorAll('.title-1'))

document.querySelectorAll('.title-1').forEach(item => console.log(item));

h3.setAttribute('style','color: blue; background-color : yellow')
h3.setAttribute('title','test baslik')
h3.setAttribute('class','adana')

document.querySelectorAll('h1').forEach((h1,index) => {
    if (index % 2 == 0) {
        h1.style.color = 'green'
    }else {
        h1.style.color = 'red'
    }
})

//h3.style.color  = 'blue'
//h3.style.backgroundColor = 'yellow'
//h3.title = 'test baslik'
//h3.className = 'adana'
h3.classList.add('abdurrahman')
h3.classList.remove('test1')
h3.innerHTML = 'yeni deger <u> test </u>'

/*
console.log(h1)
let len = h1.length
for (let i = 0 ; i < len ; i++ ){
    console.log(h1[i])
}

[...h1].forEach(item => {
    console.log(item)
})
*/