const ul = document.querySelector('ul')
//const deleteButtons = document.querySelectorAll('.delete-btn')
const deleteButtons = ul.children;

console.log(ul.firstElementChild);

console.log(ul.attributes)
for (const attr of ul.attributes){
    console.log(attr.name, attr.value)
}

//const ul2 = document.querySelector('ul')
//console.log(ul.childElementCount)

// deleteButtons.forEach(btn => {
//     btn.addEventListener('click', e => {
//         e.target.remove()
//         if (ul.childElementCount == 0 ) {
//             ul.innerHTML = 'Gosterilecek veri bulunamadi ! '
//         }
//         console.log(ul.childElementCount) 
//     })
// })

[...deleteButtons].forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.remove()
        if (ul.childElementCount == 0 ) {
            ul.innerHTML = 'Gosterilecek veri bulunamadi ! '
        }
        console.log(ul.childElementCount) 
    })
})

const test = document.querySelector('.test')

console.log(
    test.clientWidth
)

const title = document.querySelector('.title')

console.log(
    title.previousElementSibling
)
console.log(
    title.nextElementSibling.nextElementSibling
)

const scrollContent = document.querySelector('.scroll-concent')
const scrollContent2 = document.querySelector('.scroll-concent2')
const scrollDownBtn = document.getElementById('scroll-down')
const scrollRigthBtn = document.getElementById('scroll-rigth')
const scrollLeftBtn = document.getElementById('scroll-left')
const scrollUpBtn = document.getElementById('scroll-up')

console.log(
    scrollContent.clientHeight,scrollContent2.clientWidth
    );

    scrollDownBtn.addEventListener('click', () => {
        console.log(scrollContent.scrollTop += 50)
    })

    scrollRigthBtn.addEventListener('click', () => {
        console.log(scrollContent2.scrollLeft +=50 )
    })
    
    scrollLeftBtn.addEventListener('click', () => {
        console.log(scrollContent2.scrollLeft -= 50)
    })
    
    scrollUpBtn.addEventListener('click', () => {
        console.log(scrollContent.scrollTop -= 50)
    })
    
    scrollContent.addEventListener('scroll', e => {
        if(scrollContent.scrollWidth - scrollContent.clientWidth == e.target.scrollLeft ){
            scrollRigthBtn.setAttribute('disabled','disabled')
        }else{
            scrollRigthBtn.setAttribute('disabled')
        }

        if(e.target.scrollLeft == 0 ){
            scrollLeftBtn.setAttribute('disabled','disabled')
        }else{
            scrollLeftBtn.removeAttribute('disabled')
        }
    })