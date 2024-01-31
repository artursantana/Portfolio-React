


import React from 'react';
import * as S from './style'
import Image from 'next/image'

type Props = {
  showDiv?: boolean;
};

const Index: React.FC<Props> = ({ showDiv }) => {



  return (
    <div>
      {!showDiv && (
        <S.Container>
            <S.SectionContainer>

            
          <S.UlContainer>
              <h1>Education</h1>
              <li>
                <h3>Front End Developer</h3>
              <p>Tokio School - Portugal</p>
              </li>
              
              <li>
                <h3>JavaScript</h3>
              <p>Udemy - Internet</p>
              </li>
              
              <li>
                <h3>Informática, photoshop,corel draw</h3>
              <p>InfoTech - Brasil</p>
              </li>

              <li>
                <h3>Manuteção de computadores</h3>
              <p>Microlins - Brasil</p>
              </li>
              
          </S.UlContainer>
          <S.AsideContainer>
            <h1>Lenguages</h1>
            <li>Native Portuguese</li>
            <li>Advanced English</li>
            <li>Middle Spanish</li>
            <li>French beginner</li>
          </S.AsideContainer>
          </S.SectionContainer>
          <S.SectionContainerBottom>
            <h1>INTERESTS</h1>
            <li>Back End Development</li>
            <li>Website development</li>
            <li>English and French</li>
          </S.SectionContainerBottom>
        </S.Container>
      )}

      {showDiv && (
        <div>
           <S.SectionSide>
    <div><h1>Skills :</h1></div>
    <div className='skillsEmojis'>
    <Image src='/images/html.png' alt='picture' width={150} height={150}/> 
    <Image src='/images/boot.png' alt='picture' width={90} height={80}/> 
    <Image src='/images/emotion.png' alt='picture' width={200} height={80}/> 
    <Image src='/next.png' alt='picture' width={100} height={80}/> 
    </div>
    
  </S.SectionSide>
        </div>
      )}
    </div>
  );
};

export default Index;
