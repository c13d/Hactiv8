import Geometry from "./helpers/geometry"
import { Person, Gender, Zodiac } from "./models/person"

// npx ts-node [filename].ts
function main(args?: any[]) {
    console.log("hello world")
    
    const person: Person = new Person({
        name: "Davin",
        age: 22,
        weight: 50,
        gender: Gender.Male,
        height: 170,
        zodiac: Zodiac.Leo,
        isMarriage: false,
        isDating: false,
    })
    person.helloWorld()
    console.log( person.calculateBMI())

    console.log(person)

    console.log(Geometry.calculateArea(30))
}

main()

type School = {

}

interface Human {
    name: string
}

class Car {
    private brand: string
    private name: string

    constructor(brand: string, name: string) {
        this.brand = brand
        this.name = name
    }

    
    public get getBrand() : string {
        return this.brand
    }

    
    public get getName() : string {
        return this.name
    }
    
    
}

const car: Car = new Car("Wuling", "Air Ev")
console.log(car.getName);
console.log(car.getBrand);

void function hello() {

}

enum SchoolType {
    negeri = "negeri",
    swasta = "swasta"
}

function isValidSchoolType(type: string): Boolean {
    return Object.values(SchoolType).includes(type as SchoolType)
}

function validateSchool(type: string): SchoolType {
    if(!isValidSchoolType(type)) {
        throw new Error(
            `Invalid school type: ${type}. Allowed school type are ${Object.values(SchoolType).join(",")}`
        )
    }
    return type as SchoolType
}

// union type
let item: number | string = "105"
console.log(item);
item = 105
console.log(item);


let person: Object = { name: "John", age: 20}
let person2: Record<string, any> = {
    name: "John",
    age: 30
}

console.log(person);
console.log(person2);

let person3: {name: string, age: number} = {
    name: "John",
    age: 30
}
console.log(person3);

let tuples: [string, number] = ["john", 30]
console.log(tuples);

function hello(name: string): string {
    return `hello: ${name}`
}

console.log(hello("Davin"));


type A = { name: string}
type B = { age: number }

// Intersection type
type AandB = A & B

const abc: AandB = {
    name: "Hello AKu AB",
    age: 10
}

console.log(abc);
