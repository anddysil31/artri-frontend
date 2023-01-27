import React from 'react';
import { Card } from 'antd';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
  backgroundImage:'src/assets/Log-artri.png'
};

interface Props{
  image:string
}

export default function Picture({image}:Props){
  return(
    <Card title="Welcome to Artri"
    cover={<img src={image}/>}>
    <Card.Grid style={gridStyle}  >No dejes que nada te arrebate la sonrisa</Card.Grid>
    <Card.Grid style={gridStyle}>Artri - Destinado al cuidado de tus manos</Card.Grid>  
  </Card>
  );
};

