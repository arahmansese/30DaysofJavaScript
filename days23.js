const button = document.getElementById('btn')

button.addEventListener('click',function(e){
    console.log('hayirli geceler :D')
})

function clickHandle() {
    console.log('butona mi tikladin ?')
}
const button2 = document.getElementById('btn')

button2.onclick = e => {
    console.log(e)
}

const img = document.querySelector('img')
img.addEventListener('load',function(){
    console.log('resim yuklendi.')
})

img.addEventListener('error',function(e){
   console.log('yukleme basarisiz.',e)
   
})

const input = document.getElementById('name')
input.addEventListener('keyup', e => {
    if (e.target.value){
        e.target.classList.remove('error')
    }
    console.log('birseyler yaziliyor', e.target.value)
})

const colorInput = document.getElementById('color-picker')
colorInput.addEventListener('input', e => {
    document.body.style.backgroundColor = e.target.value
})

const genderTags = document.getElementById('gender')
genderTags.addEventListener('select',e => {

})

const saveRulesCheckBox = document.getElementById('save-rules')
console.log(
    document.querySelector('input[name=stack]').checked
)

const form = document.getElementById('form')

const saveButton = document.getElementById('save-btn')
saveButton.addEventListener('click', e => {
    console.log(
        input.value,
        colorInput.value,
        genderTags.value,
        saveRulesCheckBox.checked,
        form.elements.stack.value

    )
})

document.body.addEventListener('keydown', e =>{
    console.log(e.key)
})


