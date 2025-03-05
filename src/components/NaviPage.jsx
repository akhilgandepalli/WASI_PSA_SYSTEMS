import React from 'react'
import { useParams } from 'react-router'
import Contact from './Contact'
import Terms from './Terms'

const NaviPage = () => {
    const {type} = useParams()
  return (
    <>{type=='contact'?<Contact />:type=='terms'?<Terms />:<div>error</div>}</>
  )
}

export default NaviPage