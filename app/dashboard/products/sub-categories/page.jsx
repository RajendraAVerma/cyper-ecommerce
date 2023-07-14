'use client'

import { FormatListBulletedRounded, Search, } from "@mui/icons-material";

export default function Page() {
    return <section className="flex flex-col gap-4 px-4 py-4">
        {/* Header  */}
        <div className="flex justify-between items-center pb-4">
            <h3 className="font-bold">CREATE SUB CATEGORIES</h3>
            <h4 className="text-[#777777] text-sm">Product {" > "} Create Sub Categories</h4>
        </div>
        {/* form  */}
        <form className="grid grid-cols-1 gap-4">
            <div className="border rounded border-[#e9ebec]">
                <div className="flex gap-4 text-[#222222] font-bold p-5 border-[#e9ebec] border-b">
                    <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f3f6f9]">
                        <FormatListBulletedRounded className="h-7 w-7 font-medium text-[#4b93fe]" />
                    </div>
                    <div>
                        <h1 className="font-bold">Create Sub-Category</h1>
                        <h1 className="font-medium text-sm text-[#878a99]">Fill all information below.</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-5 p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1 flex flex-col gap-4">
                            <div className="flex flex-col text-sm">
                                <label className="font-semibold pb-2" htmlFor="category">Sub-Category Title<span className="text-red-500"> *</span></label>
                                <input
                                    placeholder="Enter title"
                                    className="border rounded px-4 py-2 outline-blue-400 focus:outline" />
                            </div>
                            <div className="flex flex-col text-sm">
                                <label className="font-semibold pb-2" htmlFor="category">Description</label>
                                <textarea
                                    placeholder="Enter Description"
                                    className="border rounded px-4 py-2 outline-blue-400 focus:outline" required />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-4">
                            <div className="flex flex-col text-sm">
                                <label className="font-semibold pb-2" htmlFor="category">Category <span className="text-red-500"> *</span></label>
                                <div className="flex-1 flex flex-col">
                                    <select className="border rounded px-4 py-2.5 outline-blue-400 focus:outline">
                                        <option value="option1">Furniture</option>
                                        <option value="option1">Footware</option>
                                        <option value="option1">Cloths</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div></div>
                        <div className="hover:bg-[#05b688] bg-[#06d6a0] font-bold rounded-md px-6 py-3 text-white ease-in-out duration-300 transition-all">
                            Create Sub-Category
                        </div>
                    </div>
                </div>
            </div>

        </form>
        <CategoriesList />
    </section>
}


function CategoriesList() {
    const categoryList = [
        {
            id: 'other_accessories',
            name: 'Other Accessories',
            description: 'For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.',
            imageLink: 'https://themesbrand.com/toner/html/assets/images/ecommerce/smart-watch.png',
            subCategoryList: [
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
            ]
        },
        {
            id: 'books',
            name: 'Books',
            description: 'For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.',
            imageLink: 'https://themesbrand.com/toner/html/assets/images/ecommerce/book.png',
            subCategoryList: [
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
            ]
        },
        {
            id: 'other_accessories',
            name: 'Other Accessories',
            description: 'For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.',
            imageLink: 'https://themesbrand.com/toner/html/assets/images/ecommerce/smart-watch.png',
            subCategoryList: [
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
            ]
        },
        {
            id: 'books',
            name: 'Books',
            description: 'For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.',
            imageLink: 'https://themesbrand.com/toner/html/assets/images/ecommerce/book.png',
            subCategoryList: [
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
            ]
        },
        {
            id: 'other_accessories',
            name: 'Other Accessories',
            description: 'For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.',
            imageLink: 'https://themesbrand.com/toner/html/assets/images/ecommerce/smart-watch.png',
            subCategoryList: [
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
            ]
        },
        {
            id: 'books',
            name: 'Books',
            description: 'For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.',
            imageLink: 'https://themesbrand.com/toner/html/assets/images/ecommerce/book.png',
            subCategoryList: [
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
            ]
        },
        {
            id: 'other_accessories',
            name: 'Other Accessories',
            description: 'For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.',
            imageLink: 'https://themesbrand.com/toner/html/assets/images/ecommerce/smart-watch.png',
            subCategoryList: [
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
            ]
        },
        {
            id: 'books',
            name: 'Books',
            description: 'For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.',
            imageLink: 'https://themesbrand.com/toner/html/assets/images/ecommerce/book.png',
            subCategoryList: [
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
                {
                    id: 'bags',
                    name: 'Bags',
                    description: 'This is description',
                },
            ]
        },

    ]
    return <section className="flex flex-col gap-4">
        <div className="flex gap-5">
            <div className="relative flex-1">
                <span className="absolute left-3 top-2 text-gray-500 font-bold">
                    <Search className="w-5 h-5" />
                </span>
                <input
                    placeholder="Search Categories"
                    className="border rounded w-full pl-10 pr-4 py-2 outline-blue-400 focus:outline"
                />
            </div>
            <div className="flex-1 flex flex-col">
                <select className="border rounded px-4 py-2.5 outline-blue-400 focus:outline">
                    <option value="option1">Furniture</option>
                    <option value="option1">Footware</option>
                    <option value="option1">Cloths</option>
                </select>
            </div>
        </div>
        <table className="w-full mt-4 border rounded border-[#e9ebec]">
            <thead>
                <tr className="bg-[#f5f7fa] text-sm hover:bg-[#e9ebec] text-left">
                    <th className="py-3 px-4 border-b border-[#e9ebec]">Subcategory</th>
                    <th className="py-3 px-4 border-b border-[#f5e9ebecf7fa]">Category</th>
                    <th className="py-3 px-4 border-b border-[#e9ebec]">CreateBy</th>
                    <th className="py-3 px-4 border-b border-[#e9ebec]">Action</th>
                </tr>
            </thead>
            <tbody>
                {categoryList.map((category, index) => (
                    <tr key={index} className="bg-white hover:bg-[#f5f7fa]">
                        <td className="py-2 px-4 text-sm border-b border-[#e9ebec]">{category.name}</td>
                        <td className="py-2 px-4 text-sm border-b border-[#e9ebec]">{category.name}</td>
                        <td className="py-2 px-4 text-sm border-b border-[#e9ebec]">Created By</td>
                        <td className="py-2 px-4 text-sm border-b border-[#e9ebec]">
                            <div className="flex gap-2">
                                <div className="bg-[#e8f6fb] text-[12px] font-bold text-[#1ea6d3] rounded px-2 py-0.5 cursor-pointer">
                                    Edit
                                </div>
                                <div className="bg-[#fdecf0] text-[12px] font-bold text-[#f1476f] rounded px-2 py-0.5 cursor-pointer">
                                    Delete
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
}
