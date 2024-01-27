

import React, { ReactNode } from 'react'
import * as S from '../firstmodal/style'
import { Props } from '../props/Index'


const SecondModal = ({ modal, setModal }: Props) => {

  if(modal){

    return (
      <S.Container>
        <S.Section>

      SecondModal
      <button onClick={()=>setModal(!modal)}>close</button>
        </S.Section>
    </S.Container>
  )
}
}

export default SecondModal
