import ProfileForm from '@/components/forms/ProfileForm'
import { InfoBar } from '@/components/infobar'
import MenuOptions from '@/components/sidebar'
import React from 'react'
import ProfilePicture from './_components/ProfilePicture'
import { db } from '@/lib/db'

const Settings = () => {
  const removeProfileImage = async () => {
    'use server'
    const response = await db.user.update({
      where: {
        ClerkId: authUser.id
      },
      data: {
        profileImage: '',
      }
    })
  }
  return (
    <div className='flex flex-col gap-4 relative'>
      <div className='flex overflow-hidden h-screen sticky top-0 z-[10]'>
        <MenuOptions/>  
        <div className='w-full'>
            <InfoBar/>
            <h1 className='text-2xl md:text-4xl  sticky top-0 z-[10] p-6 bg-background/50
            backdrop-blur-lg flex items-center border-b '>
                Settings
            </h1>
            <div className='flex flex-col gap-10 p-6'>
                <div>
                    <p className='text-2xl font-bold'>User Profile</p>
                    <p className='text-base text-white/50'>Add or Update your profile information</p>
                </div>
                <ProfilePicture>

                </ProfilePicture>
                <ProfileForm/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Settings