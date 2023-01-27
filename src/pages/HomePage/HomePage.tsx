import { Layout } from 'antd'
import React from 'react'
import Picture from '../../components/Card/Picture'
import Navbar from '../../components/Navbar/Navbar'
import './HomePage.css'
const {Header,Sider, Content} = Layout 

export default function HomePage() {
  return (
    <Layout>
      <Content className='content-home'>
      <Picture image='src/assets/Logo-artri.png'/>
      </Content>
    </Layout>

  )
}
