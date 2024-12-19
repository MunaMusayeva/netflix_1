import React from 'react'

const FAQItem = ({item,openAccordion,setOpenAccordion}) => {
    return (
        <button onClick={()=>{
            setOpenAccordion(prevState=>prevState !== item.id ? item.id :null)
        }} className='bg-[#2D2D2D] w-full px-[24px] py-[28px]'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[24px] text-white'>{item.title}</h3>
                <svg className='size-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            </div>


            {openAccordion === item.id &&<div >
                <p>{item.desc}</p>
            </div>}
        </button>
    )
}

export default FAQItem