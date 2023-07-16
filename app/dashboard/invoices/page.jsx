'use client'

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import { Add, AnchorOutlined, AutorenewOutlined, DeleteOutlineRounded, Filter, FilterList, HourglassTopOutlined, LocalShippingOutlined, MoreHorizOutlined, PaidOutlined, PlusOneOutlined, Search, SortOutlined, TextSnippetOutlined } from '@mui/icons-material';

export default function Page() {
    return <main className='p-5 flex flex-col gap-5'>
        <h1 className='font-bold'>INVOICE LIST</h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            <CustomCard
                heading={'INVOICE SENT'}
                value={"2200.32"}
                colorCode={"#4b93ff"}
                count={6258}
                icon={<TextSnippetOutlined className='w-5' />}
            />
            <CustomCard
                heading={'PAID INVOICES'}
                value={"4090.54"}
                colorCode={"#06d6a0"}
                count={2451}
                icon={<PaidOutlined className='w-5' />}
            />
            <CustomCard
                heading={'UNPAID INVOICES'}
                value={"12354.41"}
                colorCode={"#f1be46"}
                count={720}
                icon={<HourglassTopOutlined className='w-5' />}
            />
            <CustomCard
                heading={'CANCELLED INVOICES'}
                value={"1215.36"}
                colorCode={"#ef476f"}
                count={502}
                icon={<DeleteOutlineRounded className='w-5' />}
            />
        </div>
        <ToolBox />
        <InvoiceList />
    </main>
}

function CustomCard({ heading, value, count, icon, colorCode }) {
    return <>
        <div
            style={{ backgroundColor: `${colorCode}30`, }}
            className="flex flex-col justify-start rounded p-4 gap-2 hover:shadow-lg ease-in-out hover:-translate-y-1 duration-300">
            <div className='flex justify-between'>
                <div className="flex flex-col gap-2">
                    <p className="text-[#878a99] font-semibold text-[13px]">{heading}</p>
                    <p className="font-bold text-[21px]">₹ {value}</p>
                </div>
            </div>
            <div className='flex justify-between items-end'>
                <div className='flex gap-2 items-end'>
                    <h2 className='text-white bg-[#1ea6d3] py-0.5 px-2 text-xs rounded text-center'>{count}</h2>
                    <p className='text-xs text-[#777777]'>{heading}</p>
                </div>

                <div
                    style={{ color: `${colorCode}`, }}
                    className={`p-3 rounded bg-white`}>
                    {icon}
                </div>
            </div>
        </div>
    </>
}



