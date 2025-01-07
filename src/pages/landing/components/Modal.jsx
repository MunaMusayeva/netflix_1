import React from 'react';
import { motion } from 'framer-motion';


const Modal = ({ isOpen, item, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={(e) => {
            e.stopPropagation();
            closeModal();
        }}>
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {duration: 0.5}}}>
            <div className="bg-[#181414] text-white rounded-lg w-[670px] shadow-lg relative" onClick={(e) => {
                e.stopPropagation();
            }}>
                <button
                    className="absolute top-2 right-2 text-white "
                    onClick={closeModal}
                >X</button>

                <div onClick={
                    (e) => {
                        e.stopPropagation()
                    }
                } className='relative'>
                    <div className='absolute w-full h-full bg-gradient-to-tr from-zinc-900 from-25% via-55% flex items-end'>
                    </div>
                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} className="w-full h-full object-cover rounded-t-lg mb-5" />
                </div>
                <h2 className="text-2xl font-bold absolute top-[340px] px-8">{item.title}</h2>
                <div className="px-8 py-4 mb-6">
                    <p className="text-white mb-4">{item.overview}</p>
                    <button className="bg-red-600 px-4 py-2 rounded-[5px] text-white hover:bg-red-700 w-[145px] h-[45px]">
                        Get Started
                    </button>
                </div>
            </div>
            </motion.div>
            
        </div>
    );
};

export default Modal;