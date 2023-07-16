'use client'

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import { AnchorOutlined, AutorenewOutlined, DeleteOutlineRounded, Filter, FilterList, LocalShippingOutlined, MoreHorizRounded, MoreVertOutlined, Search, SortOutlined } from '@mui/icons-material';

export default function Page() {
    return <main className='p-5 flex flex-col gap-5'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <CustomCard
                heading={'TOTAL USERS'}
                value={"200.32k"}
                colorCode={"#4b93ff"}
            />
            <CustomCard
                heading={'ACTIVE USERS'}
                value={"35.21k"}
                colorCode={"#f1be46"}
            />
            <CustomCard
                heading={'UNACTIVE USERS'}
                value={"647.27k"}
                colorCode={"#3ad8a5"}
            />
        </div>
        <ToolBox />
        <Sellers />
    </main>
}

function CustomCard({ heading, value, colorCode }) {
    return <>
        <div
            style={{ backgroundColor: `${colorCode}30`, }}
            className="flex justify-start rounded p-4 gap-4 hover:shadow-lg ease-in-out hover:-translate-y-1 duration-300">
            <div className=''>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold text-[21px]">{value}</p>
                <p className="text-[#444444] font-medium text-[14px]">{heading}</p>
            </div>
        </div>
    </>
}



function Sellers() {
    const sellers = [
        {
            sellerName: "Alina Holland",
            orders: 703,
            balance: "$351.91k",
            email: "hollandalina@toner.com",
            phone: "275-754-9658",
            createDate: "16 Aug, 2016",
            accountStatus: "ACTIVE"
        },
        {
            sellerName: "Theresa Crawford",
            orders: 2504,
            balance: "$3468.41k",
            email: "crawford@toner.com",
            phone: "364-953-0764",
            createDate: "28 Oct, 2014",
            accountStatus: "ACTIVE"
        },
        {
            sellerName: "Jacques Leon",
            orders: 2870,
            balance: "$2145.20k",
            email: "jacques@toner.com",
            phone: "094-951-3576",
            createDate: "07 Feb, 2015",
            accountStatus: "INACTIVE"
        },
        {
            sellerName: "Gabrielle Holden",
            orders: 2268,
            balance: "$803.11k",
            email: "gabrielle@toner.com",
            phone: "032-012-3654",
            createDate: "17 Nov, 2022",
            accountStatus: "ACTIVE"
        },
        {
            sellerName: "Cassius Brock",
            orders: 1571,
            balance: "$341.81k",
            email: "brock@toner.com",
            phone: "415-778-3654",
            createDate: "24 Nov, 2022",
            accountStatus: "INACTIVE"
        },
        {
            sellerName: "Tommy Carey",
            orders: 3982,
            balance: "$1452.74k",
            email: "careytommy@toner.com",
            phone: "963-012-7495",
            createDate: "02 Jan, 2023",
            accountStatus: "ACTIVE"
        }
    ];


    return <>
        <div className="border rounded w-auto">
            <div className="flex justify-between py-5 px-5">
                <h1 className="font-bold">Users List View</h1>
                <div className="flex gap-2 items-center">
                    <span className="text-xs font-semibold">SORT BY :</span>
                    <span className="text-sm text-[#8793a6]">Today</span>
                </div>
            </div>
            <div className="overflow-x-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                <SellerTable sellers={sellers} />
            </div>
            <hr />
            <div className="flex justify-between py-5 px-5">
                <h1 className="font-semibold text-[#878a99] text-sm">Showing <span className="font-bold">6</span> of <span className="font-bold">25</span> Results</h1>
                <div className="flex gap-2 items-center">
                    <div className="flex justify-center items-center border rounded px-2 py-1 text-sm cursor-pointer">
                        {"<"}
                    </div>
                    <div className="flex justify-center items-center border rounded px-2 py-1 text-sm cursor-pointer">
                        1
                    </div>
                    <div className="flex justify-center items-center border rounded px-2 py-1 text-sm text-white bg-[#4b93ff] cursor-pointer">
                        2
                    </div>
                    <div className="flex justify-center items-center border rounded px-2 py-1 text-sm cursor-pointer">
                        3
                    </div>
                    <div className="flex justify-center items-center border rounded px-2 py-1 text-sm cursor-pointer">
                        {">"}
                    </div>
                </div>
            </div>

        </div>
    </>
}

