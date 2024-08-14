'use client'
import React from 'react'
import UploadCareButton from './UploadCareButton'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  userImage: string | null
  onDelete?: () => Promise<any> // Update to return a Promise
  onUpload?: () => void // Optional if used
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    if (onDelete) {
      const response = await onDelete()
      if (response) {
        router.refresh() // This will trigger a page refresh
      }
    }
  }

  return (
    <div className='flex flex-col'>
      <p className='text-lg text-white'>Profile Picture</p>
      <div className='flex flex-col items-center justify-center h-[30vh]'>
        {userImage ? (
          <>
            <div className='relative h-full w-2/12'>
              <Image
                src={userImage}
                alt="profile"
                fill
                className='rounded-full'
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className='bg-transparent text-white/70 
              hover:bg-transparent hover:text-white'
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton />
        )}
      </div>
    </div>
  )
}

export default ProfilePicture
