import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BookRoutes, RouteNames } from './routes'

import Home from './pages/Home/Home'
import Math from './pages/Math/Math'
import Ukrainian from './pages/Ukrainian/Ukrainian'
import Russian from './pages/Russian/Russian'
import Art from './pages/Art/Art'
import MathBooks from './pages/Math/books/Books'
import MathSums from './pages/Math/sums/Sums'
import Schoolbooks from './pages/Schoolbooks/Schoolbooks'
import SecondForm from './pages/Schoolbooks/2Form/SecondForm'
import FourthForm from './pages/Schoolbooks/4Form/FourthForm'

const AppRouter: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Home />} />

      <Route path={RouteNames.MATH} element={<Math />}>
        <Route path={'books'} element={<MathBooks />} />
        <Route path={'sums'} element={<MathSums />} />
      </Route>

      <Route path={RouteNames.UKRAINIAN} element={<Ukrainian />}></Route>

      <Route path={RouteNames.RUSSIAN} element={<Russian />}></Route>

      <Route path={RouteNames.ART} element={<Art />}></Route>

      <Route path={RouteNames.SCHOOL_BOOKS} element={<Schoolbooks />}>
        <Route path={'2-form'} element={<SecondForm />} />
        <Route path={'4-form'} element={<FourthForm />} />
      </Route>
      <Route path='*' element={<Navigate to={RouteNames.HOME} replace />} />
    </Routes>
  )
}

export default AppRouter
