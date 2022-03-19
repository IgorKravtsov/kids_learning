import { MathSums } from '../../types/math.interface'

export const generateNumsArray = (depth = 2, maxNumber = 99): number[] => {
  const res: number[] = []

  for (let i = 0; i < depth; i++) {
    res.push(Math.floor(Math.random() * maxNumber + 1))
  }

  return res
}

const generateExample = (arr: number[], depth: number, type: string): string => {
  let res = ''
  for (let i = 0; i < depth; i++) {
    res += i === depth - 1 ? arr[i] : `${arr[i]}${type}`
  }
  return res
}

export const createPlusMultipleExamples = (depth = 2, maxNumber = 99, type: string): MathSums => {
  const arr = generateNumsArray(depth, maxNumber)
  const example = generateExample(arr, depth, type)

  return {
    example: example.replaceAll('/', ':'),
    answer: eval(example),
  }
}

export const createMinusExamples = (depth = 2, maxNumber = 99, type: string): MathSums => {
  const arr = generateNumsArray(depth, maxNumber)
  let tmpType = ''
  if (type === '-') {
    tmpType = '+'
  } else if (type === '/') {
    tmpType = '*'
  }

  const answer = eval(generateExample(arr, depth, tmpType))

  return {
    example: `${answer}${type}${arr[0]}`.replaceAll('/', ':'),
    answer: arr[1],
  }
}
