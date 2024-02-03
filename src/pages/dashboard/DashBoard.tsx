import React from 'react'
import * as S from './style'
import Image from 'next/image'
import CountUp from 'react-countup';
import Link from 'next/link';


const DashBoard = () => {
  return (
    <S.Container>
    <S.SideContainer>
      <p>As a <span> Front<span> End</span></span> Developer </p>

      <S.AsideContainer>
          <S.BoxContainer>
          <Link href='../../projects/Projects'>
              <div className='moreProjects'><CountUp start={0} end={33} duration={2.5}/>+ <h3>Projects </h3></div>
          </Link> 
          <Link href='../home/experience/Index'>
              <div className='detailSkilss'><h3>Skills +</h3></div>
          </Link> 
          <Image src='/images/about.jpg' alt='picture' width={250} height={250}/>
          </S.BoxContainer>
      </S.AsideContainer>
      
    </S.SideContainer>
    <S.BottomContainer>
        <div className='skills'>
        <div><span className='html'>HTML</span> | <span className='js'>JAVASCRIPT</span> | <span className='ts'>TYPESCRIPT</span> | <span className='react'>REACT.JS</span> | <span className='next'>NEXT.JS</span></div>
        <div><span className='css'>CSS</span> | <span className='sass'>SASS</span> | <span className='sc'>STYLE-COMPONENTS</span> | <span className='emo'>EMOTION.JS</span></div>
        <div><span className='sql'>SQL</span> | <span className='mysql'>MYSQL</span> | <span className='node'>NODE.JS</span> | <span className='jquery'>JQUERY</span> </div>
        
        </div>
    </S.BottomContainer>
</S.Container>
  )
}

export default DashBoard
