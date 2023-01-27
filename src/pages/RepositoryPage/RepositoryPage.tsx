import { Layout } from 'antd'
import React from 'react'
import Slides from '../../components/Carousel/Slides'

const {Content} = Layout
export default function RepositoryPage() {
  return (
    <div>
      <Content>
      <Slides />
      </Content>
    </div>
  )
}
