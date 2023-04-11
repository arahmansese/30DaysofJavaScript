console.log(
    '%c Dur !' , 'font-size : 50px ;  font-family : Arial ;color : red ' 
)

console.warn('bu bir uyari mesajidir.')
console.error('oynnaaamaaa bozdun iste git duzelt simdi. ')

let names = ['abdurrahman','Aysenur','Haticenur']
let MyName = {
    name : 'Abdurrahman',
    surname : 'SESE'
}
console.table(names)
console.table(MyName)

console.time('calculate 1m array')
console.log(new Array(10).fill('abc').map((value,index)=> index))
console.timeEnd('calculate 1m array')

let a = 5
let b = 6 

console.assert( b>a , 'a b den buyuk degil !')

const names1 = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]
console.group('Names')
console.log(names1)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

const test = () => {
    console.count('test called !')
}
test()
test()
test()


console.clear()