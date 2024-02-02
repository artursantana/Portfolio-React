



import React from 'react'
import * as S from './style'
import Image from 'next/image'


const Index = () => {
  return (
    <S.Container>
      <S.ImageContainer></S.ImageContainer>
        <div className='techs'><Image src='/images/about.jpg' alt='picture' width={50} height={50}/></div>
      <S.Section>
        <button>Deploy</button>
        <button>Github</button>
      </S.Section>
    </S.Container>
  )
}

export default Index
