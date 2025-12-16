import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-full flex items-center justify-center p-1 pt-12'>
            <Image src={'/android-chrome-512x512.png'} alt='logo' height={220} width={220} priority className='shadow-glow rounded-md'/>
        </div>
    </div>
  )
}

export default Loader