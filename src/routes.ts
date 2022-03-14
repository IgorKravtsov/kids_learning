export enum RouteNames {
  HOME = '/',
  MATH = '/math',
  UKRAINIAN = '/ukrainian',
  RUSSIAN = '/russian',
  ART = '/art',
}

export const BookRoutes = {
  MATH: RouteNames.MATH + '/books',
  UKRAINIAN: RouteNames.UKRAINIAN + '/books',
  RUSSIAN: RouteNames.RUSSIAN + '/books',
  ART: RouteNames.ART + '/books',
}

export const MathRoutes = {
  SUMS: RouteNames.MATH + '/sums',
}
