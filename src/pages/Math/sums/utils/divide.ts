import { MathSums } from '../../types/math.interface'
import { generateExample, generateNumsArray } from './common'

export const createDivideExamples = (depth = 2, maxNumber = 99): MathSums => {
  const arr = generateNumsArray(depth, maxNumber)

  const answer = eval(generateExample(arr, depth, '*'))
  let example = `${answer}:`
  for (let i = 1; i < arr.length; i++) {
    example += i !== arr.length - 1 ? `${arr[i]}:` : arr[i]
  }
  return {
    example,
    answer: arr[0],
  }
}
