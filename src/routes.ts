export enum RouteNames {
  HOME = '/',
  MATH = '/math',
  UKRAINIAN = '/ukrainian',
  RUSSIAN = '/russian',
  ART = '/art',
  SCHOOL_BOOKS = '/schoolbooks',
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

export const FormRoutes = {
  SECOND: RouteNames.SCHOOL_BOOKS + '/2-form',
  FOURTH: RouteNames.SCHOOL_BOOKS + '/4-form',
}
