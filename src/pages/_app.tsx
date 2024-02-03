


import React from 'react'
import type { AppProps } from 'next/app'
import LayoutMain from '../app/layout'


const _app = ({Component, pageProps}: AppProps ) => {

  return (
    
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  )
}

export default _app
