import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ item, openAccordion, setOpenAccordion }) => {
    return (
        <button onClick={() => {
            setOpenAccordion(prevState => prevState !== item.id ? item.id : null)
        }} className='bg-[#2D2D2D] w-full   '>
            <div className="flex items-center justify-between  border-black hover:bg-white/10  border-b-[1px] px-[24px] py-[28px] ">
                <h3 className="text-[24px] text-white font-semibold ">
                    {item.title}
                </h3>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${openAccordion === item.id ? 'rotate-45' : ''
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="#ffffff"
                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                    />
                </svg>
            </div>

            <AnimatePresence initial={false}>
                { openAccordion === item.id && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { height: 0 }
                        }}
                        transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className='px-[24px] py-[28px]'>
                            <p className='text-left text-[24px] text-white'>
                                {item.desc.split("[break]")[0]}  
                                <br />
                                <br />
                                 {item.desc.split("[break]")[1]}
                            </p>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </button>
    )
}

export default FAQItem




// import React from 'react';

// const FAQItem = ({ item, openAccordion, setOpenAccordion }) => {
//     return (
//         <div className="w-full ">
//             <button
//                 onClick={() => {
//                     setOpenAccordion((prevState) =>
//                         prevState !== item.id ? item.id : null
//                     );
//                 }}
//                 className="bg-[#2D2D2D]  w-full px-6 py-4 text-left border-b border-gray-600"
//             >
//                 <div className="flex items-center justify-between">
//                     <h3 className="text-[24px] text-white font-semibold">
//                         {item.title}
//                     </h3>
//                     <svg
//                         className={`w-5 h-5 transition-transform duration-300 ${openAccordion === item.id ? 'rotate-45' : ''
//                             }`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 448 512"
//                     >
//                         <path
//                             fill="#ffffff"
//                             d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
//                         />
//                     </svg>
//                 </div>
//             </button>
//             {openAccordion === item.id && (
//                 <div className="bg-[#2D2D2D] text-white px-6 py-4">
//                     <p className="text-[16px] leading-7">{item.desc}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FAQItem;