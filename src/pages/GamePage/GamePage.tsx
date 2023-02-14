import React from 'react'
import NotesDown from '../../components/GameComponents/Board/NotesDown'
import { BallKeyboard } from '../../components/GameComponents/GameController/BallKeyboard'

export const GamePage = ()=> {
  return (
    <div>
        <NotesDown/>
        <BallKeyboard />
    </div>
  )
}
