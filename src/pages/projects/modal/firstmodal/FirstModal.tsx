

import React from 'react'
import * as S from './style'
import { Props } from '../props/Index'



const FirstModal = ({ modal, setModal }: Props) => {

  if(modal){

    return (
      <S.Container>
        <S.Section>

      first modal
      <button onClick={()=>setModal(!modal)}>close</button>
        </S.Section>
    </S.Container>
  )
}
}

export default FirstModal
