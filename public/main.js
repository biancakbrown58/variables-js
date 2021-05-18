function main() {
  const numberOfCupsOfCoffee = 1
  const fullName = 'Bianca Brown'
  console.log(numberOfCupsOfCoffee + fullName)

  const aboutMed = {
    fullName: 'Bianca Brown',
    luckyNumber: 9,
    favoriteMovies: ['Lost Boys', 'Detroit Rock City', 'Home Alone'],
  }

  let userName = window.prompt('What is your name?')
  console.log(`Hello ${userName}!`)

  let firstOperand = parseFloat(window.prompt('Put in a number'))
  let secondOperand = parseFloat(window.prompt('Put in a second number'))

  let sum = firstOperand + secondOperand
  console.log(`If you add ${firstOperand} to ${secondOperand} you get ${sum}`)

  let difference = secondOperand - firstOperand
  console.log(
    `If you subtract ${secondOperand} from ${firstOperand} you get ${difference}`
  )

  let quotient = firstOperand * secondOperand
  console.log(
    `If you multiply ${firstOperand} by ${secondOperand} you get ${quotient}`
  )

  let remainder = firstOperand % secondOperand
  console.log(
    `If you divide ${firstOperand} by ${secondOperand} the remainder ${remainder}`
  )

  let numbers = [
    30534,
    28109,
    33821,
    25668,
    49138,
    38878,
    16977,
    26744,
    33401,
    32902,
    39700,
    35654,
    29620,
    13895,
    29530,
    12238,
    20583,
    12472,
    45616,
    10548,
    41236,
    40293,
    37744,
    35366,
    25281,
    11815,
    14513,
    30562,
    26062,
    27849,
    36387,
    17815,
    21018,
    44525,
    43949,
    49438,
    32956,
    37019,
    22272,
    17463,
    26265,
    23452,
    29066,
    26444,
    41917,
    18263,
    21063,
    25444,
    18492,
    39170,
    29951,
    14676,
    34159,
    15859,
    29081,
    32688,
    31080,
    11725,
    11673,
    26669,
    34270,
    42776,
    38667,
    13314,
    40081,
    32454,
    36133,
    33471,
    38416,
    29535,
    27683,
    29527,
    49671,
    32728,
    25491,
    39863,
    33880,
    22144,
    38614,
    31533,
    33899,
    33901,
    16310,
    44632,
    39638,
    49712,
    20111,
    12062,
    12966,
    47514,
    14517,
    40169,
    10195,
    33411,
    32297,
    15015,
    46719,
    20232,
    18109,
    13419,
  ]
  let smallest = numbers[0]
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i]
    }
  }
  console.log(`The smallest number is ${smallest}`)

  let largest = numbers[0]
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] < smallest) {
      largest = largest[i]
    }
  }
  console.log(`The largest number is ${largest}`)

  let total = numbers => numbers.reduce((a, b) => a + b, 0)
  let arraySum = total(numbers)
  console.log(`The sum of all the numbers is ${arraySum}`)

  const sumOdds = numbers => {
    let sumOdd = 0
    for (let o = 0; o < numbers.length; o++) {
      if (numbers[o] % 2 !== 0) {
        sumOdd = sumOdd + numbers[o]
      }
    }

    return sumOdd
  }
  console.log(`The sum of all ODD numbers is ${sumOdds(numbers)}`)

  let totalAvg = 0
  for (let i = 0; i < numbers.length; i++) {
    totalAvg += numbers[i]
  }
  let average = totalAvg / numbers.length
  console.log(`The average of all the numbers is ${average}`)

  let stats = {
    smallest: smallest,
    largest: largest,
    sum: sum,
    average: average,
  }
}

document.addEventListener('DOMContentLoaded', main)
