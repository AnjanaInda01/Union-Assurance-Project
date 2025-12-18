import React from 'react'
import NavBar from '../../common/component/NavBar/NavBar'
import ProgressBar from '../../common/component/ProgressShortBar/ProgressBar'
import './style.css';

export default function FormPage3() {
  return (
    <div className='content'>
      <NavBar progressbar={<ProgressBar label={"My details"}/>}/>

    </div>
  )
}
