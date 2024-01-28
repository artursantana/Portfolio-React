


import React, { useEffect, useState } from 'react'
import * as S from './style'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Index = () => {
  const [widthPage, setWidthPage] = useState<number>()

  
  useEffect(() => {

    setWidthPage(window.innerWidth);

    const handleResize = () => {
      setWidthPage(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);


  }, []);




  const router = useRouter()

  return (
    <S.Container>
      <S.HeaderUl responsivePage={widthPage}>

      <li><Link 
          href='/' 
          className={router.pathname === '/' ? 'select' : ''}
           >DashBoard
           </Link></li>

        <li><Link 
          href='/home/Home' 
          className={router.pathname === '/home/Home' ? 'select' : ''}
           >Home
           </Link></li>

        <li><Link
         href='/about/About' 
         className={router.pathname === '/about/About' ? 'select' : ''}
         >About
         </Link></li>

        <li><Link 
         href='/projects/Projects'
         className={router.pathname === '/projects/Projects' ? 'select' : ''}
          >Projects
          </Link></li>

      </S.HeaderUl>
    </S.Container>
  )
}

export default Index
