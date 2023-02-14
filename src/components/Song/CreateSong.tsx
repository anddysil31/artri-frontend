import React from 'react'
import { useState } from 'react'
import SongService from '../../service/Song/SongService/SongService';

export default function CreateSong() {
    const createSong = async(e:any) =>{
        e.preventDefault();
        try{
          SongService.createSong({
            name: e.target.name.value,
            genre: e.target.genre.value,
            memberId: e.target.memberId.value
          })

        }catch(err){
          console.log(err)
        }
    }
    return (
    <form>
     
    </form>
  )
}
