import React from 'react'
import NotesDown from '../../components/GameComponents/Board/NotesDown'
import { BallKeyboard } from '../../components/GameComponents/GameController/BallKeyboard'

export default function GamePage() {
  return (
    <div>
        <NotesDown/>
        <BallKeyboard />
    </div>
  )
}
