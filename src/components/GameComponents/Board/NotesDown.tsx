import React, {useRef, useEffect} from 'react'
import { MovNotes } from './MovNotes'
import PlayerStats from '../PlayerStats/PlayerStats';
import data from './../../../../data'






let {player} = data
const NotesDown = () =>{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let blue = new MovNotes(150,0, canvasRef)
    let red = new MovNotes(440,0, canvasRef)
    let orange = new MovNotes(720,0, canvasRef)
    let yellow = new MovNotes(1000,0, canvasRef)

 
 
    useEffect(() =>{
      
        
      
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }
        canvas.width = 1120;
        canvas.height = 320
        

        const ctx = canvas?.getContext('2d');
        if(!ctx){
            return;
        }

        
        let animationFrameId:any;
        const handleKeyDown = (event: KeyboardEvent) =>{
            if((event.key ==='a')&&(blue.y>canvas.height - 90)&&(blue.y<canvas.height+70)){
                player.score += 10
            } 
            if((event.key ==='s')&&(red.y>canvas.height - 90)&&(red.y<canvas.height+70)){
                player.score += 10
            } 
            if((event.key ==='d')&&(orange.y>canvas.height - 90)&&(orange.y<canvas.height+70)){
                player.score += 10
            } 
            if((event.key ==='f')&&(yellow.y>canvas.height - 90)&&(yellow.y<canvas.height+70)){
                player.score += 10
            } 
        }
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
          
           
           
            PlayerStats(ctx, player, canvas)
            
    
    
            
            animationFrameId = window.requestAnimationFrame(render)
          }

          render()
          return ( ) => {
            window.cancelAnimationFrame(animationFrameId)
            
        }

        }
    )

    return <canvas ref={canvasRef} className = 'gameNotes'  />;
 }


NotesDown.defaultProps = {
    width: 1000,
    height: 1000,


}

export default NotesDown
