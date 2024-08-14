import MenuOptions from '@/components/sidebar'
import Sidebar from '@/components/sidebar'
import React from 'react'

type Props = {children: React.ReactNode }
export const layout = (props: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        <MenuOptions/>
        <div className='w-full'>
            {props.children}
        </div>
    </div>
  )
}
