import React from 'react'
import Image from 'next/image'
import web3logo from '../../img/web3-icon.png'

const Logo = () => {
  return (
    <Image 
      src={web3logo}
      width={50}
      height={50}
      alt="Web 3"
    />
  )
}

export default Logo