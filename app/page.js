'use client'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import Slider from './components/slider';

const categories = [
  {
    name: "Bride and Groom",
    slug: '/bride-and-groom',
  },
  {
    name: "Saree",
    slug: '/saree',
  },
  {
    name: "Lehenga Choli",
    slug: '/lehenga-choli',
  },
  {
    name: "Salwar Kameez",
    slug: '/salwar-kameez',
  },
  {
    name: "Bride and Groom",
    slug: '/bride-and-groom',
  },
  {
    name: "Saree",
    slug: '/saree',
  },
  {
    name: "Lehenga Choli",
    slug: '/lehenga-choli',
  },
  {
    name: "Salwar Kameez",
    slug: '/salwar-kameez',
  },
];

export default function Home() {

  return (
    <div>
      <TopHeader />
      <Header />
      <Slider />
    </div>
  )
}

function Header() {
  return <div className='px-[40px]'>
    <div className='flex justify-between items-center px-[60px] py-[10px]'>
      <div className='flex gap-1 items-center'>
        <LocalOfferOutlinedIcon className='w-7 h-7' />
        <p>Offer</p>
      </div>
      <h1 className={`font-playfair text-[40px]`}>NAVAKAR</h1>
      <div className='flex gap-1 items-center'>
        <FavoriteBorderOutlinedIcon className='w-7 h-7' />
        <ShoppingCartOutlinedIcon className='w-7 h-7' />
      </div>
    </div>
    <hr className='h-[10px]' />
    <div className='flex justify-between px-[20px]'>
      {categories.map((category) => {
        return <p className='cursor-pointer'>{category.name}</p>
      })}
    </div>
  </div>
}

function TopHeader() {
  return <>
    {/* header  */}
    <div className="flex justify-between bg-[#cc1d20] px-[150px] py-[10px]">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full px-12 py-[5px] w-full bg-opacity-25 focus:outline-none "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute text-gray-400 w-5 h-5 top-1.5 left-3 bg-opacity-10"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <div className='flex gap-[20px] items-center'>
        <Link href={'/dashboard'}>
          <div className='flex gap-2 items-center cursor-pointer'>
            <AccountCircleOutlinedIcon className='text-white w-8 h-8' />
            <p className='text-white'>User</p>
          </div>
        </Link>
        <p className='text-white cursor-pointer'>Help?</p>
      </div>
    </div>
  </>
}