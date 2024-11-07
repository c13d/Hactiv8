"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_1 = __importDefault(require("./helpers/geometry"));
const person_1 = require("./models/person");
// npx ts-node [filename].ts
function main(args) {
    console.log("hello world");
    const person = new person_1.Person({
        name: "Davin",
        age: 22,
        weight: 50,
        gender: person_1.Gender.Male,
        height: 170,
        zodiac: person_1.Zodiac.Leo,
        isMarriage: false,
        isDating: false,
    });
    person.helloWorld();
    console.log(person.calculateBMI());
    console.log(person);
    console.log(geometry_1.default.calculateArea(30));
}
main();
class Car {
    constructor(brand, name) {
        this.brand = brand;
        this.name = name;
    }
    get getBrand() {
        return this.brand;
    }
    get getName() {
        return this.name;
    }
}
const car = new Car("Wuling", "Air Ev");
console.log(car.getName);
console.log(car.getBrand);
void function hello() {
};
var SchoolType;
(function (SchoolType) {
    SchoolType["negeri"] = "negeri";
    SchoolType["swasta"] = "swasta";
})(SchoolType || (SchoolType = {}));
function isValidSchoolType(type) {
    return Object.values(SchoolType).includes(type);
}
function validateSchool(type) {
    if (!isValidSchoolType(type)) {
        throw new Error(`Invalid school type: ${type}. Allowed school type are ${Object.values(SchoolType).join(",")}`);
    }
    return type;
}
// union type
let item = "105";
console.log(item);
item = 105;
console.log(item);
let person = { name: "John", age: 20 };
let person2 = {
    name: "John",
    age: 30
};
console.log(person);
console.log(person2);
let person3 = {
    name: "John",
    age: 30
};
console.log(person3);
let tuples = ["john", 30];
console.log(tuples);
function hello(name) {
    return `hello: ${name}`;
}
console.log(hello("Davin"));
const abc = {
    name: "Hello AKu AB",
    age: 10
};
console.log(abc);
