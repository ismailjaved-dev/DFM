import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#1E1E1E] min-h-[100dvh] flex justify-center items-center'>
    <div className='flex flex-col items-center gap-5  border border-dashed border-white p-5 rounded-2xl'>
        <Button>Button Text</Button>
        <Button variant="secondary">Button Text</Button>
        <Button variant="outline">Button Text</Button>
    </div>
    </div>
  )
}

export default page