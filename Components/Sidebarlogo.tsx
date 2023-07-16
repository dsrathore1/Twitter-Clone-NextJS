"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { BsTwitter } from 'react-icons/bs';

const Sidebarlogo = () => {
    const router = useRouter();

    return (
        <div onClick={() => { router.push("/") }}
            className='
        rounded-full
        h-14
        w-14
        p-4
        mt-2
        flex
        item-center
        justify-center
        hover:bg-sky-500
        cursor-pointer
        transition
        '>
            <BsTwitter color='white' size={30} />
        </div>
    )
}

export default Sidebarlogo