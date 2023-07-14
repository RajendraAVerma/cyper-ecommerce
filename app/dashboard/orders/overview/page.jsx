'use client'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { AccountCircleOutlined, ArticleOutlined, Cancel, Done, Download, LocalShippingOutlined, LocalTaxi, LocationCity, LocationOn, LocationOnOutlined, Person2Rounded } from "@mui/icons-material"
export default function Page() {
    return <section className="p-5 flex flex-col gap-4">
        <Header />
        <InformationCards />
        <ProductsList />
        <LogisticsDetails />
        <PaymentDetails />
        <OrderStatus />
    </section>

}

function Header() {
    return <div className="flex flex-col gap-6">
        <div className="flex justify-between">
            <h1 className="font-bold text-sm">OVERVIEW</h1>
            <h1 className="font-bold text-sm text-[#878a99]">Orders {" > "} Overview</h1>
        </div>
        <div className="flex justify-between">
            <h1 className="font-bold text-lg">Order Id: #22820</h1>
            <div className="flex text-white px-4 py-1 gap-3 bg-violet-600 hover:bg-violet-800 rounded">
                <span>
                    <Download className="h-5 w-5" />
                    Invoice
                </span>
            </div>
        </div>
    </div>
}

function InformationCards() {
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomCard
            title={'Customer Info'}
            phoneNumber={'+91 91065746576'}
            subTitle={'Gabriele'}
            email={'gabrielle@toner.com'}
            colorCode={"#06d6a0"}
            icon={<AccountCircleOutlined className='w-5' />}
        />
        <CustomCard
            title={'Shipping Address'}
            phoneNumber={'+91 91065746576'}
            subTitle={'Block A, House 124, Floor 2'}
            colorCode={"#4b93ff"}
            icon={<LocationOnOutlined className='w-5' />}
        />
        <CustomCard
            title={'Billing Address'}
            phoneNumber={'+91 91065746576'}
            subTitle={'Block A, House 124, Floor 2'}
            colorCode={"#4b93ff"}
            icon={<ArticleOutlined className='w-5' />}
        />
    </div>
}

function CustomCard({ title, subTitle, email, icon, colorCode, phoneNumber }) {
    return <div
        style={{ backgroundColor: `${colorCode}19`, }}
        className="flex justify-start rounded p-4 gap-4">
        <div className="flex-1 flex flex-col">
            <p className="text-[#222222] font-semibold text-[17px] pb-3">{title}</p>
            <p className="text-[#666666] text-[14px]">{subTitle}</p>
            {email && <p className="text-[#666666] text-[14px]">{email}</p>}
            <p className="text-[#666666] text-[14px]">{phoneNumber}</p>
        </div>
        <div className=''>
            <div
                style={{ color: `${colorCode}`, backgroundColor: `${colorCode}30`, }}
                className={`p-3 rounded`}>
                {icon}
            </div>
        </div>
    </div>
}

function ProductsList() {
    const products = [
        {
            productID: "#00541",
            productName: "Rockerz Ear Bluetooth Headphones",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-1.png",
            updatedDate: "16 Aug, 2022",
            amount: 658.00,
            stockStatus: "In Stock",
            quantity: 15
        },
        {
            productID: "#07484",
            productName: "United Colors Of Benetton",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-2.png",
            updatedDate: "05 Sep, 2022",
            amount: 145.00,
            stockStatus: "Low Stock",
            quantity: 5
        },
        {
            productID: "#01641",
            productName: "Striped Baseball Cap",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-3.png",
            updatedDate: "28 Sep, 2022",
            amount: 215.00,
            stockStatus: "Out of Stock",
            quantity: 1
        },
        {
            productID: "#00065",
            productName: "350 ml Glass Grocery Container",
            productImageURL: "https://themesbrand.com/toner/html/assets/images/products/img-4.png",
            updatedDate: "02 Oct, 2022",
            amount: 79.99,
            stockStatus: "In Stock",
            quantity: 37
        },
    ];

    return <div>
        <div className="border rounded w-auto">
            <div className="flex justify-between py-5 px-5">
                <h1 className="font-bold">Products</h1>
                <div className="flex gap-2 items-center">
                    <div className="flex font-semibold text-xs ease-in-out duration-300 justify-center items-center gap-2 rounded bg-[#1b95be20] text-[#1b95be] hover:text-white hover:bg-[#1b95be] px-2 py-1 cursor-pointer">
                        <ReceiptLongIcon className='h-4 w-4' />
                        <h1>Generate Report</h1>
                    </div>
                </div>
            </div>
            <div className="overflow-x-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                <ProductTable products={products} />
            </div>
            <hr />
        </div>
    </div>
}
const ProductTable = ({ products }) => {
    // Calculate the sub total
    const subTotal = products.reduce(
        (accumulator, product) => accumulator + product.amount * product.quantity,
        0
    );

    // Calculate the tax amount
    const taxAmount = subTotal * 0.125;

    // Define the shipping charge, discount, and total
    const shippingCharge = 65;
    const discount = 97;
    const total = subTotal + taxAmount + shippingCharge - discount;

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#f3f6f9]">
                <tr>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Product ID</th>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Product Name</th>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Amount</th>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Quantity</th>
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]">Total</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {products.map((product) => (
                    <tr className='border-b' key={product.productID}>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap font-semibold text-blue-500 hover:text-blue-700 cursor-pointer">{product.productID}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap flex gap-1 items-center">
                            <div>
                                <img className="object-cover rounded-full h-6 w-6" src={product.productImageURL} alt="" />
                            </div>
                            <span className="truncate">{product.productName}</span>
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap]">₹ {product.amount}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">{product.quantity}</td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">₹ {(product.amount * product.quantity).toFixed(1)}</td>
                    </tr>
                ))}
                <tr>
                    <td colSpan="2"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px]">Sub Total:</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap ">₹ {subTotal.toFixed(2)}</td>
                </tr>
                <tr>
                    <td colSpan="2"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px]">Estimated Tax (12.5%):</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap">₹ {taxAmount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td colSpan="2"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px]">Shipping Charge:</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap">₹ {shippingCharge.toFixed(2)}</td>
                </tr>
                <tr>
                    <td colSpan="2"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px]">Discount (TONER42):</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap">₹ {discount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td colSpan="2"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px] border-t font-bold">Total (USD):</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap border-t font-bold">₹ {total.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    );
};




