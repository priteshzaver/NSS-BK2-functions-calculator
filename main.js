const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber

    return sum
}

const subtract = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber

    return difference
}

const divide = (firstNumber, secondNumber) => {
    const quotient = firstNumber / secondNumber

    return quotient
}

const multiply = (firstNumber, secondNumber) => {
    const product = firstNumber * secondNumber

    return product
}

const square = (firstNumber) => {
    const squared = firstNumber * firstNumber

    return squared
}

const addResult = add(1, 2)
const subtractResult = subtract(1, 2)
const divideResult = divide(1, 2)
const multiplyResult = multiply(1, 2)
const squared = square(2)

console.log(addResult)
console.log(subtractResult)
console.log(divideResult)
console.log(multiplyResult)
console.log(squared)

// (0.25x * 4) + (0.75x * 2) = 60
// add + add = 60
// multiply * 4 = add + multiply * 2 = add

