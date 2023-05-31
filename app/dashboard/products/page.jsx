'use client'
import StarIcon from '@mui/icons-material/Star';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
export default function ProductPage() {
    const searchParams = useSearchParams();

    const view = searchParams.get('view');
    const isGridView = view === "gridview";

    const categories = [
        {
            id: "grocery",
            name: "Grocery",
            totalProducts: 0,
        },
        {
            id: "grocery",
            name: "Fashion",
            totalProducts: 5,
        },
        {
            id: "grocery",
            name: "Watches",
            totalProducts: 0,
        },
        {
            id: "grocery",
            name: "Electronics",
            totalProducts: 5,
        },
        {
            id: "grocery",
            name: "Furniture",
            totalProducts: 6,
        },
    ];
    const colors = [
        "#06dca4",
        "#1fabd9",
        "#f3c047",
        "#f1476f",
        "#4b86ff",
        "#856aff",
        "#303a49",
        "#f4f6fa",
    ];
    const sizes = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL",
        "4XL",
    ];
    const discountList = [
        {
            title: "50% or more",
            value: 50,
        },
        {
            title: "40% or more",
            value: 40,
        },
        {
            title: "30% or more",
            value: 30,
        },
        {
            title: "20% or more",
            value: 20,
        },
        {
            title: "10% or more",
            value: 10,
        },
        {
            title: "Less than 10%",
            value: 0,
        },
    ];

    const products = [
        {
            product: "World's Most Expensive T-Shirt",
            category: "Fashion",
            rating: 4.9,
            price: 266.24,
            discountPrice: 354.99,
            stock: 12,
            orders: 4.9,
            dateAdded: "12 Oct, 2021",
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-10.png"
        },
        {
            product: "Like Style Women Black Handbag",
            category: "Fashion",
            rating: 4.2,
            price: 742.00,
            discountPrice: null,
            stock: 30,
            orders: 4.2,
            dateAdded: "06 Jan, 2021",
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-11.png"
        },
        {
            product: "Black Horn Backpack",
            category: "Grocery",
            rating: 3.8,
            price: 113.24,
            discountPrice: 150.99,
            stock: 48,
            orders: 3.8,
            dateAdded: "26 Mar, 2021",
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-12.png"
        },
        {
            product: "Innovative Education Book",
            category: "Kids",
            rating: 4.7,
            price: 96.26,
            discountPrice: null,
            stock: 40,
            orders: 4.7,
            dateAdded: "19 Apr, 2021",
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-13.png"
        },
        {
            product: "Sangria Girls Mint Green",
            category: "Kids",
            rating: 4.7,
            price: 24.07,
            discountPrice: 96.26,
            stock: 55,
            orders: 4.7,
            dateAdded: "30 Mar, 2021",
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-14.png"
        },
        {
            product: "Lace-Up Casual Shoes For Men",
            category: "Fashion",
            rating: 4.0,
            price: 229.00,
            discountPrice: null,
            stock: 48,
            orders: 4.0,
            dateAdded: "12 Oct, 2021",
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-15.png"
        },
        {
            product: "Striped High Neck Casual Men Orange Sweater",
            category: "Fashion",
            rating: 4.8,
            price: 62.40,
            discountPrice: 120.00,
            stock: 45,
            orders: 4.8,
            dateAdded: "15 May, 2021",
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-16.png"
        },
        {
            product: "Lace-Up Casual Shoes For Men",
            category: "Kids",
            rating: 2.4,
            price: 194.65,
            discountPrice: 229.00,
            stock: 48,
            orders: 2.4,
            dateAdded: "21 Jun, 2021",
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-17.png"
        },
        {
            product: "Printed, Typography Men Round Neck Black T-shirt",
            category: "Fashion",
            rating: 4.9,
            price: 81.99,
            discountPrice: null,
            stock: 55,
            orders: 4.9,
            dateAdded: "15 Jan, 2021",
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-18.png"
        },
        {
            product: "Carven Lounge Chair Red",
            category: "Furniture",
            rating: null,
            price: null,
            discountPrice: null,
            stock: null,
            orders: null,
            dateAdded: null,
            productImageLink: "https://themesbrand.com/toner/html/assets/images/products/img-19.png"
        }
    ];

    return <>
        <div className="p-4 flex flex-col">
            <div className="flex justify-between items-center py-4">
                <h1 className="font-bold">PRODUCT LIST</h1>
                <div>
                    <div className="flex gap-2 items-center text-sm">
                        <h1>Products</h1>
                        <h1>{" > "}</h1>
                        <h1 className="text-[#878a99]">Product List</h1>
                    </div>
                </div>
            </div>
            <div className="flex gap-6">
                {/* filter side bar */}
                <div className="space-y-2 basis-3/12">
                    <div className="border rounded">
                        <div className="px-5 py-4 flex justify-between items-center">
                            <h1 className="font-semibold">Filters</h1>
                            <h1 className="underline text-blue-500 text-sm cursor-pointer">Clear</h1>
                        </div>
                        <hr />
                        <div className="px-5 py-4 space-y-2">
                            <p className="text-[#878aa6] text-[13px] py-2">PRODUCTS</p>
                            {categories.map((category, key) => {
                                return <div key={category.id} className="flex justify-between">
                                    <p key={key} className="font-semibold text-sm">{category.name}</p>
                                    <div key={key + "2"} className="bg-[#f3f6f9] text-[#878a99] font-semibold px-2 py-1 rounded text-[10px]">
                                        {category.totalProducts}
                                    </div>
                                </div>
                            })}
                        </div>
                        <hr />
                        <div className="px-5 py-4">
                            <p className="text-[#878aa6] text-[13px] py-2">PRICE</p>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <input
                                        type="number"
                                        defaultValue={0}
                                        className="border rounded px-5 py-1 w-full focus:border-blue-500 focus:border-2 focus:outline-none pl-5 text-xs"
                                    />
                                    <span className="absolute text-gray-400 text-xs top-1.5 left-3">₹</span>
                                </div>
                                <p className="text-[#878a99] text-sm font-semibold">to</p>
                                <div className="relative">
                                    <input
                                        type="number"
                                        defaultValue={1000}
                                        className="border rounded px-5 py-1 w-full focus:border-blue-500 focus:border-2 focus:outline-none pl-5 text-xs"
                                    />
                                    <span className="absolute text-gray-400 text-xs top-1.5 left-3">₹</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="px-5 py-4">
                            <p className="text-[#878aa6] text-[13px] py-2">COLOURS</p>
                            <div className="grid grid-cols-4 gap-y-2">
                                {colors.map((color, key) => {
                                    return <div
                                        key={key}
                                        style={{ backgroundColor: color }}
                                        className="h-8 w-8 rounded-full hover:opacity-70 cursor-pointer"></div>
                                })}
                            </div>
                        </div>
                        <hr />
                        <div className="px-5 py-4">
                            <p className="text-[#878aa6] text-[13px] py-2">SIZES</p>
                            <div className="grid grid-cols-4 gap-y-2">
                                {sizes.map((size, key) => {
                                    return <div
                                        key={key}
                                        className="h-8 w-8 text-[11px] flex justify-center items-center text-[#4484e6] rounded-full bg-[#4484e610] hover:bg-[#4484e6] hover:text-white cursor-pointer">
                                        {size}
                                    </div>
                                })}
                            </div>
                        </div>
                        <hr />
                        <div className="px-5 py-4">
                            <p className="text-[#878aa6] text-[13px] py-2">DISCOUNT</p>
                            <div className="flex flex-col gap-3">
                                {discountList.map((discount, key) => {
                                    return <div
                                        key={key}
                                        className="flex gap-1">
                                        <input className="" type="checkbox" name="discount" id="discount" />
                                        <span className="text-sm font-roboto">{discount.title}</span>
                                    </div>
                                })}
                            </div>
                        </div>
                        <hr />
                        <div className="px-5 py-4">
                            <p className="text-[#878aa6] text-[13px] py-2">RATING</p>
                            <div className="flex flex-col gap-3">
                                {["4 & Above", "3 & Above", "2 & Above", "1"].map((rating, key) => {
                                    return <div
                                        key={key}
                                        className="flex gap-1">
                                        <input className="" type="checkbox" name="rating" id="rating" />
                                        <span className="text-sm font-roboto">{rating}</span>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* main */}
                <div className="flex flex-col flex-1 overflow-hidden">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 hover:bg-[#05b688] text-white px-3 bg-[#06cf9a] rounded py-2 cursor-pointer">
                            <h1>+</h1>
                            <h1>Add Product</h1>
                        </div>
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search Products..."
                                    className="border rounded px-12 text-sm py-2 w-full focus:border-blue-500 focus:border-2 focus:outline-none pl-10"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="absolute text-gray-400 w-4 h-4 top-3 left-3"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* table  */}
                    <div className="">
                        {!isGridView && <div className="py-6 overflow-x-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                            <ProductTable products={products} />
                        </div>}
                        {isGridView && <ProductListGridView products={products} />}
                    </div>
                </div>
            </div>
        </div>
    </>
}



const ProductTable = ({ products }) => {
    return (
        <table className="divide-y divide-gray-200 border rounded">
            <thead className="bg-[#f5f7fa]">
                <tr>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-[#0c192c] uppercase tracking-wider">
                        #
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-[#0c192c] uppercase tracking-wider">
                        Product Name
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-[#0c192c] uppercase tracking-wider">
                        Stock
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-[#0c192c] uppercase tracking-wider">
                        Rating
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-[#0c192c] uppercase tracking-wider">
                        Price
                    </th>

                    <th className="px-4 py-4 text-left text-xs font-semibold text-[#0c192c] uppercase tracking-wider">
                        Orders
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-[#0c192c] uppercase tracking-wider">
                        Date Added
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-[#0c192c] uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                    <tr key={product.product}>
                        <td className="px-4 py-4 whitespace-nowrap">
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td className="flex gap-2 px-4 py-4 whitespace-nowrap">
                            <div className="bg-[#f3f6f9] rounded p-2">
                                <img className="w-7 h-7" src={product.productImageLink} alt="" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div>
                                    <p className="text-[#0c192c] text-sm font-semibold truncate">{product.product}</p>
                                </div>
                                <p className="text-[#878a99] text-sm">Category :  {product.category}</p>
                            </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                            {product.stock}
                        </td>
                        <td className="px-4 py-4 text-xs font-semibold whitespace-nowrap">
                            <div className='flex gap-1 items-center bg-[#f3f6f9] rounded px-1 py-0.5'>
                                <StarIcon className='h-4 w-4 text-[#f1be46]' />
                                <span>{product.rating}</span>
                            </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className='flex flex-col gap-0.5'>
                                <span>₹{product.discountPrice}</span>
                                {product.discountPrice && <span className='line-through text-[#878a99]'>₹{product.price}</span>}
                            </div>
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                            {product.orders}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                            {product.dateAdded}
                        </td>
                        <td className="flex px-4 py-4 text-sm whitespace-nowrap">
                            <div className='hover:bg-[#edf4ff] p-1 rounded cursor-pointer'>
                                <MoreHorizIcon className='h-5 w-5 text-[#4c94ff]' />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const ProductListGridView = ({ products }) => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-2'>
                {products.map((product) => { return <ProductCard product={product} /> })}
            </div>
        </>
    );
}

function ProductCard({ product }) {
    return <div className='border rounded p-5'>
        <div className='relative flex bg-[#f3f6f9] rounded h-[300px]'>
            <div className='absolute w-full'>
                <div className='flex justify-between items-center p-3'>
                    <div className='flex justify-center items-center bg-[#ef476f] text-white text-[10px] rounded-full p-1 w-8 h-8'>
                        25%
                    </div>
                    <div className='flex hover:bg-[#7060e6] bg-[#7060e610] text-[#7060e6] hover:text-white p-1 rounded cursor-pointer ease-in-out duration-300'>
                        <MoreHorizIcon className='h-5 w-5 ' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <img className='object-cover hover:rotate-2 hover:scale-105 ease-in-out duration-300' src={product.productImageLink} alt="" />
            </div>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <div className='flex gap-1 items-center'>
                <div className='flex gap-2'>
                    <span className='font-bold text-[#4b93ff]'>₹{product.discountPrice}</span>
                    {product.discountPrice && <span className='line-through text-[#878a99]'>₹{product.price}</span>}
                </div>
            </div>
            <div className="text-xs font-semibold whitespace-nowrap">
                <div className='flex gap-1 items-center bg-[#f3f6f9] rounded px-1 py-0.5'>
                    <StarIcon className='h-4 w-4 text-[#f1be46]' />
                    <span>{product.rating}</span>
                </div>
            </div>
        </div>
        <Link href={"/"}>
            <div className="flex flex-col gap-1 mt-4">
                <p className="text-[#0c192c] text-sm font-semibold truncate">{product.product}</p>
                <p className="text-[#878a99] text-sm">{product.category}</p>
            </div>
        </Link>
        <div className='grid grid-cols-3 gap-1 mt-8' >
            <div className="flex-1 flex flex-col gap-0.5 justify-center items-center">
                <p className="text-[#0c192c] text-sm font-semibold truncate">{product.stock}</p>
                <p className="text-[#878a99] text-sm">Stocks</p>
            </div>
            <div className="flex-1 flex flex-col gap-0.5 justify-center items-center">
                <p className="text-[#0c192c] text-sm font-semibold truncate">{product.orders}</p>
                <p className="text-[#878a99] text-sm">Orders</p>
            </div>
            <div className="flex-1 flex flex-col gap-0.5 justify-center items-center">
                <p className="text-[#0c192c] text-sm font-semibold truncate">{product.dateAdded}</p>
                <p className="text-[#878a99] text-sm">Publish</p>
            </div>
        </div>
    </div>
}