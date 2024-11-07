"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Zodiac = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (exports.Gender = Gender = {}));
var Zodiac;
(function (Zodiac) {
    Zodiac["Aries"] = "aries";
    Zodiac["Taurus"] = "taurus";
    Zodiac["Gemini"] = "gemini";
    Zodiac["Cancer"] = "cancer";
    Zodiac["Leo"] = "leo";
    Zodiac["Virgo"] = "virgo";
    Zodiac["Libra"] = "libra";
    Zodiac["Scorpio"] = "scorpio";
    Zodiac["Sagittarius"] = "sagittarius";
    Zodiac["Capricorn"] = "capricorn";
    Zodiac["Aquarius"] = "aquarius";
    Zodiac["Pisces"] = "pisces";
})(Zodiac || (exports.Zodiac = Zodiac = {}));
class Person {
    constructor(personDetails) {
        this.name = personDetails.name;
        this.age = personDetails.age;
        this.weight = personDetails.weight;
        this.gender = personDetails.gender;
        this.height = personDetails.height;
        this.zodiac = personDetails.zodiac;
        this.isMarriage = personDetails.isMarriage;
        this.isDating = personDetails.isDating;
    }
    calculateBMI() {
        return (this.weight / (this.height * this.height) * 10000);
    }
    helloWorld() {
        return "Hello World";
    }
}
exports.Person = Person;
