function mapWithForLoop() {
    const harga = [19.99, 4.95, 25, 3.5]
    const hargaSekarang = []
    for(let i=0; i<harga.length; i++) {
        hargaSekarang.push(harga[i] * 1.15)
    }
    
    return hargaSekarang
}

function mapWithES6() {
    const harga = [19.99, 4.95, 25, 3.5]
    return harga.map((harga)=> { return harga * 1.15})
}

function filterOddES6() {
    const number = [1, 60, 112, 123, 100, 99, 73]
    return number.filter((num) => num % 2 === 0)
}

function findStudent(id) {
    const studentList = [
        {
            id: 1,
            name: "John Doe",
            score: 90,
        },
        {
            id: 2,
            name: "Johnny",
            score: 95,
        },
    ]

    return studentList.find((student) => student.id === id)
}

function findStudentIndex(name) {
    const studentList = [
        {
            id: 1,
            name: "John Doe",
            score: 90,
        },
        {
            id: 2,
            name: "Johnny",
            score: 95,
        },
    ]

    return studentList.findIndex((student) => student.name === name)
}

function isAllPass(minGrade) {
    const studentList = [
        {
            id: 1,
            name: "John Doe",
            score: 90,
        },
        {
            id: 2,
            name: "Johnny",
            score: 95,
        },
    ]

    return studentList.every((student) => student.score >= minGrade)
}

function sumWithReduce() {
    const sumbangan = [1000, 2000, 3000];
    return sumbangan.reduce((total, sumbangan) => total + (sumbangan === 2000 ? 0 : sumbangan), 0)
}

function sumScoreWithReduceObject() {
    // salah
    const studentList = [
        {
            id: 1,
            name: "John Doe",
            score: 90,
        },
        {
            id: 2,
            name: "Johnny",
            score: 95,
        },
        {
            id: 3,
            name: "Johnny",
            score: 195,
        },
    ]
    return studentList.reduce((prev, student) => {
        console.log(`debug ${prev.score}, ${student.score}`)
        return {
            id: 3,
            name: "Sum",
            score: prev.score + student.score,
        }
    })
}

function reduceWithoutInitial() {
    const nums = [1,3,5,7,8,9]
    return nums.reduce((prev, curr) => { 
        console.log(`debug ${prev} ${curr}`)
        return prev + curr
    })
}

function mapFlatStudent() {
    const studentList = [
        {
            id: 1,
            name: "John Doe",
            score: 90,
        },
        {
            id: 2,
            name: "Johnny",
            score: 95,
        },
        {
            id: 3,
            name: "Johnny",
            score: 195,
        },
    ]
    return studentList
        .flatMap((student) => student.score)
        .reduce((prev, curr) => prev + curr)
}

function reverseText(text) {
    let result = ""
    for(let i = text.length - 1; i>=0; i--) {
        result += text[i]
    }
    return result
}

function removeSpaceText(text) {
    let result = ""
    for(let i = 0; i < text.length; i++) {
        if(text[i] !== " ") {
            result += text[i]
        }
    }
    return result
}

console.log(mapWithForLoop())
console.log(mapWithES6())
console.log(filterOddES6())
console.log(findStudent(1))
console.log(findStudentIndex('Johnny'))
console.log(isAllPass(50))
console.log(sumWithReduce())
console.log(sumScoreWithReduceObject())
console.log(reduceWithoutInitial())
console.log(mapFlatStudent())

console.log(reverseText("abcdefg"))
console.log(removeSpaceText("abcde fg"))