


import React, { useEffect, useState } from 'react'
import * as S from './style'
import Link from 'next/link'
import { usePathname } from 'next/navigation';




const Index = () => {
  

  const pathname = usePathname();
  
  
  const [widthPage, setWidthPage] = useState<number>()

  
  useEffect(() => {

    setWidthPage(window.innerWidth);

    const handleResize = () => {
      setWidthPage(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);


  }, []);


  
  return (
    <S.Container>
      <S.HeaderUl responsivePage={widthPage}>

      <li><Link 
      
          href='/' 
          className={pathname === '/' ? 'select' : ''}
           >DashBoard
           </Link></li>

        <li><Link 
          href='/home/Home' 
          className={pathname === '/home/Home' ? 'select' : ''}
           >Resume
           </Link></li>

        <li><Link
         href='/about/About' 
         className={pathname === '/about/About' ? 'select' : ''}
         >About
         </Link></li>

        <li><Link 
         href='/projects/Projects'
         className={pathname === '/projects/Projects' ? 'select' : ''}
          >Projects
          </Link></li>

      </S.HeaderUl>
    </S.Container>
  )
}

export default Index
