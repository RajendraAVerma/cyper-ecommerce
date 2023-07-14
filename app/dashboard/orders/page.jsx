'use client'

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import { AnchorOutlined, AutorenewOutlined, DeleteOutlineRounded, Filter, FilterList, LocalShippingOutlined, Search, SortOutlined } from '@mui/icons-material';

export default function Page() {
    return <main className='p-5 flex flex-col gap-5'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <CustomCard
                heading={'NEW ORDERS'}
                value={"200.32k"}
                colorCode={"#4b93ff"}
                icon={<AnchorOutlined className='w-5' />}
            />
            <CustomCard
                heading={'PENDING ORDERS'}
                value={"35.21k"}
                colorCode={"#f1be46"}
                icon={<AutorenewOutlined className='w-5' />}
            />
            <CustomCard
                heading={'DELIVERED ORDERS'}
                value={"647.27k"}
                colorCode={"#3ad8a5"}
                icon={<LocalShippingOutlined className='w-5' />}
            />
            <CustomCard
                heading={'PICKED ORDERS'}
                value={"215.36k"}
                colorCode={"#7c6bff"}
                icon={<DiamondOutlinedIcon className='w-5' />}
            />
            <CustomCard
                heading={'CANCELLED ORDERS'}
                value={"8,649"}
                colorCode={"#ef476f"}
                icon={<DeleteOutlineRounded className='w-5' />}
            />
        </div>
        <ToolBox />
        <RecentOrders />
    </main>
}

function CustomCard({ heading, value, icon, colorCode }) {
    return <>
        <div className="flex justify-start border rounded p-4 gap-4 hover:shadow-lg hover:ease-in-out hover:-translate-y-1 hover:duration-300">
            <div className=''>
                <div
                    style={{ color: `${colorCode}`, backgroundColor: `${colorCode}30`, }}
                    className={`p-3 rounded`}>
                    {icon}
                </div>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-[21px]">{value}</p>
                <p className="text-[#878a99] font-semibold text-[13px]">{heading}</p>
            </div>
        </div>
    </>
}



