
import React from 'react'
import * as S from './style'
import Image from 'next/image'

const About = () => {


  const handleDownScroll = () => {
    
    const scrollContainer = document.querySelector('.ScrollDownandTop');

    if(scrollContainer){

      const scrollBottom = scrollContainer.scrollHeight

      scrollContainer.scrollTo({
        top: scrollBottom,
        behavior: 'smooth'
      });
    }
  
  };
  


  return (
    <S.Container className='ScrollDownandTop'>

      <S.SectionHeader>
        <p>I am Artur Santana, I recently graduated from Tokyo School, where I specialized in Front-end Development. During my time at school, I delved deeply into a variety of disciplines essential to building interactive and engaging interfaces for web users.</p>
        <Image src='/teste.png' alt='picture' width={250} height={250}/>
      </S.SectionHeader>
      <S.SectionSide>
        <div><h1>Skills :</h1></div>
        <div className='skillsEmojis'>
        <Image src='/html.png' alt='picture' width={150} height={150}/> 
        <Image src='/boot.png' alt='picture' width={90} height={80}/> 
        <Image src='/emotion.png' alt='picture' width={200} height={80}/> 
        <Image src='/next.png' alt='picture' width={100} height={80}/> 
        </div>
      </S.SectionSide>

      <button onClick={handleDownScroll}>Down Scroll</button>

      <S.SectionBottom>

      </S.SectionBottom>
      
    </S.Container>
  )
}

export default About
