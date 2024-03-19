



import React from 'react'
import * as S from '../../../../../pagesStyles/projects/modal/first/style'
import Image from 'next/image'
import Link from 'next/link'


const Index = () => {
  return (
    <S.Container>
      <S.ImageContainer><Image src='/ecommerce.png' alt='picture' width={400} height={300}/></S.ImageContainer>
        <div className='techs'>
          <Image src='/next.png' alt='picture' width={100} height={50}/>
          <Image src='/images/typescript.svg' alt='picture' width={50} height={50}/>
          <Image src='/emotion (1).png' alt='picture' width={50} height={50}/>
          </div>
          <S.Section>
        <Link href='https://e-commerce-two-green-74.vercel.app/shop/Shop' target='blank'><button>Deploy</button></Link>
        <Link href='https://github.com/artursantana/E-commerce' target='blank'><button>Github</button></Link>
        <Link href='#' target='blank'><button>Video</button></Link>
      </S.Section>
    </S.Container>
  )
}

export default Index
