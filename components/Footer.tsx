import React from 'react'

const Footer = () => {
  return (
    <div className='w-full text-sm flex justify-center sm:justify-between p-5 border-t'>
      <p className=''>Build by Slash Ritesh </p>
      <div className='sm:flex hidden gap-2'>
        <p>Youtube</p>|
        <p>Github</p>|
        <p>twitter</p>
      </div>
    </div>
  )
}

export default Footer