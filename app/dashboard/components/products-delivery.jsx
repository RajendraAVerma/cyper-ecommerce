import React from 'react';

const products = [
    {
        id: 1,
        name: "Men's Running Shoes",
        image: "https://themesbrand.com/toner/html/assets/images/products/img-4.png",
        author: "Aisha Bradley",
        status: "Shipping",
    },
    {
        id: 2,
        name: "Striped Baseball Cap",
        image: "https://themesbrand.com/toner/html/assets/images/products/img-5.png",
        author: "Edgar Bailey",
        status: "Delivered",
    },
    {
        id: 3,
        name: "350 ml Glass Groce",
        image: "https://themesbrand.com/toner/html/assets/images/products/img-6.png",
        author: "Adam Small",
        status: "Out of Delivery",
    },
    {
        id: 4,
        name: "Monte Carlo Sweaters",
        image: "https://themesbrand.com/toner/html/assets/images/products/img-7.png",
        author: "Evie Merrill",
        status: "Delivered",
    },
    {
        id: 5,
        name: "Ceramic Coffee Mug",
        image: "https://themesbrand.com/toner/html/assets/images/products/img-8.png",
        author: "Keaton Larson",
        status: "Shipping",
    },
];

export default function ProductDelivery() {
    return (
        <div className='border rounded flex flex-col w-full'>
            <div className="flex justify-between py-5 px-5">
                <h1 className="font-bold">Product Delivery</h1>
                <div className="flex gap-2 items-center">
                    <span className="text-xs text-blue-500">View All {" >"}</span>
                </div>
            </div>
            <hr />
            <div className="space-y-3 p-2 overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                {products.map((product) => (
                    <CustomCard product={product} />
                ))}
            </div>
        </div>
    );
};

function CustomCard({ product }) {
    return <div className="flex items-center gap-1 p-3 border-[0.2px] border-[#e9e9e9] rounded">
        <div className="mr-2 p-2 bg-[#f3f6f9] rounded">
            <img src={product.image} alt={product.name} className="w-9 h-9" />
        </div>
        <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-[#28aad5] text-sm"><span className='text-[#0c192c]'>by : </span>{product.author}</p>
        </div>
        <div className='w-2'></div>
        <StatusCard text={product.status} />
    </div>
}


function StatusCard({ text }) {
    return <>
        <div className="flex">
            <div className={`rounded px-2 py-0.5 text-[11px] font-semibold items-center justify-center flex
        ${text === "Delivered" ? "bg-[#e6fbf5] text-[#06d6a0]" :
                    text === "Out of Delivery" ? "bg-[#fdecf0] text-[#ef5477]" :
                        text === "Shipping" ? "bg-[#fef8ec] text-[#f1be8c]" :
                            ""
                }
        `}>
                {text}
            </div>
        </div>
    </>
}