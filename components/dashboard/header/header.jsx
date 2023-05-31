'use client'
import MenuIcon from '@mui/icons-material/Menu';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SearchIcon from '@mui/icons-material/Search';;
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useMenu } from '@/contexts/dashboard/menu';
import { motion } from 'framer-motion';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import SearchDialog from './search';
export default function Header() {
    const { isOpen, setIsOpen } = useMenu()
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    return <motion.div className="flex justify-between border-b" layout>
        <div className="flex-1 flex justify-between">
            <div className="flex justify-start items-start gap-5 pl-8 py-6">
                {isOpen && <div className='cursor-pointer' onClick={() => setIsOpen(false)}>
                    <MenuIcon className='text-[#495057] w-5' />
                </div>}
                {!isOpen && <div className='cursor-pointer' onClick={() => setIsOpen(true)}>
                    <ArrowForwardOutlinedIcon className='text-[#495057] w-5' />
                </div>}
                <SearchDialog />

            </div>
            <div className="flex items-center gap-5 pr-8 py-6">

                <GridViewOutlinedIcon className='text-[#495057] w-5' />
                <ZoomOutMapOutlinedIcon className='text-[#495057] w-5' />
                <ShoppingBagOutlinedIcon className='text-[#495057] w-5' />
                <LightModeOutlinedIcon className='text-[#495057] w-5' />
                <NotificationsNoneOutlinedIcon className='text-[#495057] w-5' />

            </div>
        </div>
        <div className='flex-0 flex items-center p-2 gap-3 bg-[#f3f6f9] cursor-pointer'>
            <img
                className='object-cover rounded-full w-9 h-9'
                src="https://themesbrand.com/toner/html/assets/images/users/avatar-1.jpg" alt="" />
            <div>
                <h1 className='text-[13px]'>Raquel Murillo</h1>
                <h1 className='text-[#878a99] text-[12px]'>Founder</h1>
            </div>
        </div>
        <div className='w-5'></div>
    </motion.div >
}