function RecentOrders() {
    const orders = [
        {
            orderID: "#TB010331",
            productName: "Macbook Pro",
            customerName: "Terry White",
            customerPhotoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-2.jpg",
            amount: "$658.00",
            orderDate: "17 Dec, 2022",
            deliveryDate: "26 Jan, 2023",
            vendor: "Brazil",
            ratings: 4.5,
            status: "New"
        },
        {
            orderID: "#TB010332",
            productName: "Borosil Paper Cup",
            customerName: "Daniel Gonzalez",
            customerPhotoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-1.jpg",
            amount: "$345.00",
            orderDate: "02 Jan, 2023",
            deliveryDate: "26 Jan, 2023",
            vendor: "Namibia",
            ratings: 4.8,
            status: "Out Of Delivery"
        },
        {
            orderID: "#TB010333",
            productName: "Stillbird Helmet",
            customerName: "Stephen Bird",
            customerPhotoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-3.jpg",
            amount: "$80.00",
            orderDate: "20 Dec, 2022",
            deliveryDate: "29 Dec, 2022",
            vendor: "USA",
            ratings: 4.3,
            status: "Delivered"
        },
        {
            orderID: "#TB010334",
            productName: "Bentwood Chair",
            customerName: "Ashley Silva",
            customerPhotoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-4.jpg",
            amount: "$349.99",
            orderDate: "31 Nov, 2022",
            deliveryDate: "13 Dec, 2022",
            vendor: "Argentina",
            ratings: 3.9,
            status: "Pending"
        },
        {
            orderID: "#TB010335",
            productName: "Apple Headphone",
            customerName: "Scott Wilson",
            customerPhotoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-5.jpg",
            amount: "$264.37",
            orderDate: "23 Nov, 2022",
            deliveryDate: "03 Dec, 2022",
            vendor: "Jersey",
            ratings: 4.7,
            status: "Shipping"
        },
        {
            orderID: "#TB010336",
            productName: "Smart Watch for Man's",
            customerName: "Heather Jimenez",
            customerPhotoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-6.jpg",
            amount: "$741.98",
            orderDate: "02 Nov, 2022",
            deliveryDate: "12 Nov, 2022",
            vendor: "Spain",
            ratings: 4.4,
            status: "Delivered"
        }
    ];

    return <>
        <div className="border rounded w-auto">
            <div className="flex justify-between py-5 px-5">
                <h1 className="font-bold">Orders List View</h1>
                <div className="flex gap-2 items-center">
                    <span className="text-xs font-semibold">SORT BY :</span>
                    <span className="text-sm text-[#8793a6]">Today</span>
                </div>
            </div>
            <div className="overflow-x-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                <OrderTable orders={orders} />
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

const OrderTable = ({ orders }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#f3f6f9]">
                <tr>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Order ID</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Product Name</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Customer Name</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Amount</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Order Date</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Delivery Date</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Vendor</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Ratings</th>
                    <th className="py-3 px-3 text-left text-[11px] font-bold text-[#878a99] uppercase tracking-wider">Status</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                    <tr key={order.orderID}>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap text-blue-500 font-semibold hover:text-blue-700 cursor-pointer">{order.orderID}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{order.productName}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap flex gap-2 items-center">
                            <div>
                                <img className="object-cover rounded-full h-6 w-6" src={order.customerPhotoURL} alt="" />
                            </div>
                            <span className="truncate">{order.customerName}</span>
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{order.amount}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{order.orderDate}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{order.deliveryDate}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{order.vendor}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                            <div className="flex items-center gap-1">
                                <span className="text-gray-500">{order.ratings}</span>
                                {Array.from({ length: 1 }, (_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 fill-current text-yellow-400"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2l2.185 6.715h7.079l-5.717 4.155L16.669 22 12 17.13l-4.669 4.025 1.122-8.43L2.737 8.715h7.079L12 2zm0 2.554L9.615 9.258 3.29 9.914l5.468 4.109-1.558 8.153L12 17.95l6.8 4.227-1.558-8.153 5.468-4.109-6.325-.656L12 4.554zm0 1.745L14.07 9.32l6.358-.654-4.74 3.461 1.5 7.843-5.187-3.23-5.187 3.23 1.5-7.843-4.74-3.461 6.358.654L12 6.299z"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </td>
                        <td className="py-3 px-4 text-[14px] whitespace-nowrap">
                            <StatusCard text={order.status} />
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
        ${text === "New" ? "bg-[#e8f6fb] text-[#1ea6d3]" :
                    text === "Out Of Delivery" ? "bg-[#fdecf0] text-[#ef476f]" :
                        text === "Delivered" ? "bg-[#e6fbf5] text-[#06d6a0]" :
                            text === "Pending" ? "bg-[#fef8ec] text-[#f1be46]" :
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
    return <section className='border border-[#e9ebec] p-4 rounded'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative flex-1">
                <span className="absolute left-3 top-2 text-gray-500 font-bold">
                    <Search className="w-5 h-5" />
                </span>
                <input
                    placeholder="Search for order Id, customer, order status or something ..."
                    className="border rounded w-full pl-10 pr-4 py-2 outline-blue-400 focus:outline"
                />
            </div>
            <div className="flex-1 flex flex-col">
                <input
                    placeholder='Select date'
                    type='date'
                    className="border rounded px-4 py-2.5 outline-blue-400 focus:outline" />
            </div>
            <div className="flex-1 flex flex-col">
                <select className="border rounded px-4 py-2.5 outline-blue-400 focus:outline">
                    <option value="option1">All</option>
                    <option value="option1">Cancelled</option>
                    <option value="option1">Delevered</option>
                    <option value="option1">Inprogress</option>
                    <option value="option1">Pending</option>
                    <option value="option1">Pickups</option>
                    <option value="option1">Return</option>
                </select>
            </div>
            <div className="flex-1 flex flex-col">
                <select className="border rounded px-4 py-2.5 outline-blue-400 focus:outline">
                    <option value="option1">All</option>
                    <option value="option1">Debit Card</option>
                    <option value="option1">Credit Card</option>
                    <option value="option1">UPI</option>
                    <option value="option1">Cash on delivery</option>
                    <option value="option1">Other</option>
                </select>
            </div>
            <div className="flex justify-center items-center gap-2 text-white font-bold rounded px-4 py-2 bg-[#4b86e0] hover:bg-[#407dd9] cursor-pointer">
                <span>
                    <FilterList className='w-4 h-4' />
                </span>
                Filter
            </div>
            <div className="flex justify-center items-center text-white font-bold rounded px-4 py-2 bg-[#3de7ba] hover:bg-[#05b688] cursor-pointer">
                Add Order
            </div>
        </div>

    </section>
}