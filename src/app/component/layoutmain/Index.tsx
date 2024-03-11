

import * as S from './style'
import React, { ReactNode, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { saveAs } from 'file-saver';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const generatePDFBlob = async () => {
  try {
    // Use o método fetch para buscar o PDF localmente
    const response = await fetch('/cv.pdf');

    // Verifique se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro ao buscar o arquivo PDF.');
    }

    // Converte a resposta em um Blob
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error('Erro ao gerar o Blob do PDF:', error);
    throw error;
  }
};

import Header from '../header/Index'
import Link from 'next/link';


const artur = '< Artur />'

const Index = ({children}: {children: ReactNode}) => {

  const [widthPage, setWidthPage] = useState<number>()

  
  useEffect(() => {

    setWidthPage(window.innerWidth);

    const handleResize = () => {
      setWidthPage(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    

  }, []);


  const handleDownloadCV = async () => {
    try {
      const pdfBlob = await generatePDFBlob();
      saveAs(pdfBlob, 'document');
    } catch (error) {
      console.error('Erro ao gerar ou fazer o download do PDF:', error);
    }
  };


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
        
      <button onClick={handleDownloadCV}><FontAwesomeIcon icon={faFile} /> Download CV</button>
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
