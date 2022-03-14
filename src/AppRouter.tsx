import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BookRoutes, RouteNames } from './routes'

import Home from './pages/Home/Index'
import Math from './pages/Math/Index'
import Ukrainian from './pages/Ukrainian/Index'
import Russian from './pages/Russian/Index'
import Art from './pages/Art/Index'
import MathBooks from './pages/Math/books/Books'
import Sums from './pages/Math/sums/Sums'

const AppRouter: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Home />} />

      <Route path={RouteNames.MATH} element={<Math />}>
        <Route path={'books'} element={<MathBooks />} />
        <Route path={'sums'} element={<Sums />} />
      </Route>

      <Route path={RouteNames.UKRAINIAN} element={<Ukrainian />}></Route>

      <Route path={RouteNames.RUSSIAN} element={<Russian />}></Route>

      <Route path={RouteNames.ART} element={<Art />}></Route>
      <Route path='*' element={<h1>Not found</h1>} />
    </Routes>
  )
}

export default AppRouter
