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