function InvoiceList() {
    const invoices = [
        {
            id: "#TTB30280001",
            customerName: "Neil Collins",
            customerPhotoURL: 'https://themesbrand.com/toner/html/assets/images/users/avatar-1.jpg',
            email: "ryan.dyer@toner.com",
            address: "Brazil",
            date: "23 May, 2022 10:45 AM",
            amount: "$415.96",
            paymentStatus: "PAID",
            action: ""
        },
        {
            id: "#TTB30280002",
            customerName: "Alfred Hurst",
            customerPhotoURL: 'https://themesbrand.com/toner/html/assets/images/users/avatar-8.jpg',
            email: "alfredH@toner.com",
            address: "Brazil",
            date: "08 Jan, 2023 8:34 AM",
            amount: "$875",
            paymentStatus: "UNPAID",
            action: ""
        },
        {
            id: "#TTB30280003",
            customerName: "Tommy Carey",
            customerPhotoURL: 'https://themesbrand.com/toner/html/assets/images/users/avatar-7.jpg',
            email: "careytommy@toner.com",
            address: "Brazil",
            date: "29 Apr, 2022 8:34 PM",
            amount: "$875",
            paymentStatus: "PAID",
            action: ""
        },
        {
            id: "#TTB30280004",
            customerName: "Cassius Brock",
            customerPhotoURL: 'https://themesbrand.com/toner/html/assets/images/users/avatar-6.jpg',
            email: "brock@toner.com",
            address: "Brazil",
            date: "02 Jul, 2022 8:48 PM",
            amount: "$875",
            paymentStatus: "PAID",
            action: ""
        },
        {
            id: "#TTB30280005",
            customerName: "CW Camilla Winters",
            customerPhotoURL: 'https://themesbrand.com/toner/html/assets/images/users/avatar-5.jpg',
            email: "camilla@toner.com",
            address: "Brazil",
            date: "05 Mar, 2021 11:00 AM",
            amount: "$875",
            paymentStatus: "REFUND",
            action: ""
        },
        {
            id: "#TTB30280006",
            customerName: "Gabrielle Holden",
            customerPhotoURL: 'https://themesbrand.com/toner/html/assets/images/users/avatar-4.jpg',
            email: "gabrielle@toner.com",
            address: "Brazil",
            date: "08 Apr, 2022 9:58 PM",
            amount: "$875",
            paymentStatus: "PAID",
            action: ""
        },
        {
            id: "#TTB30280007",
            customerName: "Kristina Hooper",
            customerPhotoURL: 'https://themesbrand.com/toner/html/assets/images/users/avatar-3.jpg',
            email: "kristina@toner.com",
            address: "Brazil",
            date: "31 Mar, 2022 9:58 PM",
            amount: "$875",
            paymentStatus: "CANCEL",
            action: ""
        },
        {
            id: "#TTB30280008",
            customerName: "Alina Holland",
            customerPhotoURL: 'https://themesbrand.com/toner/html/assets/images/users/avatar-2.jpg',
            email: "hollandalina@toner.com",
            address: "Brazil",
            date: "08 Apr, 2021 9:58 PM",
            amount: "$875",
            paymentStatus: "PAID",
            action: ""
        }
    ];


    return <>
        <div className="border rounded w-auto">
            <div className="flex justify-between py-5 px-5">
                <h1 className="font-bold">Invoice List View</h1>
                <div className="flex gap-2 items-center">
                    <span className="text-xs font-semibold">SORT BY :</span>
                    <span className="text-sm text-[#8793a6]">Today</span>
                </div>
            </div>
            <div className="overflow-x-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                <InvoicesTable invoices={invoices} />
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

const InvoicesTable = ({ invoices }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#f3f6f9]">
                <tr>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">ID</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Customer</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Email</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Address</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Date</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Amount</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Status</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                    <tr key={invoice.orderID}>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap text-blue-500 font-semibold hover:text-blue-700 cursor-pointer">{invoice.id}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap flex gap-2 items-center">
                            <div>
                                <img className="object-cover rounded-full h-6 w-6" src={invoice.customerPhotoURL} alt="" />
                            </div>
                            <span className="truncate">{invoice.customerName}</span>
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{invoice.email}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{invoice.address}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{invoice.date}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{invoice.amount}</td>
                        <td className="py-3 px-4 text-[14px] whitespace-nowrap">
                            <StatusCard text={invoice.paymentStatus} />
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                            <div className='rounded text-[11px] font-semibold items-center justify-center flex bg-[#edf4ff] text-[#5699ff] hover:bg-[#5699ff] hover:text-white ease-in-out duration-200 cursor-pointer'  >
                                <MoreHorizOutlined className='w-5' />
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
        ${text === "REFUND" ? "bg-[#e8f6fb] text-[#1ea6d3]" :
                    text === "CANCEL" ? "bg-[#fdecf0] text-[#ef476f]" :
                        text === "PAID" ? "bg-[#e6fbf5] text-[#06d6a0]" :
                            text === "UNPAID" ? "bg-[#fef8ec] text-[#f1be46]" :
                                text === "Shipping" ? "bg-[#edf4ff] text-[#5699ff]" :
                                    ""

                }
        `}>
                {text}
            </div>
        </div>
    </>
}

function ToolBox() {
    return <section className='flex flex-col gap-3 border border-[#e9ebec] p-4 rounded'>
        <div className="relative flex-1">
            <span className="absolute left-3 top-2 text-gray-500 font-bold">
                <Search className="w-5 h-5" />
            </span>
            <input
                placeholder="Search for customerName, email, status or something..."
                className="border rounded w-full pl-10 pr-4 py-2 outline-blue-400 focus:outline"
            />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="flex-1 flex flex-col text-sm">
                <input
                    placeholder='Select date'
                    type='date'
                    className="border rounded px-4 py-2.5 outline-blue-400 focus:outline" />
            </div>
            <div className="flex-1 flex flex-col">
                <select className="border rounded px-4 py-2.5 outline-blue-400 focus:outline">
                    <option value="option1">All</option>
                    <option value="option1">Cancel</option>
                    <option value="option1">Paid</option>
                    <option value="option1">Refund</option>
                    <option value="option1">Unpaid</option>
                </select>
            </div>
            <div className="flex justify-center items-center gap-2 text-white font-bold rounded px-4 py-2 bg-[#20a7d4] hover:bg-[#1a8db3] cursor-pointer">
                <span>
                    <FilterList className='w-4 h-4' />
                </span>
                Filter
            </div>
            <div className="flex gap-2 justify-center items-center text-white font-bold rounded px-4 py-2 bg-[#26d7a7] hover:bg-[#05b688] cursor-pointer">
                <span>
                    <Add className='w-4 h-4' />
                </span>
                Create Invoice
            </div>
        </div>

    </section>
}