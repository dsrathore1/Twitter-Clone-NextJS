import React from 'react'
import { BsHouseFill, BsBellFill, BsPersonFill } from "react-icons/bs";
import Sidebarlogo from './Sidebarlogo';
import SidebarItem from './SidebarItem';
import { BiLogOut } from "react-icons/bi";
import SidebarTweetBtn from './SidebarTweetBtn';

const Sidebar = () => {
    const items = [
        {
            label: "Home",
            href: "/",
            icon: BsHouseFill
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: BsBellFill
        },
        {
            label: "Profile",
            href: "/user/123",
            icon: BsPersonFill
        },
    ];
    return (
        <div className='col-span-1 h-full pr-4 md:pr-2 bg-slate-900'>
            <div className='flex flex-col items-end'>
                <div className="space-y-4 lg:w-[250px]">
                    <Sidebarlogo />
                    {
                        items.map((item) => (
                            <SidebarItem
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                            />
                        ))
                    }
                    <SidebarItem icon={BiLogOut} label="Logout" />
                    <div className='w-full'>
                        <SidebarTweetBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar