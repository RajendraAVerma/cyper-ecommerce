'use client'

import { useState } from "react"
import SpeedIcon from '@mui/icons-material/Speed';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'; // coupon
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StarIcon from '@mui/icons-material/Star';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useMenu } from "@/contexts/dashboard/menu";
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const menuList = [
    {
        slug: '/dashboard',
        name: 'Dashboard',
        icon: <SpeedIcon className="w-5 h-5" />,
    },
    {
        name: 'Products ',
        icon: <StorefrontOutlinedIcon className="w-5 h-5" />,
        list: [
            {
                slug: 'dashboard/products',
                name: 'List View',
            },
            {
                slug: 'dashboard/products?view=gridview',
                name: 'Grid View',
            },
            {
                slug: 'dashboard/products/overview',
                name: 'Overview',
            },
            {
                slug: 'dashboard/products/create-product',
                name: 'Create Product',
            },
            {
                slug: 'dashboard/products/Categories',
                name: 'Sub Categories',
            }
        ]
    },
    {
        name: 'Orders',
        icon: <ShoppingCartOutlinedIcon className="w-5 h-5" />,
        list: [
            {
                slug: 'orders/list-view',
                name: 'List View',
            },
            {
                slug: 'orders/overview',
                name: 'Overview',
            },
        ]
    },
    {
        slug: '/calendar',
        name: 'Calendar',
        icon: <CalendarMonthOutlinedIcon className="w-5 h-5" />,
    },
    {
        name: 'Sellers',
        icon: <Inventory2OutlinedIcon className="w-5 h-5" />,
        list: [
            {
                slug: 'sellers/list-view',
                name: 'List View',
            },
            {
                slug: 'sellers/grid-view',
                name: 'Grid View',
            },
            {
                slug: 'sellers/overview',
                name: 'Overview',
            },
        ]
    },
    {
        name: 'Invoice',
        icon: <ReceiptOutlinedIcon className="w-5 h-5" />,
        list: [
            {
                slug: 'invoice/list-view',
                name: 'List View',
            },
            {
                slug: 'invoice/overview',
                name: 'Overview',
            },
            {
                slug: 'invoice/create-invoice',
                name: 'Create Invoice',
            },
        ]
    },
    {
        slug: '/users-list',
        name: 'User List',
        icon: <PeopleAltOutlinedIcon className="w-5 h-5" />,
    },
    {
        name: 'Shipping',
        icon: <LocalShippingOutlinedIcon className="w-5 h-5" />,
        list: [
            {
                slug: 'shipping/shipping-list',
                name: 'Shipping List',
            },
            {
                slug: 'shipping/shipment',
                name: 'Shipment',
            },
        ]
    },
    {
        slug: '/coupons',
        name: 'Coupons',
        icon: <SellOutlinedIcon className="w-5 h-5" />,
    },
    {
        slug: '/review-rating',
        name: 'Reviews & Ratings',
        icon: <StarIcon className="w-5 h-5" />,
    },
    {
        slug: '/brands',
        name: 'Brands',
        icon: <StorefrontOutlinedIcon className="w-5 h-5" />,
    },
    {
        slug: '/statistics',
        name: 'Statistics',
        icon: <PieChartOutlineIcon className="w-5 h-5" />,
    },
    {
        name: 'Localization',
        icon: <PaidIcon className="w-5 h-5" />,
        list: [
            {
                slug: 'localization/transaction',
                name: 'Transaction',
            },
            {
                slug: 'localization/currency-rates',
                name: 'Currency Rates',
            },
        ]
    },
    {
        name: 'Account',
        icon: <AccountCircleIcon className="w-5 h-5" />,
        list: [
            {
                slug: 'account',
                name: 'My Account',
            },
            {
                slug: 'account/settings',
                name: 'Settings',
            },
        ]
    },
];


export default function Menu() {
    const [expandedTab, setExpandedTab] = useState('')
    const { isOpen } = useMenu()
    return <motion.div className={`flex flex-col border-r h-screen ${isOpen ? 'w-[300px]' : 'w-auto'}`} layout>
        <div className="flex justify-center items-center p-[20px] h-[60px]">
            {isOpen && <img
                className="w-[100px]"
                src={"https://themesbrand.com/toner/html/assets/images/logo-dark.png"} alt="" />}

            {!isOpen && <img
                className="h-[30px] w-[30px]"
                src={"https://themesbrand.com/toner/html/assets/images/logo-sm.png"} alt="" />}
        </div>
        <div
            className="flex-1 overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#d0d6db] scrollbar-track-transparent scrollbar-thumb-rounded-full"
        >
            <ul className="flex flex-col gap-5 py-5 px-5 text-[15px] text-[#4f555ce8]">
                {menuList.map((menu, key) => {
                    return <AnimatePresence>
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            key={key + "motion"}
                            layout>
                            <MenuCard menu={menu} expandedTab={expandedTab} setExpandedTab={setExpandedTab} key={key} />
                        </motion.div>
                    </AnimatePresence>
                })}
            </ul>
        </div>
    </motion.div>
}

function MenuCard({ menu, expandedTab, setExpandedTab }) {
    const { isOpen } = useMenu()
    const pathname = usePathname()
    if (menu.slug) {
        return <Link href={menu.slug}>
            <li className={`flex gap-3 hover:text-[#5196ff] ${menu.slug && pathname.includes(menu.slug) ? 'text-[#5196ff]' : ''}`}>
                {menu.icon}
                {isOpen && <p>
                    {menu.name}
                </p>}
            </li>
        </Link>
    } else {
        return <li onClick={() => { expandedTab === menu.name ? setExpandedTab("") : setExpandedTab(menu.name) }}>
            <div className="group flex justify-between cursor-pointer">
                <div className="flex gap-3">
                    <div className="group-hover:text-[#5196ff]">
                        {menu.icon}
                    </div>
                    {isOpen && <div className="flex flex-col gap-2">
                        <p className="group-hover:text-[#5196ff]">{menu.name}</p>
                        <div className="">
                            {expandedTab === menu.name && <div className="flex flex-col gap-2">
                                {menu.list.map((item, key) => {
                                    return <SubMenuCard item={item} key={key} />
                                })}
                            </div>}
                        </div>
                    </div>}
                </div>
                {expandedTab === menu.name ? <KeyboardArrowDownIcon className="h-4 w-4 text-[#4f555c]" /> : <KeyboardArrowRightIcon className="h-4 w-4 text-[#4f555c]" />}
            </div>

        </li>
    }
}


const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 100, velocity: 3 }
        }
    },
    closed: {
        y: -30,
        opacity: 0,
        transition: {
            y: { stiffness: 100 }
        }
    }
};

function SubMenuCard({ item }) {
    return <Link href={item.slug}>
        <AnimatePresence>
            <motion.div
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                className="py-1 hover:text-[#5196ff]"
                layout
            >{item.name}</motion.div>
        </AnimatePresence>
    </Link>
}