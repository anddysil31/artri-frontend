export default function PlayerStats(ctx:any, player:any,canvas:any){
    //Player 
    ctx.font = "20px Arial"
    ctx.fillStyle = "black"
    ctx.fillText(`Name ${player.name}`, 20, 30);

    //Score
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${player.score}`, 175, 30);

}