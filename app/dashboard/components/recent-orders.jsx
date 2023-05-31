export default function RecentOrders() {
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
                <h1 className="font-bold">Recent Orders</h1>
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