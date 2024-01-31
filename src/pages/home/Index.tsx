import React, { ReactNode } from 'react'

import Home from './Home'

const Index = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Home>
        {children}
      </Home>
    </>
  )
}

export default Index
