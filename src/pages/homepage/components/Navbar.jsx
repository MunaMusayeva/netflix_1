import React from 'react'
import netflix from "images/NetflixLogo.svg"

const Navbar = ({tabItems,setSelectedTab,selectedTab}) => {
  return (
    <div className='w-screen absolute top-0 left-0 flex items-center py-[30px] px-[90px] '>
        <img src={netflix} alt="" />
        <div className='flex items-center gap-[28px] ml-[60px]'>
        {
            tabItems.map(item=> <button className={`${selectedTab.value === item.value ? "text-white font-bold" : "text-zinc-300" } text-[22px]`} onClick={()=>{
                setSelectedTab(item)

            }}>{item.title}</button>)
        }

        </div>
        
    </div>
  )
}

export default Navbar