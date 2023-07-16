"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaFeather } from "react-icons/fa";


const SidebarTweetBtn = () => {
    const router = useRouter();
    return (
        <div className='flex flex-col items-center justify-center' onClick={() => { router.push("/") }}>
            <div className='
            mt-6
            lg:hidden
            rounded-full
            h-14
            w-14
            p-4
            flex
            items-center
            justify-center
            bg-sky-500
            hover:bg-opacity-80
            transtion
            cursor-pointer
            '>
                <FaFeather size={24} color='white' />
            </div>
            <div className='
            hidden
            lg:block
            rounded-full
            px-4
            py-2
            bg-sky-500
            items-center
            justify-center
            hover:bg-opacity-90
            transtion
            cursor-pointer
            w-full
            ml-3
            '>
                <p className='text-white hiddend lg:block text-center font-semibold text-[17px]'>Tweet</p>
            </div>
        </div>
    )
}

export default SidebarTweetBtn