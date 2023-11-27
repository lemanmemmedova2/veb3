import React from 'react'
import Myemail from './Myemail'
import Myaddress from './Myaddress'
import Myname from './Myname'
import MyPersonalInfo from './MyPersonalInfo'
import './Myprofile.css'

const Myprofile = () => {
  return (
    <div>
        <Myemail/>
        <Myaddress/>
        <Myname/>
        <MyPersonalInfo/>
    </div>
  )
}

export default Myprofile