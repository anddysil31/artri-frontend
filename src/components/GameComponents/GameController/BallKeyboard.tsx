import * as _ from 'lodash-es'
import { BallKey } from './BallKey'

import './styles/BallKeyboard.css'
import React from 'react'
import { BALL_TO_NOTE, NOTES, VALID_NOTES } from './notes/constantNotes'

type State ={
  pressedBall:string[]
}
type Props={

}
class BallKeyboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pressedBall: [],
    };
  }

  // playNote = (note:any) =>{
  //   if(!_.isEmpty(note)){
  //     const noteAudio = new Audio(document.getElementById(note).src);
  //     noteAudio.play()
  //   }
  // }

  handleKeyDown = (event:KeyboardEvent) =>{
    if(event.repeat){
      return;
    }
    const note = event.key;
      const updatedPressedBalls = [...this.state.pressedBall];
      if (!updatedPressedBalls.includes(note) && VALID_NOTES.includes(note)) {
        updatedPressedBalls.push(note);
      }
      this.setState({
        pressedBall: updatedPressedBalls,
      });
      // this.playNote(BALL_TO_NOTE[key]);
  }

  handleKeyUp = (event:KeyboardEvent) => {
    const index = this.state.pressedBall.indexOf(event.key);
    if (index > -1) {
      this.setState(state => ({
        pressedBall: state.pressedBall.splice(index, 1)
      }));
    }
  }
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  
  render(){
  const keys = _.map(NOTES,(note, index)=>{
    return(
      <BallKey
      key={index}
      note={note} 
      pressedBall={this.state.pressedBall}
      />
    )
  })

  // const audioFiles = _.map(NOTES, (note, index) =>{
  //   return(
  //     <audio
  //       id={note}
  //       key={index}
  //       src={`../../notes/${note}.mp3`}
  //       />
  //   );
  // });
 
  return (
  <div>
   <div className='ballKeyboard'>
      {keys}
   </div>
    {/* <div>
      {audioFiles}
    </div> */}
   </div>
  )}
}

export {BallKeyboard}