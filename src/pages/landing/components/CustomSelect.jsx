import React, { useState } from 'react'

const CustomSelect = ({ options, selectedOption, setSelectedOption, logo }) => {

  const [clicked,setClicked] = useState(false)

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={`border-[1px]  relative bg-zinc-900 opacity-90 w-[135px] h-full rounded  ${clicked ? "border-white border-[2px]" : "border-zinc-400"}`}>
      {logo && logo}
      <select onBlur={()=>{
        setClicked(false)
      }} onChange={handleChange} onClick={() => {
        setClicked(true)
      }} className='w-full h-full opacity-0' name="" id="">

        {options.map((item, index) => <option value={item}>{item}</option>)}
      </select>
      <p className="absolute top-1 left-10 text-white ">{selectedOption}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white absolute top-2 left-[100px] pointer-events-none" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CaretDownSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="currentColor"></path></svg>

    </div>

  )
}

export default CustomSelect