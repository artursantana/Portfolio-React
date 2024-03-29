



import React from 'react'
import * as S from '../../../../../pagesStyles/projects/modal/four/style'
import Image from 'next/image'
import Link from 'next/link'


const Index = () => {
  return (
    <S.Container>
      <S.ImageContainer></S.ImageContainer>
        <S.SectionMain>
          <S.SectionImgTechs>
            <Image src='/next.png' alt='picture' width={100} height={50}/>
            <Image src='/images/typescript.svg' alt='picture' width={50} height={50}/>
            <Image src='/emotion (1).png' alt='picture' width={50} height={50}/>
            </S.SectionImgTechs>
            <S.SectionButton>
          <Link href='#' target='blank'><button>Deploy</button></Link>
          <Link href='#' target='blank'><button>Github</button></Link>
          <Link href='#' target='blank'><button>Video</button></Link>
                </S.SectionButton>
        </S.SectionMain>
    </S.Container>
  )
}

export default Index
