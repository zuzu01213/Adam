import { InfoBar } from '@/components/infobar'
import MenuOptions from '@/components/sidebar'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className='flex flex-col gap-4 relative'>
      <div className='flex overflow-hidden h-screen sticky top-0 z-[10]'>
        <MenuOptions/>  
        <div className='w-full'>
        <InfoBar/>
        <h1 className='text-2xl md:text-4xl  sticky top-0 z-[10] p-6 bg-background/50
        backdrop-blur-lg flex items-center border-b '>
            Dashboard
        </h1>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage