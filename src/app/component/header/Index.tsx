


import React from 'react'
import * as S from './style'
import Link from 'next/link'

const Index = () => {
  return (
    <S.Container>
      <S.HeaderUl>
        <li><Link href='/home/Home'>Home</Link></li>
        <li><Link href='/about/About'>About</Link></li>
        <li><Link href='/projects/Projects'>Projects</Link></li>
      </S.HeaderUl>
    </S.Container>
  )
}

export default Index
