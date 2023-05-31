import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
export default function StockReport() {
    const products = [
        {
            productID: "#00541",
            productName: "Rockerz Ear Bluetooth Headphones",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-1.png",
            updatedDate: "16 Aug, 2022",
            amount: "$658.00",
            stockStatus: "In Stock",
            quantity: "15 PCS"
        },
        {
            productID: "#07484",
            productName: "United Colors Of Benetton",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-2.png",
            updatedDate: "05 Sep, 2022",
            amount: "$145.00",
            stockStatus: "Low Stock",
            quantity: "05 PCS"
        },
        {
            productID: "#01641",
            productName: "Striped Baseball Cap",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-3.png",
            updatedDate: "28 Sep, 2022",
            amount: "$215.00",
            stockStatus: "Out of Stock",
            quantity: "0 PCS"
        },
        {
            productID: "#00065",
            productName: "350 ml Glass Grocery Container",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-4.png",
            updatedDate: "02 Oct, 2022",
            amount: "$79.99",
            stockStatus: "In Stock",
            quantity: "37 PCS"
        },
        {
            productID: "#00156",
            productName: "One Seater Sofa",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-5.png",
            updatedDate: "11 Oct, 2022",
            amount: "$264.99",
            stockStatus: "In Stock",
            quantity: "23 PCS"
        },
        {
            productID: "#09102",
            productName: "Men's Running Shoes Active Grip",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-6.png",
            updatedDate: "19 Nov, 2022",
            amount: "$264.99",
            stockStatus: "Low Stock",
            quantity: "23 PCS"
        }
    ];

    return (
        <div className="border rounded w-auto">
            <div className="flex justify-between py-5 px-5">
                <h1 className="font-bold">Stock Report</h1>
                <div className="flex gap-2 items-center">
                    <div className="flex font-semibold text-xs ease-in-out duration-300 justify-center items-center gap-2 rounded bg-[#1b95be20] text-[#1b95be] hover:text-white hover:bg-[#1b95be] px-2 py-1 cursor-pointer">
                        <ReceiptLongIcon className='h-4 w-4' />
                        <h1>Generate Report</h1>
                    </div>
                </div>
            </div>
            <div className="overflow-x-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                <StockTable products={products} />
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
    );
}

const StockTable = ({ products }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#f3f6f9]">
                <tr>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Product ID</th>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Product Name</th>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Updated Date</th>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Amount</th>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Stock Status</th>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Quantity</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                    <tr key={product.productID}>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap font-semibold text-blue-500 hover:text-blue-700 cursor-pointer">{product.productID}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap flex gap-1 items-center">
                            <div>
                                <img className="object-cover rounded-full h-6 w-6" src={product.productImageURL} alt="" />
                            </div>
                            <span className="truncate">{product.productName}</span>
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{product.updatedDate}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap text-[#7c6bff]">{product.amount}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                            <StatusCard text={product.stockStatus} />
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{product.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}



function StatusCard({ text }) {
    return <>
        <div className="flex">
            <div className={`rounded px-2 py-0.5 text-[11px] font-semibold items-center justify-center flex
        ${text === "In Stock" ? "bg-[#e6fbf5] text-[#06d6a0]" :
                    text === "Out of Stock" ? "bg-[#fdecf0] text-[#ef5477]" :
                        text === "Low Stock" ? "bg-[#fef8ec] text-[#f1be8c]" :
                            ""

                }
        `}>
                {text}
            </div>
        </div>
    </>
}