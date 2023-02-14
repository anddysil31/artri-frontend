import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

interface SlidesProps {
    firstImage:string,
    secondImage:string
}

const ArtCarousel: React.FC <SlidesProps> = ({firstImage, secondImage}:SlidesProps) => (
  <Carousel autoplay style={{width:'100%', backgroundColor:'skyblue'}}>
    <div>
      <img src={firstImage} style={{width:'100%'}} />
    </div>
    <div>
      <img src={secondImage} style={{width:'100%'}}/>
    </div>
  
  </Carousel>
);

export default ArtCarousel;