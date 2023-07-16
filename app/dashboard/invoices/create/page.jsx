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
    return <div className='flex flex-col md:flex-row  gap-4 justify-between border-b border-dotted p-5'>
        <div className='flex flex-col  gap-10 '>
            <img className='w-24' src="https://themesbrand.com/toner/html/assets/images/logo-dark.png" alt="" />
            <div className='text-[#888888] text-sm flex flex-col gap-2 md:w-[200px] w-full'>
                <h1 className='pb-1'>Address</h1>
                <textarea className='border w-full rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Address' type="address" />
                <input className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Enter Postal Code' type="number" />
            </div>
        </div>
        <div className='text-sm flex flex-col gap-1.5 md:w-[200px] w-full'>
            <input className='w-full border rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Legal Registration No' type="text" />
            <input className='w-full border rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Email' type="email" />
            <input className='w-full border rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Website' type="url" />
            <input className='w-full border rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Contact No.' type="tel" />
        </div>

    </div>
}

function SubHeader() {
    return <div className='grid grid-cols-1 md:grid-cols-4 gap-2 px-5 pb-5 border-dotted border-b'>
        <div className='text-[#878aa6] text-sm'>
            <h1 className='pb-2 font-bold'>Invoice No</h1>
            <input className='border w-full rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Invoice No' type="text" />
        </div>
        <div className='text-[#878aa6] text-sm'>
            <h1 className='pb-2 font-bold'>Date</h1>
            <input className='border w-full rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Date' type="datetime-local" />
        </div>
        <div className='text-[#878aa6] text-sm'>
            <h1 className='pb-2 font-bold'>Payment Status</h1>
            <select className='border rounded px-4 py-2 w-full focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Date' type="datetime-local" >
                <option value="all">All</option>
                <option value="paid">Paid</option>
                <option value="refund">Refund</option>
                <option value="unpaid">Unpaid</option>
            </select>
        </div>
        <div className='text-[#878aa6] text-sm'>
            <h1 className='pb-2 font-bold'>Total Amount</h1>
            <input className='border w-full rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Invoice No' type="number" />
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
                    <th className="py-3 px-3 text-left text-[12px] font-bold text-[#878a99]"></th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {products.map((product) => (
                    <tr className='border-b' key={product.productID}>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap font-semibold text-blue-500 hover:text-blue-700 cursor-pointer">
                            <input value={product.productID} className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Id' type="text" />
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap flex gap-1 items-center">
                            <div className='flex flex-col gap-1 w-full'>
                                <input value={product.productName} className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Name' type="text" />
                            </div>
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap]">
                            <input value={product.amount} className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Amount' type="number" />
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                            <input value={product.quantity} className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Quantity' type="number" />
                        </td>
                        <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                            <input value={(product.amount * product.quantity).toFixed(1)} className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Total' type="number" />
                        </td>
                        <td className="flex justify-end py-3 px-3 text-[14px] whitespace-nowrap">
                            <div className='hover:bg-[#cb3c5e] font-bold text-sm text-center px-3 py-2 rounded text-white ease-in-out duration-200 bg-[#f1476f] cursor-pointer'>
                                Delete
                            </div>
                        </td>
                    </tr>
                ))}
                <tr className=''>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                        <div className='hover:bg-[#7060e6] font-bold text-sm text-center px-3 py-2 rounded text-[#7060e6] hover:text-white ease-in-out duration-200 bg-[#866aff20] cursor-pointer'>
                            Add Item
                        </div>
                    </td>
                    <td colSpan="5"></td>
                </tr>
                <tr className=''>
                    <td colSpan="3"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px] font-bold">Sub Total:</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                        <input value={subTotal.toFixed(2)} className='border rounded w-full md:w-[250px] px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Sub Total' type="number" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="3"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px] font-bold">Estimated Tax (12.5%):</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                        <input value={taxAmount.toFixed(2)} className='border rounded w-full md:w-[250px] px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Estimated Tax' type="number" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="3"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px] font-bold">Shipping Charge:</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                        <input value={shippingCharge.toFixed(2)} className='border rounded w-full md:w-[250px] px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Shipping Charge' type="number" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="3"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px] font-bold">Discount (TONER42):</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap">
                        <input value={discount.toFixed(2)} className='border rounded w-full md:w-[250px] px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Discount' type="number" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="3"></td>
                    <td colSpan="2" className="py-3 px-3 text-left text-[14px] border-t font-bold">Total (USD):</td>
                    <td className="py-3 px-3 text-[14px] whitespace-nowrap border-t">
                        <input value={total.toFixed(2)} className='border rounded w-full md:w-[250px] px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Total' type="number" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

function PaymentDetails() {
    return <div className='text-[#878a99] text-sm p-5 flex flex-col gap-2'>
        <h1 className='text-[#878aa6] font-bold'>PAYMENT DETAILS</h1>
        <select className='border rounded w-full md:w-[250px] px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Card Holder Name' type="text">
            <option value="creditCard">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Netbanking</option>
        </select>
        <input className='border rounded w-full md:w-[250px] px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Card Holder Name' type="text" />
        <input className='border rounded w-full md:w-[250px] px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Card Number' type="number" />
        <input className='border rounded w-full md:w-[250px] px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Amount' type="number" />
    </div>
}

function AddressDetails() {
    return <div className='flex flex-col md:flex-row px-5 pb-5 gap-4'>
        <div className='flex-1 flex flex-col gap-2 text-sm'>
            <h1 className='font-bold text-[#878aa6] pb-1'>BILLING ADDRESS</h1>
            <textarea className='border w-full rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Address' type="address" />
            <input className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Enter Postal Code' type="number" />
            <input className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Phone Number' type="tel" />
            <input className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Tax Number' type="number" />
        </div>
        <div className='flex-1 flex flex-col gap-2 text-sm'>
            <h1 className='font-bold text-[#878aa6] pb-1'>SHIPPING ADDRESS</h1>
            <textarea className='border w-full rounded px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Address' type="address" />
            <input className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Enter Postal Code' type="number" />
            <input className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Phone Number' type="tel" />
            <input className='border rounded w-full px-4 py-2 focus:outline focus:outline-blue-500 placeholder:text-[#333333]' placeholder='Tax Number' type="number" />

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
