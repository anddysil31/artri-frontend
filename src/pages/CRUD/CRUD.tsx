import React from 'react'
import { StatisticsCRUD } from '../../service/Address copy/StatisticsCRUD'
import { AddressCRUD } from '../../service/Address/AddressCRUD'
import { MemberCRUD } from '../../service/Member/MemberCRUD'

import { SongCRUD } from '../../service/Song/SongCRUD'

export default function CRUD() {
  return (
    <div>
        <MemberCRUD />
        <SongCRUD />
        <StatisticsCRUD />
        <AddressCRUD />
     
    </div>
  )
}
