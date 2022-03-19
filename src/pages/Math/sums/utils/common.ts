export const generateNumsArray = (depth = 2, maxNumber = 99): number[] => {
  const res: number[] = []

  for (let i = 0; i < depth; i++) {
    res.push(Math.floor(Math.random() * maxNumber + 1))
  }

  return res
}

export const generateExample = (arr: number[], depth: number, type: string): string => {
  let res = ''
  for (let i = 0; i < depth; i++) {
    res += i === depth - 1 ? arr[i] : `${arr[i]}${type}`
  }
  return res
}
