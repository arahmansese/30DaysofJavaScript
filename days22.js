for (let i = 0 ; i <= 10 ; i++) {
    let h1 = document.createElement('h1')
    h1.className = 'test'
    h1.style.backgroundColor = 'blue' 
    h1.style.color = 'white'
    h1.textContent = 'bu javascript ile eklendi' +i
    document.body.append(h1) //propend
}

const allH1Elements = document.querySelectorAll('h1')

for( const h1 of allH1Elements) {
    h1.remove()
}