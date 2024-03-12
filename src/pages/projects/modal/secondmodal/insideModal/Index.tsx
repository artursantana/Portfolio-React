



import React from 'react'
import * as S from '../../../../../pagesStyles/projects/modal/second/style'
import Image from 'next/image'
import Link from 'next/link';


const Index = () => {
  return (
    <S.Container>
      <S.ImageContainer><Image src='/financeSystem.png' alt='picture' width={400} height={300}/></S.ImageContainer>
        <div className='techs'>
          <Image src='/Vitejs-logo.svg' alt='picture' width={100} height={50}/>
          <Image src='/images/typescript.svg' alt='picture' width={50} height={50}/>
          <Image src='/styled-components.png' alt='picture' width={50} height={50}/>
          </div>
      <S.Section>
        <Link href='https://finance-system-ten.vercel.app/' target='blank'><button>Deploy</button></Link>
        <Link href='https://github.com/artursantana/FinanceSystem' target='blank'><button>Github</button></Link>
        <Link href='#' target='blank'><button>Video</button></Link>
      </S.Section>
    </S.Container>
  )
}

export default Index
