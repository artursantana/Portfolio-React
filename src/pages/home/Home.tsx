import React, { useEffect, useState } from 'react';
import * as S from './style';

const Home = () => {
  const [pageLoad, setPageLoad] = useState(0);

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
          <S.SectionTop>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quam sint excepturi repudiandae harum facere recusandae vitae rem quia, amet ipsa praesentium dolorum facilis in adipisci voluptas molestiae inventore nihil.
          </S.SectionTop>

          <S.SectionBottom>
            <h1>What I am doing </h1>
            <div className='DivMain'>
              <div>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </S.SectionBottom>
        </S.Container>
      )}
    </>
  );
}

export default Home;
