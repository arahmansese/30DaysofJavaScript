let fullName

/*
try {
    let firstName = 'tayfun'
    let lastName = 'erbilen'
    fullName = firstName+ ' ' + lastName
    fullName = firstName+ ' ' + surname

    throw new Error('bir hata var !') //kendi hatamizi olusturur. 
} catch(error) { 
    console.log(error.message,error.name)
    console.table(error)
}

console.log(fullName)
*/

let age = prompt('Kac yasindasi ?')

try {
    if (age > 19) throw new Error ('Bu bilgi yasinizi soylemiyor.')
}  catch(error) {
    alert(error.message)
}