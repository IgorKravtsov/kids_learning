export const generateNumsArray = (deps = 2, maxNumber = 99): number[] => {
  const res: number[] = []

  for (let i = 0; i < deps; i++) {
    res.push(Math.floor(Math.random() * maxNumber + 1))
  }

  return res
}

export const createPlusExamples = (deps = 2, maxNumber = 99): string => {
  const arr = generateNumsArray(deps, maxNumber)
  return `${arr[0]}+${arr[1]}`
}
