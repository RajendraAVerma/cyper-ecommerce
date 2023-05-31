import { useState, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AnimatePresence, motion } from 'framer-motion';

const SearchDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dialogRef = useRef(null);

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = () => {
        // Perform search logic here
        console.log('Search query:', searchQuery);
        setSearchQuery('');
        toggleDialog();
    };

    const handleOutsideClick = (e) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target)) {
            toggleDialog();
        }
    };

    return (
        <AnimatePresence>
            <motion.div layout>
                <div onClick={toggleDialog} className='flex gap-2'>
                    <SearchIcon className='text-[#495057] w-5' />
                    <p className='font-semibold text-[#495057]'>Search for Toner...</p>
                </div>
                {isOpen && (
                    <div
                        className="fixed z-20 inset-0 flex items-start justify-center bg-black bg-opacity-50 pt-8"
                        onClick={handleOutsideClick}
                    >
                        <div
                            className="bg-white w-1/2 p-4 rounded-lg shadow-lg"
                            ref={dialogRef}
                        >
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for Toner..."
                                    className="border rounded-lg px-12 py-2 w-full focus:border-blue-500 focus:border-2 focus:outline-none pl-10"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="absolute text-gray-400 w-6 h-6 top-2 left-3"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>

                        </div>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default SearchDialog;
