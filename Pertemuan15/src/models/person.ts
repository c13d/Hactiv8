export enum Gender {
    Male = "male",
    Female = "female"
}

export enum Zodiac {
    Aries = "aries",
    Taurus = "taurus",
    Gemini = "gemini",
    Cancer = "cancer",
    Leo = "leo",
    Virgo = "virgo",
    Libra = "libra",
    Scorpio = "scorpio",
    Sagittarius = "sagittarius",
    Capricorn = "capricorn",
    Aquarius = "aquarius",
    Pisces = "pisces",
}

export class Person {
    name: string
    age: number
    weight: number
    gender: Gender
    height: number
    zodiac: Zodiac
    isMarriage: boolean
    isDating: boolean

    constructor(personDetails: { name: string; age: number; weight: number; gender: Gender; height: number; zodiac: Zodiac; isMarriage: boolean; isDating: boolean }) {
        this.name = personDetails.name;
        this.age = personDetails.age;
        this.weight = personDetails.weight;
        this.gender = personDetails.gender;
        this.height = personDetails.height;
        this.zodiac = personDetails.zodiac;
        this.isMarriage = personDetails.isMarriage;
        this.isDating = personDetails.isDating;
    }

    calculateBMI(): number {
        return (this.weight / (this.height * this.height) * 10_000)
    }

    helloWorld() {
        return "Hello World";
    }
}