const SellerTable = ({ sellers }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#f3f6f9]">
                <tr>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">User Name</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Orders</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Balance</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Email</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Phone</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Create Date</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Account Status</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {sellers.map((seller) => (
                    <tr key={seller.sellerName}>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap text-blue-500 font-semibold hover:text-blue-700 cursor-pointer">{seller.sellerName}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{seller.orders}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{seller.balance}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{seller.email}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{seller.phone}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{seller.createDate}</td>
                        <td className="py-3 px-4 text-[14px] whitespace-nowrap">
                            <StatusCard text={seller.accountStatus} />
                        </td>
                        <td className="py-3 px-4 text-[14px] whitespace-nowrap">
                            <div className="flex gap-2">
                                <div className={`rounded px-2 py-1 text-[11px] font-semibold items-center justify-center flex bg-[#7060e610] text-[#7060e6] hover:text-white hover:bg-[#7060e6] ease-in-out duration-200 cursor-pointer`}>View</div>
                                <div className={`rounded px-2 py-1 text-[11px] font-semibold items-center justify-center flex bg-[#1b95be10] text-[#1b95be] hover:text-white hover:bg-[#1b95be] ease-in-out duration-200 cursor-pointer`}>Edit</div>
                                <div className={`rounded px-2 py-1 text-[11px] font-semibold items-center justify-center flex bg-[#ef476f10] text-[#ef476f] hover:text-white hover:bg-[#ef476f] ease-in-out duration-200 cursor-pointer`}>Remove</div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

function StatusCard({ text }) {
    return <>
        <div className="flex">
            <div className={`rounded px-2 py-0.5 text-[11px] font-semibold items-center justify-center flex
        ${text === "INACTIVE" ? "bg-[#fdecf0] text-[#ef476f]" :
                    text === "ACTIVE" ? "bg-[#e6fbf5] text-[#06d6a0]" :
                        ""

                }
        `}>
                {text}
            </div>
        </div>
    </>
}

function ToolBox() {
    return <section className='border border-[#e9ebec] p-4 rounded'>
        <div className="flex flex-col md:flex-row gap-5">
            <div className="relative flex-1">
                <span className="absolute left-3 top-2 text-gray-500 font-bold">
                    <Search className="w-5 h-5" />
                </span>
                <input
                    placeholder="Search ..."
                    className="border rounded w-full pl-10 pr-4 py-2 outline-blue-400 focus:outline"
                />
            </div>
            <div className="flex-1 flex flex-col">
                <select className="border rounded px-4 py-2.5 text-[#333333] text-sm outline-blue-400 focus:outline">
                    <option value="option1">All</option>
                    <option value="option1">Active</option>
                    <option value="option1">Inactive</option>
                </select>
            </div>
            <div className="flex-1 flex flex-col">
                <select className="border rounded px-4 py-2.5 text-[#333333] text-sm outline-blue-400 focus:outline">
                    <option value="option1">All</option>
                    <option value="option1">Last 7 days</option>
                    <option value="option1">Last 30 days</option>
                    <option value="option1">This Month</option>
                    <option value="option1">Yesterday</option>
                    <option value="option1">Today</option>
                </select>
            </div>
            <div className="flex justify-center items-center gap-2 text-white font-bold text-sm rounded px-4 py-2 bg-[#4b86e0] hover:bg-[#407dd9] cursor-pointer">
                Add Users
            </div>
            <div className="flex justify-center items-center ease-in-out duration-300 text-white font-bold rounded p-2 bg-[#aeb0af] hover:bg-[#080808] cursor-pointer">
                <MoreHorizRounded />
            </div>
        </div>

    </section>
}