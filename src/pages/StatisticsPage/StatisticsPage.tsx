import React from 'react'
import { useEffect, useState } from 'react'
import { AllUsers } from '../../service/Service'

export default function StatisticsPage() {
    const [member, setMembers] = useState([])
   useEffect(()=>{
    AllUsers(setMembers)
   },[])
  return (
    <div>
    <div>Usuarios</div>
    {member!=null ? (member.map(member =>(
      <div>
      <div>Nombre: {member.name}</div>
      <div>Apellido: {member.lastname}</div>
      <div>Edad: {member.age} </div>
      <div>Nickname: {member.nickname}</div>
      </div>
    ))):('no existe datos')}
    
    </div>
  )
}
