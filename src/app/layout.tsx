
"use client"
import './global.css'
import React from 'react'
import Index from './component/layoutmain/Index'

const layout = ({children}: {children: any}) => {
  return (
    
    <div className='body'>
        <Index>
          {children}
        </Index>
    </div>
  )
}

export default layout
