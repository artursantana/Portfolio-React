
"use client"
import './global.css'
import React, { ReactNode } from 'react'
import Index from './component/layoutmain/Index'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='body'>
        <Index>
          {children}
        </Index>
    </div>
  )
}

export default layout