function LogisticsDetails() {
    return <div className="border rounded w-auto">
        <div className="flex justify-between py-5 px-5">
            <h1 className="font-bold">Logistics Details</h1>
            <div className="flex gap-2 items-center">
                <div className="flex font-semibold text-xs ease-in-out duration-300 justify-center items-center gap-2 rounded bg-[#1b95be20] text-[#1b95be] hover:text-white hover:bg-[#1b95be] px-2 py-1 cursor-pointer">
                    <LocalShippingOutlined className='h-4 w-4' />
                    <h1>Track Order</h1>
                </div>
            </div>
        </div>
        <hr />
        <div className='py-5 px-5'>
            <div className='flex flex-col gap-0.5 justify-center items-center'>
                <LocalShippingOutlined className='h-14 w-14' />
                <h1 className='font-bold'>Toner Logistics</h1>
                <h1 className='text-[#555555] text-sm'>ID: MFDS2343243434</h1>
                <h1 className='text-[#555555] text-sm'>Payment Mode : Debit Card</h1>
            </div>
        </div>
    </div>
}

function PaymentDetails() {
    return <div className="border rounded w-auto">
        <div className="flex justify-between py-5 px-5">
            <h1 className="font-bold">Payment Details : </h1>
        </div>
        <hr />
        <div className='py-5 px-5'>
            <div className='grid grid-cols-2'>
                <h1 className='text-[#555555] text-sm'>Transaction: </h1>
                <h1 className='text-[#555555] text-sm'>#VLZ124561278124</h1>

                <h1 className='text-[#555555] text-sm'>Payment Method: </h1>
                <h1 className='text-[#555555] text-sm'>Debit Card</h1>

                <h1 className='text-[#555555] text-sm'>Card Number: </h1>
                <h1 className='text-[#555555] text-sm'>XXXX XXX XXXX 2032</h1>

                <h1 className='text-[#555555] text-sm'>Card Holder Name: </h1>
                <h1 className='text-[#555555] text-sm'>Daniel Gonzalez</h1>

                <h1 className='text-[#555555] text-sm'>Total Amount: </h1>
                <h1 className='text-[#555555] text-sm'>₹ 4524</h1>
            </div>
        </div>
    </div>
}

function OrderStatus() {
    const orderStatus = [
        {
            index: 1,
            name: 'Order Process',
            date: "Mon, 24 Dec, 2022",
            isComplete: true,
        },
        {
            index: 2,
            name: 'Packed',
            date: "Mon, 28 Dec, 2022",
            isComplete: true,
        },
        {
            index: 3,
            name: 'Order Shipped',
            date: "Mon, 02 Jan, 2022",
            isComplete: true,
        },
        {
            index: 4,
            name: 'Out Of Delivery',
            date: "Mon, 10 Jan, 2023",
            isComplete: false,
        },
        {
            index: 5,
            name: 'Delivered',
            date: "Mon, 16 Jan, 2023",
            isComplete: false,
        },
    ]
    return <div className="border rounded w-auto">
        <div className="flex justify-between py-5 px-5">
            <h1 className="font-bold">Order Status</h1>
            <div className="flex gap-2 items-center">
                <div className="flex font-semibold text-xs ease-in-out duration-300 justify-center items-center gap-2 rounded bg-[#1b95be20] text-[#1b95be] hover:text-white hover:bg-[#1b95be] px-2 py-1 cursor-pointer">
                    <LocationOn className='h-4 w-4' />
                    <h1>Change Address</h1>
                </div>
                <div className="flex font-semibold text-xs ease-in-out duration-300 justify-center items-center gap-2 rounded bg-[#d7406420] text-[#d74064] hover:text-white hover:bg-[#d74064] px-2 py-1 cursor-pointer">
                    <Cancel className='h-4 w-4' />
                    <h1>Cancel Order</h1>
                </div>
            </div>
        </div>
        <hr />
        <div className='py-5 px-5 flex flex-wrap gap-5 justify-center' >
            {/* Create Status UI  */}
            {orderStatus.map((status) => (
                <div key={status.index} className="flex items-center mb-4">
                    <div className={`flex-shrink-0 rounded-full w-8 h-8 flex justify-center items-center ${status.isComplete ? 'bg-[#10b981]' : 'bg-gray-200'}`}>
                        <Done className={`w-6 h-6 ${status.isComplete ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <div className={`ml-3 ${status.isComplete ? 'text-[#10b981]' : 'text-gray-400'}`}>
                        <h1 className="text-sm font-semibold">{status.name}</h1>
                        <p className="text-xs">{status.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}