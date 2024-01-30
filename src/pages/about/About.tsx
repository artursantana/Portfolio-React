
import React, { useEffect } from 'react'
import * as S from './style'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';



const About = () => {
  useEffect(() => {
   
    if (typeof document !== 'undefined') {
      const scrollContainer = document.querySelector('.ScrollDownandTop');

      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleContainerScroll);
      }
    }
  }, []);

  const handleScroll = ({ direction }: { direction: string }) => {
    if (typeof document !== 'undefined') {
      const scrollContainer = document.querySelector('.ScrollDownandTop');

      if (scrollContainer) {
        const scrollValue = (direction === 'down') ? scrollContainer.scrollHeight : 0;
        scrollContainer.scrollTo({
          top: scrollValue,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleContainerScroll = () => {
    if (typeof document !== 'undefined') {
      const scrollContainer = document.querySelector('.ScrollDownandTop');

      if (scrollContainer) {
        const scrollPosition = scrollContainer.scrollTop;
        const displayButtonBottom = document.querySelector('.buttonBottomPage')as HTMLElement;
        const displayButtonTop = document.querySelector('.buttonTopPage')as HTMLElement;
        if(displayButtonBottom && displayButtonTop ){
          scrollPosition > 210 ? displayButtonBottom.style.opacity = '0' : displayButtonBottom.style.opacity = '1';
          scrollPosition < 210 ? displayButtonTop.style.opacity = '0' : displayButtonTop.style.opacity = '1';
        }
      }
    }
  };



  const SeeMoreText = () => {

    const SeeMore = document.querySelector('#SeeMore')as HTMLElement
    const buttonText = document.querySelector('#buttonText')as HTMLElement
  
  if (SeeMore && buttonText) {

    SeeMore.classList.toggle('show');

    buttonText.innerText = SeeMore.classList.contains('show') ? 'More...' : 'Less';
  } 

  }



  return (
    <S.Container className='ScrollDownandTop'>

      <S.SectionHeader>

        <div>

          <div id='SeeMore' className='show'><h1>Hi I&apos;m Artur Santana 👋</h1>I recently graduated from Tokyo School,

          <div id='buttonText' onClick={SeeMoreText} className='button'>More...</div>

           where I specialized in Front-end Development. During my time at school, I delved deeply into a variety of disciplines essential to building interactive and engaging interfaces for web users.</div>

          <Image src='/teste.png' alt='picture' width={250} height={250}/>

        </div>

        <div className='SocialMedia'>
        <ul>
        
          <li><FontAwesomeIcon icon={faInstagram} /></li>
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li><FontAwesomeIcon icon={faGithub} /></li>
          <li><FontAwesomeIcon icon={faLinkedin} /></li>
        </ul>
        </div>

      </S.SectionHeader>
       
      <button onClick={ () => handleScroll({direction: 'down'})} className='buttonBottomPage'>Down Scroll</button>

      <S.SectionSide>
        <h1>the road till here</h1>

      <div>
      I began my journey into the world of web development in 2019, exploring the fundamentals with HTML, CSS, and JavaScript on my own. Through dedication and self-directed learning, I deepened my knowledge, and a few months later, I decided to pursue a more structured education at Tokyo School. Now, upon completing my specialization in front-end development, I feel equipped to create interactive and engaging web interfaces. This journey has been incredibly rewarding, and I am excited to apply my newly acquired skills to real-world challenges.
      </div>
      </S.SectionSide>
      
      <S.SectionBottom>

      <button onClick={() => handleScroll({ direction: 'up' })} className='buttonTopPage'>Top</button>
      </S.SectionBottom>
      
    </S.Container>
  )
}

export default About
