import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Layout} from 'antd'
import LoginPage from './pages/LoginPage/LoginPage'
import GamePage from './pages/GamePage/GamePage'
import StatisticsPage from './pages/StatisticsPage/StatisticsPage'
import RepositoryPage from './pages/RepositoryPage/RepositoryPage'
import ConfigurationPage from './pages/ConfigurationPage/ConfigurationPage'

const {Header,Sider, Content} = Layout 

function App() {

  return (
   <Layout>
      <BrowserRouter >
      <Sider>
      <Navbar />
      </Sider>
      <Content>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/artri/game' element={<GamePage />} />
      <Route path='/artri/repository' element={<RepositoryPage />} />
      <Route path='/artri/statistics' element={<StatisticsPage />} />
      <Route path='/artri/configuration' element={<ConfigurationPage />} />
      <Route path='/artri/login' element={<LoginPage />} />

      </Routes>
      </Content>
      </BrowserRouter>


</Layout>
/* <LoginPage /> */



  )
}

export default App
