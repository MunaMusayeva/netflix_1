import React, { useState } from 'react'
import FAQItem from './FAQItem'

const FAQ = () => {
    const [openAccordion,setOpenAccordion]=useState(null)
    const items = [
        {
            title:"What is Netflix?",
            desc:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
            id:1
        },
        {
            title:"What is Netflix?",
            desc:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
            id:2
        },
    ]
  return (
    <div className='w-full flex-col gap-4'>
        {items.map(item=><FAQItem item={item} openAccordion={openAccordion} setOpenAccordion={setOpenAccordion}/>)}
    </div>
  )
}

export default FAQ