'use client'
import { Download, PrintOutlined } from '@mui/icons-material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function Page() {
    return <section className='p-4'>
        <div className='flex justify-between pb-5'>
            <h1 className='font-bold'>INVOICE DETAILS</h1>
            <h2 className='text-sm'>
                <span className='text-[#666666]'>Invoices {" > "}</span>
                Invoice Details
            </h2>
        </div>
        <div className="flex flex-col gap-6 border rounded">
            <Header />
            <SubHeader />
            <AddressDetails />
            <ProductsList />
            <PaymentDetails />
            <NoticeInformation />
            <ButtonsRow />

        </div>
    </section>
}

function Header() {
    return <div className='flex justify-between border-b border-dotted p-5'>
        <div className='flex flex-col  gap-10'>
            <img className='w-24' src="https://themesbrand.com/toner/html/assets/images/logo-dark.png" alt="" />
            <div className='text-[#888888] text-sm'>
                <h1 className='pb-2 font-bold'>ADDRESS</h1>
                <h1>California, United States</h1>
                <h1>Zip-code: 90201</h1>
            </div>
        </div>
        <div className='text-sm flex flex-col gap-1.5'>
            <p className='font-bold'><span className='text-[#888888] font-medium'>Legal Registration No:</span> 987654</p>
            <p className='font-bold'><span className='text-[#888888] font-medium'>Email:</span> toner@themesbrand.com</p>
            <p className='font-bold bg:text-[#3567c4] text-[#407dd9]'><span className='text-[#888888] font-medium'>Website:</span>www.themesbrand.com</p>
            <p className='font-bold'><span className='text-[#888888] font-medium'>Contanct No:</span>+(314) 234 689</p>
        </div>

    </div>
}

function SubHeader() {
    return <div className='grid grid-cols-2 md:grid-cols-4 gap-2 px-5 pb-5 border-dotted border-b'>
        <div className='text-[#878aa6] text-sm'>
            <h1 className='pb-2 font-bold'>INVOICE NO</h1>
            <h1 className='font-bold text-[#222222]'># TTB30280001</h1>
        </div>
        <div className='text-[#878aa6] text-sm'>
            <h1 className='pb-2 font-bold'>DATE</h1>
            <h1 className='font-bold text-[#222222]'>14 Jan, 2023 12:22PM</h1>
        </div>
        <div className='text-[#878aa6] text-sm'>
            <h1 className='pb-2 font-bold'>PAYMENT STATUS</h1>
            <StatusCard text={'PAID'} />
        </div>
        <div className='text-[#878aa6] text-sm'>
            <h1 className='pb-2 font-bold'>TOTAL AMOUNT</h1>
            <h1 className='font-bold text-[#222222]'>$1406.92</h1>
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
        <div className="rounded w-auto  p-5">
            <div className="overflow-x-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                <ProductTable products={products} />
            </div>
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
        <table className="min-w-full">
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

function PaymentDetails() {
    return <div className='text-[#878a99] text-sm p-5'>
        <h1 className='text-[#878aa6] font-bold'>PAYMENT DETAILS</h1>
        <p>Payment Methods : Mastercard</p>
        <p>Card Holder: David Nichols</p>
        <p>Card Number: xxxx xxxx xxxx 1234</p>
    </div>
}

function AddressDetails() {
    return <div className='flex px-5 pb-5'>
        <div className='flex-1'>
            <h1 className='font-bold text-[#878aa6] pb-1'>BILLING ADDRESS</h1>
            <h1 className='font-bold text-[#222222] pb-1'>Edward Diana</h1>
            <p className='text-[#878aa6] text-sm' >4430 Holt Street, Miami, Florida-33169</p>
            <p className='text-[#878aa6] text-sm' >Phone: +(123) 561-238-1000</p>
            <p className='text-[#878aa6] text-sm' >Tax: 65-498700</p>
        </div>
        <div className='flex-1'>
            <h1 className='font-bold text-[#878aa6] pb-1'>SHIPPING ADDRESS</h1>
            <h1 className='font-bold text-[#222222] pb-1'>Edward Diana</h1>
            <p className='text-[#878aa6] text-sm' >4430 Holt Street, Miami, Florida-33169</p>
            <p className='text-[#878aa6] text-sm' >Phone: +(123) 561-238-1000</p>
        </div>
    </div>
}

function NoticeInformation() {
    return <div className='mx-5 border p-5 rounded border-[#a5dbed] bg-[#d2edf6] text-[#12647f] text-sm px-4 py-3'>
        <p> <span className='font-bold'>NOTES: </span> All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</p>
    </div>
}

function ButtonsRow() {
    return <div className='flex justify-end gap-3 p-5'>
        <div className='flex gap-2 hover:bg-[#05b688] bg-[#06dca4] text-white rounded py-2 px-4'>
            <span>
                <PrintOutlined className='w-4' />
            </span>
            Print
        </div>
        <div className='flex gap-2 hover:bg-[#407dd9] bg-[#4b86ff] text-white rounded py-2 px-4'>
            <span>
                <Download className='w-4' />
            </span>
            Download
        </div>
    </div>
}

function StatusCard({ text }) {
    return <>
        <div className="flex">
            <div className={`rounded px-2 py-0.5 text-[10px] font-semibold items-center justify-center flex
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
