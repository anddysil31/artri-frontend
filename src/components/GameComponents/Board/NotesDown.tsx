import React, {useRef, useEffect, useState} from 'react'
import { MovNotes } from './MovNotes'
import PlayerStats from '../PlayerStats/PlayerStats';import data from './../../../../data'
import PlayerSaveData from '../PlayerStats/PlayerSaveData';
import { render } from 'nprogress';


let {player} = data
const NotesDown = () =>{
    const [scoreDisplay, setScoreDisplay] = useState(0)
    const canvasRef = useRef<HTMLCanvasElement>(null);
   
    let blue = new MovNotes(150,0, canvasRef)
    let red = new MovNotes(440,0, canvasRef)
    let orange = new MovNotes(720,0, canvasRef)
    let yellow = new MovNotes(1000,0, canvasRef)
    
      
    const handleKeyDown = (event: KeyboardEvent) =>{
        if((event.key ==='a')&&(blue.y>200 - 90)&&(blue.y<200+70)){
            player.score += 10
        } 
        if((event.key ==='s')&&(red.y>200 - 90)&&(red.y<200+70)){
            player.score += 10
        } 
        if((event.key ==='d')&&(orange.y>200 - 90)&&(orange.y<200+70)){
            player.score += 10
        } 
        if((event.key ==='f')&&(yellow.y>200 - 90)&&(yellow.y<200+70)){
            player.score += 10
          
        } 

   
    }

    
   
    
    useEffect(() =>{
      
        
      
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }
        canvas.width = 1120;
        canvas.height = 200
        
        const ctx = canvas?.getContext('2d');
        if(!ctx){
            return;
        }
       
        
       
        let animationFrameId:any;
        
     
        document.addEventListener('keydown', handleKeyDown, true)
        const render = () => {
           
            blue.draw(ctx, "blue",2)
            if(blue.y>canvas.height+120){
                red.draw(ctx, "red",2)
                
            }
            if(red.y>canvas.height+120){
                orange.draw(ctx, "orange", 2)
           }
            if(orange.y>canvas.height+70){
            yellow.draw(ctx, "yellow", 2)
           }       
           if(yellow.y>canvas.height+1000){
            setScoreDisplay(player.score)
           }

           PlayerStats(ctx, player, canvas)
            animationFrameId = window.requestAnimationFrame(render)
          }
         
          
          render()
          return ( ) => {
            window.cancelAnimationFrame(animationFrameId)
            
           
        }
        
        }
       

    )

    return (<div>
        <canvas ref={canvasRef} className = 'gameNotes'  />;
        <PlayerSaveData score={scoreDisplay}/>
        </div>)
        
 }


NotesDown.defaultProps = {
    width: 1000,
    height: 1000,


}

export default NotesDown
