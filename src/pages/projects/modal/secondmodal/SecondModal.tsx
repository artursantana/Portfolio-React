

import React from 'react'
import * as S from '../../../../pagesStyles/projects/modal/style'
import { Props } from '../props/Index'
import ModalArchive from './insideModal/Index'



const SecondModal = ({ modal, setModal }: Props) => {

  if(modal){

    return (
      <S.Container>
        <S.Section>
        <S.ButtonModalClose onClick={()=>setModal(!modal)}>Close</S.ButtonModalClose>
      <ModalArchive />
        </S.Section>
    </S.Container>
  )
}
}

export default SecondModal
