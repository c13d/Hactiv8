let hobbies = ["makan", "tidur", "mandi"]

hobbies.push("berenang")

console.log(hobbies);

const joinHobbies = hobbies.join(",")
console.log(joinHobbies);

const splitHobbies = joinHobbies.split(",")
console.log(splitHobbies)

const numbers = [5,2,3,6,7,1]
console.log("number after sort", numbers.sort());
console.log("number after sort desc", numbers.sort((a,b) => b - a))


let students = [
    {
        id: 2,
        nama: "Davin"
    },
    {
        id: 1,
        nama: "nuki"
    },
    {
        id: 4,
        nama: "firman"
    },
    {
        id: 3,
        nama: "nana"
    },
]
console.log("student list sorted", students.sort((a,b) => a.id - b.id))
const mapStudent = students.map((value) => {
    // spread operator
    return {
        ...value,
        jomblo: true,
    }
})

console.log("map student list", mapStudent)