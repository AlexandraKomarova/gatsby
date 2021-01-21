import React from 'react'
import {navigate} from 'gatsby'
import Header from '../components/Header'

const test = () => {
  return (
    <div>
      <Header title='test header'></Header>
      <h1>this is a test page</h1>
      <button onClick={()=>navigate('/')}>back to home page</button>
    </div>
  )
}

export default test
