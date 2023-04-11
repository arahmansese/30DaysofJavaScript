let sampleJSON = `[   
    {
        "name" : "Tayfun" ,
        "Surname" : "Erbilen" 
    },
    {
        "name" : "Abduurahman" ,
        "Surname" : "SESE" 
    },
    {
        "name" : "Aysenur" ,
        "Surname" : "SESE" 
    }
]`;


let catagories = [
    {
        name : 'css',
        count : 5
    },
    {
        name : 'javascript',
        count : 16
    }
]
let catagoriesJSON = JSON.stringify(catagories)

console.log(catagoriesJSON)
try {
    let users = JSON.parse(sampleJSON,(key,value) =>{
        return key == 'name' ? value.toUppercase : value
    })
console.log(users)
} catch(err) {
    console.log(err.message)
} 