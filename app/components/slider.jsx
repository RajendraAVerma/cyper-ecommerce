import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const images = [
    'https://themesbrand.com/toner/html/assets/images/ecommerce/home/img-6.jpg',
    'https://themesbrand.com/toner/html/assets/images/ecommerce/home/cta.png',
    'https://themesbrand.com/toner/html/assets/images/ecommerce/home/img-1.png',
    'https://themesbrand.com/toner/html/assets/images/ecommerce/home/img-2.png',
    // Add more image links here
];

const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const handlePrev = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative w-full h-64 py-[20px]">
            <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full"
            >
                <img
                    src={images[currentImage]}
                    alt={`Image ${currentImage + 1}`}
                    layout="fill"
                    objectFit="cover"
                />
            </motion.div>
            <div className="absolute flex justify-between w-full bottom-4 px-[20px]">
                <div
                    onClick={handlePrev}
                    className='h-10 w-10 bg-[#afafaf] p-4 text-white flex justify-center items-center rounded-full cursor-pointer'>
                    <ArrowBackIosNewOutlinedIcon className='' />
                </div>
                <div
                    onClick={handleNext}
                    className='h-10 w-10 bg-[#afafaf] p-4 text-white flex justify-center items-center rounded-full cursor-pointer'>
                    <ArrowForwardIosOutlinedIcon className='' />
                </div>
            </div>
        </div>
    );
};

export default Slider;
