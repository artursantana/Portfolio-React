



import React from 'react'
import * as S from '../../../../../pagesStyles/projects/modal/second/style'
import Image from 'next/image'


const Index = () => {
  return (
    <S.Container>
      <Image src='/teste.png' alt='picture' width={200} height={200}/>
      <S.Section>
        <button>Deploy</button>
        <button>Github</button>
      </S.Section>
    </S.Container>
  )
}

export default Index
