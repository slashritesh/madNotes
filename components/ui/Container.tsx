import React from 'react'

interface ChildrenProps {
    children : React.ReactNode
}

const Container = ({children} : ChildrenProps) => {
  return (
    <div className='px-20'>{children}</div>
  )
}

export default Container