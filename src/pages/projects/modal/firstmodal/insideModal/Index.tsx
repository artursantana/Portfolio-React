



import React from 'react'
import * as S from '../../../../../pagesStyles/projects/modal/first/style'
import Image from 'next/image'
import Link from 'next/link'


const Index = () => {
  return (
    <S.Container>
      <S.ImageContainer><Image src='/next.png' alt='picture' width={100} height={50}/></S.ImageContainer>
        <div className='techs'>
          <Image src='/next.png' alt='picture' width={100} height={50}/>
          <Image src='/images/typescript.svg' alt='picture' width={50} height={50}/>
          <Image src='/emotion (1).png' alt='picture' width={50} height={50}/>
          </div>
          <S.Section>
        <Link href='#' target='blank'><button>Deploy</button></Link>
        <Link href='#' target='blank'><button>Github</button></Link>
        <Link href='#' target='blank'><button>Video</button></Link>
      </S.Section>
    </S.Container>
  )
}

export default Index
