class Person {
    constructor ( firstName, lastName, age, country = 'Turkiye', city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.skills = []
    }
    getFullName() {
        return this.firstName + ''
        + this.lastName
    }
    get getSkills() {
        return this.skills
    }
    appendSkill(skill){
        this.skills.push(skill)
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo (){
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 ? `Yeteneklerim ise sunlar: ${this.skills.join(' ,')}` : ''
        return `Benim adim ${fullName} ve ${this.age} yasindayim. ${this.country} ulkede yasiyorum.${skills}`
    }
    
    teach() {
        return 'matematik desri ogretiliyor...'
    }

    get getGender() {
        return this.gender == 1 ? 'Erkek' : 'Kadin'
    }
}

class Teacher extends Person{
    constructor (firstName, lastName, age, country, city, gender) {
        super(firstName,lastName,age,country,city)
        this.gender = gender
    }
}



class Student extends Person {
    learn() { 
        return 'ders dinleniyor'
    }

    getFullName() {
        return super.getFullName() + '(' + this.getGender + ')'
    }
}

const Person1 = new Person ('Abdurrahman','sese',19 ,'turkiye ','konya',1)
const Teacher1= new Teacher('Aysenur','sese', 22 ,undefined,'izmir',2)
const Student1 = new Student ('Ertan','sese',49 ,'yozgat','bogazliyan',1)

Person1.setSkill = 'JavaScript'
Person1.setSkill = 'Python'
Person1.appendSkill('html')

console.log(
    Person1.getSkills,
    Person1.getPersonInfo( )
)

console.log(
    Teacher1.getGender,
    Student1.learn()
)