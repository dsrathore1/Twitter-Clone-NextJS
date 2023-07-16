import React from 'react';
import { IconType } from 'react-icons';

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, href }) => {
    return (
        <div className='flex flex-row items-center'>
            {/* This code is for mobile friendly UI  */}
            <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-400 cursor-pointer lg:hidden">
                <Icon size={28} color='white' />
            </div>
            
            {/* This code is for Large devices  */}
            <div className=' relative hidden lg:flex items-center gap-4 p-4 rounder-full cursor-pointer hover:bg-sky-500 duration-[.4s] hover:rounded-full transition-all ease-in-out w-full justify-start'>
                <Icon size={24} color='white' />
                <p className='text-white hidden lg:block text-xl'>{label}</p>
            </div>
        </div>
    );
}

export default SidebarItem;