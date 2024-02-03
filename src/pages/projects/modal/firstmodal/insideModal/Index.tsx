



import React from 'react'
import * as S from './style'
import Image from 'next/image'


const Index = () => {
  return (
    <S.Container>
      <S.ImageContainer></S.ImageContainer>
        <div className='techs'>
          <Image src='/next.png' alt='picture' width={100} height={50}/>
          <Image src='/images/typescript.svg' alt='picture' width={50} height={50}/>
          <Image src='/emotion (1).png' alt='picture' width={50} height={50}/>
          </div>
      <S.Section>
        <button>Deploy</button>
        <button>Github</button>
        <button>Video</button>
      </S.Section>
    </S.Container>
  )
}

export default Index
