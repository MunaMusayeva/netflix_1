import React from 'react'

const ReasonCard = ({item}) => {
  return (
    <div className=' max-w-[1440px] mx-auto h-14 bg-gradient-to-br from-[#192247] to-[#210E17] h-[268px] rounded-[16px] px-4 pt-6 relative'>
        <h3 className='text-white text-[24px] font-medium mb-4 '>{item.title}</h3>
        <p className='text-white/70'>{item.desc}</p>
        <img className='size-[60px] absolute right-4 bottom-4' src={item.img} alt="" />
    </div>
  )
}

export default ReasonCard