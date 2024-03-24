



import React from 'react'
import * as S from '../../../../../pagesStyles/projects/modal/second/style'
import Image from 'next/image'
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


const Index = () => {
  return (
    <S.Container>
      <S.ImageContainer><Image src='/financeSystem.png' alt='picture' width={500} height={300}/></S.ImageContainer>
        <S.SectionMain>
          <S.SectionImgTechs>
            <Image src='/Vitejs-logo.svg' alt='picture' width={100} height={50}/>
            <Image src='/images/typescript.svg' alt='picture' width={50} height={50}/>
            <Image src='/styled-components.png' alt='picture' width={50} height={50}/>
            </S.SectionImgTechs>
                <S.SectionButton>
          <Link href='https://finance-system-ten.vercel.app/' target='blank'><button><FontAwesomeIcon icon={faCircleNodes} />Deploy</button></Link>
          <Link href='https://github.com/artursantana/FinanceSystem' target='blank'><button><FontAwesomeIcon icon={faGithub} /> Code</button></Link>
          <Link href='#' target='blank'><button> <FontAwesomeIcon icon={faFilm} /> Video</button></Link>
                </S.SectionButton>
        </S.SectionMain>
    </S.Container>
  )
}

export default Index
