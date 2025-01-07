import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import CustomSelect from './CustomSelect'
import Modal from './Modal'


const Trending = () => {
    const [data, setData] = useState([])
    const [item, setItem] = useState({}) 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState("Movie")
    const options=["Movie","TV"]

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${selectedOption.toLowerCase()}/trending`);
            const data = await response.json();
            setData(data.content);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(()=>{
        getData();
    },[selectedOption])

    const handleCardClick = (item) => {
        setItem(item); 
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setItem(null);
    };

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "scroll"
    })

    return (
        <div className='max-w-[1440px] mx-auto px-[9rem] w-full py-20 relative'>
            <h3 className=' text-white text-2xl font-semibold mb-4'>Trending Now</h3>
            <CustomSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={options} />
            <div className='w-full flex gap-12 overflow-scroll overflow-y-hidden py-5 pl-7'>
                    {data.map((item, index) =>
                        <div key={index} onClick={() => handleCardClick(item)}>
                            <MovieCard className='' setItem={setItem} item={item} index={index} />
                        </div>
                    )}
                </div>
            <Modal isOpen={isModalOpen} item={item} closeModal={closeModal} />
        </div>
        
    )
}

export default Trending