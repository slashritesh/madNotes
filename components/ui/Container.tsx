import React from 'react'

interface ChildrenProps {
    children : React.ReactNode
}

const Container = ({children} : ChildrenProps) => {
  return (
    <div className='px-5 sm:px-7 md:px-10 lg:px-20 '>{children}</div>
  )
}

export default Container