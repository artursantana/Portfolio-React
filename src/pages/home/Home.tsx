import React, { useEffect, useState } from 'react';
import * as S from './style';


import Index from './experience/Index'

const Home = () => {


  const [pageLoad, setPageLoad] = useState(0);
  const [showComponentChild, setShowComponentChild] = useState(false)
  const [loadingBar, setLoadingBar] = useState(0)

  
const clickShowDiv = () => {
  if (setShowComponentChild) {
    setShowComponentChild(!showComponentChild);
   
      const timeoutLoadbar = setTimeout(() => {
        setLoadingBar(1);
      }, 300);
      return () => clearTimeout(timeoutLoadbar);

    
    }
}


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPageLoad(1);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {pageLoad === 0 && (
        <h1>Loading...</h1>
      )}
      
      {pageLoad === 1 && (
        <S.Container>
         

          <S.SectionBottom>
            <h1>{showComponentChild ? 'Skills :' : 'Training :'}</h1>
            <div className='DivMain'>
              <div>
              <p id='line' onClick={clickShowDiv}>{showComponentChild ? '<<< Back': 'Next Page >>>'}</p> 
              </div>
              <Index showDiv={showComponentChild} loadingBar={loadingBar}/>
            </div>
          </S.SectionBottom>
        </S.Container>
      )}
    </>
  );
}
export default Home;

