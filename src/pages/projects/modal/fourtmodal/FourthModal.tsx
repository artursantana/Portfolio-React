

import React from 'react'
import * as S from '../firstmodal/style'
import { Props } from '../props/Index'

const FourthModal = ({ modal, setModal }: Props) => {

  if(modal){

    return (
      <S.Container>
        <S.Section>

      FourthModal
      <button onClick={()=>setModal(!modal)}>close</button>
        </S.Section>
    </S.Container>
  )
}
}

export default FourthModal
