// * Soal No. 1
function reverse(text: string): string {
  const arr: string[] = text.split('')
  const numberIndex: number = arr.findIndex((x) => !isNaN(Number(x)))
  const reversedText: string[] = arr.slice(0, numberIndex).reverse().concat(arr.slice(numberIndex))

  return reversedText.join('')
}

console.log(reverse('NEGIE1'))

// * Soal No. 2
function longest(text: string): string {
  const arr: string[] = text.split(' ')
  let longestWord: string = ''
  arr.forEach((word) => {
    longestWord = word.length > longestWord.length ? word : longestWord
  })

  return longestWord
}

console.log(longest('Saya sangat senang mengerjakan soal algoritma'))

// * Soal No. 3
function count(input: string[], query: string[]): number[] {
  return query.map((x) => input.filter((y) => x === y).length)
}

const input = ['xc', 'dz', 'bbb', 'dz']
const query = ['bbb', 'ac', 'dz']
console.log(count(input, query))

// * Soal No. 4
function sum(matrix: number[][]): number {
  let sum: number = 0
  for (let i: number = 0; i < matrix.length; i++) {
    sum += matrix[i][i] - matrix[i][matrix.length - i - 1]
  }

  return sum
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(sum(matrix))
