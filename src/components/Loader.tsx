import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const Loader = () => {
  return (
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={[' #2837c6 ', '#2883c6', '#f8b26a', '#2837c6', '#2883c6']}
/>
  )
}

export default Loader