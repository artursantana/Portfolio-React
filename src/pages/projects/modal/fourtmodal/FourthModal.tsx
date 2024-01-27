

import React from 'react'
import * as S from './style'
import { Props } from '../props/Index'
import ModalArchive from './insideModal/Index'



const FourthModal = ({ modal, setModal }: Props) => {

  if(modal){

    return (
      <S.Container>
        <S.Section>
      <button onClick={()=>setModal(!modal)}>close</button>
      <ModalArchive />
        </S.Section>
    </S.Container>
  )
}
}

export default FourthModal
