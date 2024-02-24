


import React,{ useEffect, useState } from 'react';
import * as S from '../../../pagesStyles/home/experience/style'

type Props = {
  showDiv?: boolean;
  loadingBar?: number | undefined 
};



const Index: React.FC<Props> = ({ showDiv, loadingBar }) => {

  const [widthPage, setWidthPage] = useState<number>()

  
  

  useEffect(() => {

    setWidthPage(window.innerWidth);
  
    const handleResize = () => {
      setWidthPage(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
  
  }, []);

  const html = '{ Dominei HTML, CSS, JavaScript e TypeScript, aplicando-os em projetos tangíveis. Pronto para contribuir com inovação e aprendizado contínuo.}'

  const css = '{ domínio em Scss, Style-Components e Emotion.js. Crio experiências visuais envolventes com um toque de elegância.}'
  
  const javascript = '{ Desbravador do universo React.js e Next.js, aprimorei meu domínio nas tecnologias que impulsionam a web moderna. Além disso, sou um habilidoso manipulador de interações dinâmicas com JQUERY.}'
  
  const back = '{ Afiei minhas habilidades no backend, dominando SQL, MySQL e Node.js. Construo aplicações sólidas e escaláveis para garantir um desenvolvimento eficiente.}'
  return (
    <div>
      {!showDiv && (
        <S.Container responsivePage={widthPage}>
            <S.SectionContainer responsivePage={widthPage}>

            
          <S.UlContainer>
              <h1>Education <span>.</span></h1>
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
            <h1>Lenguages<span>.</span></h1>
            <li>Native Portuguese</li>
            <li>Advanced English</li>
            <li>Middle Spanish</li>
            <li>French beginner</li>
          </S.AsideContainer>
          </S.SectionContainer>
          <S.SectionContainerBottom responsivePage={widthPage}>
            <h1>Interest<span>.</span></h1>
            <li>Back End Development</li>
            <li>Website development</li>
            <li>English and French</li>
          </S.SectionContainerBottom>
        </S.Container>
      )}

      {showDiv && (
        
        <S.SectionSide>
    <S.InsideSectionSide responsivePage={widthPage} loadingBar={loadingBar}>
      <div>
        <p><span>const</span> HTML | CSS | JAVASCRIPT | TYPESCRIPT <span>= </span></p>
        <span>{html}</span>
      </div>
      <div>
        <p><span>const</span> Scss | Style-Components | Emotion.js <span>= </span></p>
        <span>{css}</span>
      </div>
      <div>
        <p><span>const</span> React.js | Next.js | JQUERY <span>= </span></p>
        <span>{javascript}</span>
      </div>
      <div>
        <p><span>const</span> SQL | MYSQL | NODE.JS <span>= </span></p>
        <span>{back}</span>
      </div>
    </S.InsideSectionSide>
  </S.SectionSide>
        
      )}
    </div>
  );
};

export default Index;


