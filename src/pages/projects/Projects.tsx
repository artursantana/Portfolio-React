

import React, { useState, useEffect } from 'react'
import * as S from './style'



import FirstModal from './modal/firstmodal/FirstModal'
import SecondModal from './modal/secondmodal/SecondModal'
import ThirdModal from './modal/thirdmodal/ThirdModal'
import FourthModal from './modal/fourtmodal/FourthModal'



const Projects = () => {
const [firstModal,setFirstModal] = useState<React.ReactNode | undefined>(false)
const [secondModal,setSecondModal] = useState<React.ReactNode | undefined>(false)
const [thirdModal,setThirdModal] = useState<React.ReactNode | undefined>(false)
const [fourthModal,setFourthModal] = useState<React.ReactNode | undefined>(false)
const [pageLoad, setPageLoad] = useState(0);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setPageLoad(1);
  }, 300);
  return () => clearTimeout(timeoutId);
}, []);

  return (
    <>
    {pageLoad === 0 &&(<h1>Loading...</h1>)}
    
{pageLoad === 1 && (

  <S.Container>
        <S.SectionTop>
          <h1>Projects :</h1>
        </S.SectionTop>
      
          <S.SectionBottom>
            <div className='DivMainProjects'>
              <div onClick={()=>setFirstModal(!firstModal)}></div>
              <div onClick={()=>setSecondModal(!secondModal)}></div>
              <div onClick={()=>setThirdModal(!thirdModal)}></div>
              <div onClick={()=>setFourthModal(!fourthModal)}></div>
      
            </div>
          </S.SectionBottom>
          <FirstModal modal={firstModal} setModal={setFirstModal}/>
          <SecondModal modal={secondModal} setModal={setSecondModal}/>
          <ThirdModal modal={thirdModal} setModal={setThirdModal}/>
          <FourthModal modal={fourthModal} setModal={setFourthModal}/>
      
      </S.Container>
      )}
      </>
        )
    
}

export default Projects
