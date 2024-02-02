

import * as S from './style'
import React, { ReactNode, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Header from '../header/Index'

const artur = '< Artur />'

const Index = ({children}: {children: ReactNode}) => {

  const [widthPage, setWidthPage] = useState<number>()

  console.log(widthPage)
  
  useEffect(() => {

    setWidthPage(window.innerWidth);

    const handleResize = () => {
      setWidthPage(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    

  }, []);


  return (
    <S.Container responsivePage={widthPage}>
      <S.Section_Left responsivePage={widthPage}>
        <div className='resume'>
          <h1>{artur}</h1>
          
        </div>
        <div className='socialMedia'>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        </div>

        <div className="Maininformation">
          <div className='information'>
            <div>Porto / <span>Portugal</span></div>
          </div>
          <p>artursantana843<span>@gmail.com</span></p>
          <div className='information2'>
            <FontAwesomeIcon icon={faWhatsapp} />
            <p>+351 <span>966617578</span></p>
          </div>
        </div>

        <div className='buttons'>
        <button><span>Hire Me</span></button>
        <button><FontAwesomeIcon icon={faFile} /> Download CV</button>
        </div>

      </S.Section_Left>

      <S.Section_Right responsivePage={widthPage}>
        <Header />
        {children}
        </S.Section_Right>
    </S.Container>
  )
}

export default Index
