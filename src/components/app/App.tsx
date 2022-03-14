import React, { useState } from 'react'
import './App.css'
import Header from '../header/Header'
import AppRouter from '../../AppRouter'

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  )
}

export default App
