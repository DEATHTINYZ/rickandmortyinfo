import Image from 'next/image'
import loader from 'public/assets/loader.gif'
import React from 'react'

const Loading = () => {
  return (
    <div className="">
      <Image src={loader} alt="Loader.." />
    </div>
  )
}

export default Loading
