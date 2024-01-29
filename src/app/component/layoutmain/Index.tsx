

import * as S from './style'
import React, { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';


import Header from '../header/Index'



const Index = ({children}: {children: ReactNode}) => {

  const [widthPage, setWidthPage] = useState<number>()

  
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
        <Image src='/image.png' alt='picture' width={100} height={100}/>
        <div className='resume'>
          <p>Front-End</p>
          <div className='downloadresume'>
            <FontAwesomeIcon icon={faFile} />
            <span>Download Resume</span>
            </div>
        </div>
        <div className='socialMedia'>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        </div>

        <div className="Maininformation">
          <div className='information'>
            <FontAwesomeIcon icon={faMapPin} />
            <div>Porto / Portugal</div>
          </div>
          <p>artursantana843@gmail.com</p>
          <p>+351 966617578</p>
        </div>

        <div className='buttons'>
      <button><span>Hire Me</span></button>
      <button>Dark UI</button>
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
