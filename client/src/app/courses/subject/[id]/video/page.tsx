import { Header } from '@/components/HeaderPage'
import VidoeSidebar from '@/components/VidoeSidebar'
import React from 'react'

const page = () => {
    return (<>
        <Header></Header>
        <VidoeSidebar />
        <div className=' bg-[#111827] h-screen w-screen flex items-center justify-center'>
            <h1 className='text-white h-10 w-10 text-xl'>Video</h1>
        </div>
    </>)
}

export default page