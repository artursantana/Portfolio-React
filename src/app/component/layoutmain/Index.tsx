

import * as S from './style'
import React, { ReactNode, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Header from '../header/Index'
import Link from 'next/link';

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
       

        <div className="Maininformation">
          <div className='number'>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} />
            </p>
            <p>+351 <span>966617578</span></p>
          </div>
          <div className='email'>
          <p><FontAwesomeIcon icon={faEnvelope} /></p>
            <p>artursantana843@gmail.com</p>
            </div>
          <div className='localize'>
            <p><FontAwesomeIcon icon={faLocationDot} /></p>
            <p>Porto / Portugal</p>
          </div>
          <div className='socialMedia'>
        <Link href='https://github.com/artursantana' target='blank' >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href='https://www.linkedin.com/in/artur-santana-8a9902238' target='blank'>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
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
