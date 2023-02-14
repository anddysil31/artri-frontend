import React from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import {Layout} from 'antd'
import LoginPage from './pages/LoginPage/LoginPage'
import {GamePage} from './pages/GamePage/GamePage'
import StatisticsPage from './pages/StatisticsPage/StatisticsPage'
import RepositoryPage from './pages/RepositoryPage/RepositoryPage'
import ConfigurationPage from './pages/ConfigurationPage/ConfigurationPage'
import RootLayout from './layouts/RootLayout/RootLayout'
import CRUD from './pages/CRUD/CRUD'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element= {<HomePage />} />
      <Route path='/artri/game' element={<GamePage />} />
      <Route path='/artri/repository' element={<RepositoryPage />} />
      <Route path='/artri/statistics' element={<StatisticsPage />} />
      <Route path='/artri/configuration' element={<ConfigurationPage />} />
      <Route path='/artri/crud' element={<CRUD />} />
      <Route path='/artri/login' element={<LoginPage />} />
    </Route>
  )
)

function App() {

  return (
          <RouterProvider router={router}></RouterProvider>


  )
}

export default App
