import React, { ReactNode, useEffect, useState } from 'react';
import * as S from './style';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';



const Home = ({children}: {children : ReactNode}) => {

  const pathname = usePathname();

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
          <S.SectionSide>
        <div><h1>Skills :</h1></div>
        <div className='skillsEmojis'>
        <Image src='/images/html.png' alt='picture' width={150} height={150}/> 
        <Image src='/images/boot.png' alt='picture' width={90} height={80}/> 
        <Image src='/images/emotion.png' alt='picture' width={200} height={80}/> 
        <Image src='/next.png' alt='picture' width={100} height={80}/> 
        </div>
        
      </S.SectionSide>

          <S.SectionBottom>
            <h1>What I am doing</h1>
            <div className='DivMain'>
              <div>
              <Link id='line'
          href='/home/experience/Experience' className={pathname === '/projects/Projects' ? 'select' : ''}>Experience
           </Link>
                
           <Link
           className={pathname === '/projects/Projects' ? 'select' : ''}
          href='/home/experience/Education'>Education
           </Link>
              </div>
            </div>
          </S.SectionBottom>
          {children}
        </S.Container>
      )}
    </>
  );
}
export default Home;

/*const Home = () => {
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

          <S.SectionSide>
        <div><h1>Skills :</h1></div>
        <div className='skillsEmojis'>
        <Image src='/html.png' alt='picture' width={150} height={150}/> 
        <Image src='/boot.png' alt='picture' width={90} height={80}/> 
        <Image src='/emotion.png' alt='picture' width={200} height={80}/> 
        <Image src='/next.png' alt='picture' width={100} height={80}/> 
        </div>
        
      </S.SectionSide>

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
*/

