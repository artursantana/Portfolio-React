

import React, { ReactNode } from 'react'
import * as S from '../firstmodal/style'
import { Props } from '../props/Index'


const ThirdModal = ({ modal, setModal }: Props) => {

  if(modal){

    return (
      <S.Container>
        <S.Section>

      ThirdModal
      <button onClick={()=>setModal(!modal)}>close</button>
        </S.Section>
    </S.Container>
  )
}
}

export default ThirdModal
