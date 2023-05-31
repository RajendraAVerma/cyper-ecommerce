'use client'

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

export default function OverviewCards() {
    return <>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <CustomCard
                heading={'TOTAL EARNINGS'}
                value={"₹98,851.35"}
                percent={"+90.40%"}
                colorCode={"#7c6bff"}
                icon={<AccountBalanceWalletOutlinedIcon className='w-5' />}
            />
            <CustomCard
                heading={'ORDERS'}
                value={"65,802"}
                percent={"+19.40%"}
                colorCode={"#1ea6d3"}
                icon={<StorefrontOutlinedIcon className='w-5' />}
            />
            <CustomCard
                heading={'CUSTOMERS'}
                value={"79,958"}
                percent={"+90.40%"}
                colorCode={"#f1be46"}
                icon={<AccountCircleOutlinedIcon className='w-5' />}
            />
            <CustomCard
                heading={'PRODUCTS'}
                value={"36,758"}
                percent={"+9.40%"}
                colorCode={"#4b93ff"}
                icon={<DiamondOutlinedIcon className='w-5' />}
            />
        </div>
    </>
}

function CustomCard({ heading, value, icon, percent, colorCode }) {
    return <>
        <div className="flex justify-between border rounded p-4 gap-2.5 hover:shadow-lg hover:ease-in-out hover:-translate-y-1 hover:duration-300">
            <div className='flex gap-2.5'>
                <div
                    style={{ backgroundColor: `${colorCode}60` }}
                    className={`h-[95px] w-[4px] bg-opacity-75 rounded-full`}> </div>
                <div className="flex flex-col gap-2.5">
                    <p className="text-[#878a99] font-semibold text-[13px]">{heading}</p>
                    <p className="font-bold text-[21px]">{value}</p>
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center bg-[#e6fbf5] rounded-lg px-1 py-[1px] text-[9px] text-[#06d6a8]">
                            <p>{percent}</p>
                        </div>
                        <p className="text-sm text-[#878a99]">than last week</p>
                    </div>
                </div>
            </div>
            <div className='pl-5'>
                <div
                    style={{ color: `${colorCode}`, backgroundColor: `${colorCode}30`, }}
                    className={`p-3 rounded-lg`}>
                    {icon}
                </div>
            </div>
        </div>
    </>
}