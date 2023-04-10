  const namesSet = new Set(['Tayfun','ahmet','mehmet']);

 // names.add ("aysenur","abdurrahman")// bu komut ile tek veri akliyebilirsin.
 // [...name].map(name => console.log(name))

 const names = ['Tayfun','Ahmet','Mehmet']
 for (let name of names){
  namesSet.add(name)
 }
console.log(namesSet.has('ahmet'))
 namesSet.delete('ahmet')
 console.log(namesSet)
console.log(namesSet.has('ahmet'))

const languages = 
[
'turkiye',
'almanya',
'amerika',
'yunanistan',
'bosna hersek',
'almanya',
'yunanistan',
'almanya',
'yunanistan',
'almanya',
'almanya',
'yunanistan',
]

//console.log([...new Set(dizi)]) // tekrar edenleri cikartarak uniq bir dizi olusturur.

const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)
const counts = []
for (let l of langSet){
  const filteredLang = languages.filter(tur => tur == l)
  counts.push ({
    Countries : l,
    count : filteredLang.length
  })
}

console.log(counts)

const a = [1,2,3,4]
const b = [3,4,5,6]

const c = [...a, ...b]

console.log(new Set (c))

const a_2 = [1,2,3,4,5]
const b_2 = [2,3,4,5,6]

const A_2 = new Set(b_2)
const B_2 = new Set(a_2.filter(num => A_2.has(num)))

console.log(B_2)


const a_3 = [1,2,3,4,5]
const b_3 = [3,4,5,6]

let B_3 = new Set(b_3)
console.log(
  a.filter(num => !B_3.has(num))
)
const map  = new Map()

map.set ('1','str')
map.set(1,'tayfun')
map.set(true,'bool1')
map.set(false,'bool2')

console.log(map)

const obj = {}

obj ['name'] = 'tayfun'
obj[1] = 'ahmet'
obj [true] = 'hello'

console.log(obj)