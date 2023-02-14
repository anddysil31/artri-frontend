import React from 'react';
import { Card } from 'antd';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
  backgroundImage:'src/assets/Logo-artri.png'
};

const imgStyle :React.CSSProperties ={
  maxHeight:'50%',
  maxWidth:'50%'
}
interface Props{
  image:string
}

export default function Picture({image}:Props){
  return(
    <Card title="Bienvenido a Artri"
    cover={<img src={image} style={imgStyle}/>}>
    <Card.Grid style={gridStyle} >No dejes que nada te arrebate la sonrisa</Card.Grid>
    <Card.Grid style={gridStyle}>Artri - Destinado al cuidado de tus manos</Card.Grid>  
  </Card>
  );
};

