
// Compare Number
function compareNumbers(firstNumber,  secondNumber) {
    if(firstNumber === secondNumber) { return -1 }
    return firstNumber < secondNumber ? true : false
}
console.log(compareNumbers(5,8))
console.log(compareNumbers(5,3))
console.log(compareNumbers(4,4))
console.log(compareNumbers(3,3))
console.log(compareNumbers(17,2))

// Reverse String
function reverseString(text) {
    let result = ""
    for(let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}
console.log(reverseString("Hello World and Coders"))

function urutHuruf(text) {
    return text.split("").sort().join("")
}
console.log(urutHuruf("abcnasoinawpz"))

function isArithmeticProgression(numbers) {
    let diff = numbers[0] - numbers[1]
    for(let i = 1; i < numbers.length - 1; i++) {
        let d2 = numbers[i] - numbers[i+1]
        if(d2 !== diff) {
            return false
        }
    }
    return true
}
console.log(isArithmeticProgression([1,2,3,4,5,6]))
console.log(isArithmeticProgression([1,2,3,4,5,8]))
console.log(isArithmeticProgression([2,4,6,8]))

function threeStepAB(text) {
    for(let i=0; i<text.length-1; i++) {
        if(
            text[i] === 'a' && text[i+4] === 'b' ||
            text[i] === 'b' && text[i+4] === 'a'
        ) {
            return true
        }
    }
    return false
}
console.log("Three Step AB");
console.log(threeStepAB("lane borrowed"));
console.log(threeStepAB("i am sick"));
console.log(threeStepAB("you are boring"));
console.log(threeStepAB("barbarian"));
console.log(threeStepAB("bacon and meat"));

function gcd(a, b) {
    let smaller = Math.min(a, b);
    let hcf = 1;
 
    for (let i = 1; i <= smaller; i++) {
        if (a % i === 0 && b % i === 0) {
            hcf = i;
        }
    }
 
    return hcf;
}
console.log(gcd(12,16))
console.log(gcd(50,40))
console.log(gcd(22,99))
console.log(gcd(24,36))
console.log(gcd(17,23))

function isPrime(n) {
    if (n <= 1)
      return false;
    if (n == 2 || n == 3)
      return true;
    if (n % 2 == 0 || n % 3 == 0)
      return false;
    for (var i = 5; i <= Math.sqrt(n); i = i + 6)
      if (n % i == 0 || n % (i + 2) == 0)
        return false;
  
    return true;
}
console.log("Is Prime")
console.log(isPrime(3))
console.log(isPrime(7))
console.log(isPrime(6))
console.log(isPrime(23))
console.log(isPrime(33))
console.log(isPrime(15))
console.log(isPrime(59))

function listPrima(angkaPertama, angkaKedua) {
    let prima = []
    for(let i = angkaPertama; i <= angkaKedua; i++) {
        if(isPrime(i)) {
            prima.push(i)
        }
    }
    return prima
}

console.log(listPrima(1,5))
console.log(listPrima(5,10))
console.log(listPrima(10,20))

function selectionSort(numbers) {
    for(let i=0;i<numbers.length;i++) {
        let min = numbers[i]
        for(let j=i+1; j<numbers.length; j++) {
            if(min > numbers[j]) {
                min = numbers[j]
                numbers[j] = numbers[i]
                numbers[i] = min
            }
        }
    }
    return numbers
}

const numbers = [4,2,9,3,8,19,1, 39, 99]
console.table(selectionSort(numbers))

function linearSearch(arr, toFind) {
    for(let i = 0; i < arr.length; i++) {
        [1-9]       
    }

}