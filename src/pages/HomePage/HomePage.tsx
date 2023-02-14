import React from 'react'
import Picture from '../../components/Card/Picture'
import './HomePage.css'
import { Image } from 'antd'
import ArtCarousel from '../../components/Carousel/ArtCarousel'
export default function HomePage() {
  return (
    <div className='content-home'>
     <div className='image-home'>
      <Image 
      width={350}
      src="/src/assets/Logo-artri.png"/>
     </div>
     <div className='carousel-home'>
      <ArtCarousel firstImage='/src/assets/Infimage1.jpg' secondImage='src/assets/Infimage2.jpg'/>

     </div>

    </div>


  )
}
