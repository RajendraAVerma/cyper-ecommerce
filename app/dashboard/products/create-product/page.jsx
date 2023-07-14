'use client'

import { CardGiftcard, CloudUploadRounded, Filter, FormatListBulletedRounded, Image, ListAlt } from "@mui/icons-material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function Page() {
    return <section className="px-4 py-4">
        {/* Header  */}
        <div className="flex justify-between items-center pb-4">
            <h3 className="font-bold">CREATE PRODUCT</h3>
            <h4 className="text-[#777777] text-sm">Product {" > "} Create product</h4>
        </div>
        {/* form  */}
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-3 flex flex-col gap-5">
                <div className="border rounded border-[#e9ebec]">
                    <div className="flex gap-4 text-[#222222] font-bold p-5 border-[#e9ebec] border-b">
                        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f3f6f9]">
                            <CardGiftcard className="h-7 w-7 font-medium text-[#4b93fe]" />

                        </div>
                        <div>
                            <h1 className="font-bold">Product Information</h1>
                            <h1 className="font-medium text-sm text-[#878a99]">Fill all information below.</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col text-sm">
                            <label className="font-semibold pb-2" htmlFor="category">Product title</label>
                            <input
                                placeholder="Enter product title"
                                className="border rounded px-4 py-2 outline-blue-400 focus:outline" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col text-sm">
                            <label className="font-semibold pb-2" htmlFor="category">Product description</label>
                            <RTE />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col text-sm">
                            <label className="font-semibold pb-2" htmlFor="category">Product category</label>
                            <select className="border rounded px-4 py-2 outline-blue-400 focus:outline">
                                <option value="option1">Furniture</option>
                                <option value="option1">Footware</option>
                                <option value="option1">Cloths</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="border rounded border-[#e9ebec]">
                    <div className="flex gap-4 text-[#222222] font-bold p-5 border-[#e9ebec] border-b">
                        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f3f6f9]">
                            <Filter className="h-7 w-7 font-medium text-[#4b93fe]" />
                        </div>
                        <div>
                            <h1 className="font-bold">Product Gallery</h1>
                            <h1 className="font-medium text-sm text-[#878a99]">Add product gallery images.</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col text-sm">
                            <ProductGalleryDropBox />
                        </div>
                    </div>
                </div>
                <div className="border rounded border-[#e9ebec]">
                    <div className="flex gap-4 text-[#222222] font-bold p-5 border-[#e9ebec] border-b">
                        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f3f6f9]">
                            <FormatListBulletedRounded className="h-7 w-7 font-medium text-[#4b93fe]" />
                        </div>
                        <div>
                            <h1 className="font-bold">General Information</h1>
                            <h1 className="font-medium text-sm text-[#878a99]">Fill all information below.</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1 flex flex-col gap-4">
                                <div className="flex flex-col text-sm">
                                    <label className="font-semibold pb-2" htmlFor="category">Manufacturer Name</label>
                                    <input
                                        placeholder="Enter manufacturer name"
                                        className="border rounded px-4 py-2 outline-blue-400 focus:outline" />
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-1 flex flex-col text-sm">
                                        <label className="font-semibold pb-2" htmlFor="stocks">Stocks</label>
                                        <input
                                            placeholder="Stocks"
                                            className="border rounded w-full  px-4 py-2 outline-blue-400 focus:outline" />
                                    </div>
                                    <div className="flex-1 flex flex-col text-sm">
                                        <label className="font-semibold pb-2" htmlFor="Price">Price</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2 text-gray-500 font-bold">₹</span>
                                            <input
                                                placeholder="Price"
                                                className="border rounded w-full pl-8 pr-4 py-2 outline-blue-400 focus:outline"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 drop-shadow-sm">
                                    <div className="flex-1 flex flex-col text-sm">
                                        <label className="font-semibold pb-2" htmlFor="Colors">Colors</label>
                                        <div className="flex flex-wrap gap-4">
                                            {['07ffbe', '25c8ff', 'ffc94a', 'ff4b76', '4b86ff', '856aff', '000000', 'f4f6fa'].map((code) => {
                                                return <div
                                                    style={{
                                                        backgroundColor: `#${code}`,
                                                    }}
                                                    className="w-9 h-9 rounded-full cursor-pointer hover:bg-opacity-60 duration-300 ease-in-out transition-all"
                                                >
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-4">
                                <div className="flex flex-col text-sm">
                                    <label className="font-semibold pb-2" htmlFor="category">Manufacturer brand</label>
                                    <input
                                        placeholder="Enter manufacturer brand"
                                        className="border rounded px-4 py-2 outline-blue-400 focus:outline" />
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-1 flex flex-col text-sm">
                                        <label className="font-semibold pb-2" htmlFor="Discount">Discount</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2 text-gray-500 font-bold">%</span>
                                            <input
                                                placeholder="Discount"
                                                className="border rounded w-full pl-8 pr-4 py-2 outline-blue-400 focus:outline"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col text-sm">
                                        <label className="font-semibold pb-2" htmlFor="Order">Order</label>
                                        <input
                                            placeholder="Order"
                                            className="border rounded w-full px-4 py-2 outline-blue-400 focus:outline" />
                                    </div>
                                </div>
                                <div className="flex gap-2 drop-shadow-sm">
                                    <div className="flex-1 flex flex-col text-sm">
                                        <label className="font-semibold pb-2" htmlFor="sizes">Sizes</label>
                                        <div className="flex flex-wrap gap-4">
                                            {['XL', 'S', 'M', 'L', 'XL', '2XL', '3XL', '40', '41', '42'].map((code) => {
                                                return <div className="flex justify-center items-center text-xs w-9 h-9 font-bold rounded-full cursor-pointer bg-[#7ba8eb53] hover:bg-[#4484e6] hover:text-white text-[#4484e6] ease-in-out duration-300 transition-all" >
                                                    {code}
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div></div>
                    <div className="hover:bg-[#05b688] bg-[#06d6a0] font-bold rounded-md px-6 py-3 text-white ease-in-out duration-300 transition-all">
                        Submit
                    </div>
                </div>
            </div>
            {/* right side bar  */}
            <div className="col-span-1 flex flex-col gap-4">
                <div className="border rounded border-[#e9ebec]">
                    <div className="text-[#222222] font-bold p-5 border-[#e9ebec] border-b">
                        Publish
                    </div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col text-sm">
                            <label className="font-semibold pb-2" htmlFor="status">Status</label>
                            <select className="border rounded px-4 py-2 outline-blue-400 focus:outline">
                                <option value="option1">Draft</option>
                                <option value="option1">Published</option>
                            </select>
                        </div>
                        <div className="flex flex-col text-sm">
                            <label className="font-semibold pb-2" htmlFor="status">Visibility</label>
                            <select className="border rounded px-4 py-2">
                                <option value="option1">Public</option>
                                <option value="option1">Hidden</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="border rounded border-[#e9ebec]">
                    <div className="text-[#222222] font-bold p-5 border-[#e9ebec] border-b">
                        Product Tags
                    </div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col text-sm">
                            <ProductTags />
                        </div>
                    </div>
                </div>
                <div className="border rounded border-[#e9ebec]">
                    <div className="text-[#222222] font-bold p-5 border-[#e9ebec] border-b">
                        Product Short Description
                    </div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="flex flex-col text-sm">
                            <label className="font-medium pb-2 text-[#878c99]" htmlFor="status">Add short description for product</label>
                            <textarea
                                placeholder="Must enter Minimum of a 100 characters"
                                className="border rounded px-4 py-2 outline-blue-400 focus:outline" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </section>
}


function RTE() {
    const [content, setContent] = useState('');

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'], // Text styling: bold, italic, underline, strikethrough
        ['blockquote', 'code-block'], // Blockquote and code block
        [{ header: 1 }, { header: 2 }], // Headers: h1, h2
        [{ list: 'ordered' }, { list: 'bullet' }], // Ordered and unordered lists
        [{ script: 'sub' }, { script: 'super' }], // Subscript and superscript
        [{ indent: '-1' }, { indent: '+1' }], // Indentation
        [{ direction: 'rtl' }], // Right-to-left text direction
        [{ size: ['small', false, 'large', 'huge'] }], // Font size
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers
        [{ color: [] }, { background: [] }], // Text and background color
        [{ font: [] }], // Font family
        [{ align: [] }], // Text alignment
        ['link', 'image', 'video'], // Link, image, and video embeds
        ['clean'], // Clear formatting
    ];

    return (
        <div>
            <ReactQuill
                value={content}
                onChange={handleContentChange}
                placeholder="Write something..."
                theme="snow"
                modules={{
                    toolbar: toolbarOptions,
                }}
            />
        </div>
    );
}

function ProductTags() {
    const [tags, setTags] = useState([]);
    const inputRef = useRef(null);

    const handleTagChange = () => {
        const tagInput = inputRef.current.value;
        const tagArray = tagInput.split(',').map((tag) => tag.trim()).filter((tag) => tag !== '');
        setTags((prevTags) => [...prevTags, ...tagArray.map((tagText) => ({ id: uuidv4(), text: tagText }))]);
        inputRef.current.value = '';
    };

    const handleRemoveTag = (tagId) => {
        setTags((prevTags) => prevTags.filter((tag) => tag.id !== tagId));
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter tags separated by comma"
                className="border rounded p-2  outline-blue-400 focus:outline"
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ',') {
                        event.preventDefault();
                        handleTagChange();
                    }
                }}
            />
            <div className="mt-2 flex flex-wrap">
                {tags.map((tag) => (
                    <span key={tag.id} className="border bg-gray-200 text-gray-800 rounded px-2 py-1 mr-2 mb-2">
                        {tag.text}
                        <button
                            className="ml-2 text-red-600"
                            onClick={() => handleRemoveTag(tag.id)}
                            aria-label="Remove Tag"
                        >
                            &times;
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
}


function ProductGalleryDropBox() {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const selectedFilePromises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    resolve({ file, previewURL: event.target.result });
                };
                reader.onerror = (error) => {
                    reject(error);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(selectedFilePromises)
            .then((selectedFiles) => {
                setSelectedImages((prevSelectedImages) => [
                    ...prevSelectedImages,
                    ...selectedFiles,
                ]);
            })
            .catch((error) => {
                console.error('Error occurred while uploading images:', error);
            });
    };

    const handleImageRemove = (index) => {
        setSelectedImages((prevSelectedImages) => {
            const updatedImages = [...prevSelectedImages];
            updatedImages.splice(index, 1);
            return updatedImages;
        });
    };

    return (
        <div className="flex flex-col justify-center items-center cursor-pointer border-2 border-dashed border-[#b9bdc8] rounded p-4 text-center hover:border-gray-500">
            <label
                htmlFor="image-upload"

            >
                <input
                    type="file"
                    id="image-upload"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    aria-label="Upload Images"
                />
                <div className="text-gray-500  cursor-pointer">
                    <CloudUploadRounded className="w-16 h-16 mx-auto mb-2" />
                    <p>Drag and drop images here or click to upload</p>
                </div>
            </label>
            <div className="mt-4 flex flex-wrap">
                {selectedImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-24 h-24 overflow-hidden rounded mr-2 mb-2"
                    >
                        <img
                            src={image.previewURL}
                            alt={`Image ${index}`}
                            className="object-cover w-full h-full"
                        />
                        <button
                            className="h-6 w-6 absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 m-1 hover:bg-red-600 transition duration-300"
                            onClick={() => handleImageRemove(index)}
                            aria-label="Remove Image"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

