import React from 'react'

type Props = {children: React.ReactNode}
const layout = ({children}: Props) => {
  return (
    <div className='flex h-screen justify-center items-center w-full'>
        {children}
    </div>
  )
}

export default layout