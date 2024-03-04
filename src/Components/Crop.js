import React from 'react'

function Crop({crop}) {
    const {
        name,
        image,
        temperature: { min: tempMin, max: tempMax },
        moisture: { min: moistMin, max: moistMax }
    } = crop;
    
  return (
   <div className='bg-white mt-2 shadow-1 p-5 rounded-md w-full max-w-[300px] font- font-serif mx-auto cursor-pointer hover:shadow-2xl transition '>
     <img className='mb-5 h-[300px] w-[300px]' src={image} alt=""/>
     <div className="mx-1 text-lg font-semibold max-w-[260px]">{name}</div>
     <div className=' mt-2 mb-4 flex gap-x-2 text-sm'>
        <span className='mx-1 font-semibold'>ST :</span>
        <div className='bg-green-500 rounded-full text-white px-1'>Min: {tempMin}°C</div>
        <div className='bg-red-500 rounded-full text-white px-1 '>Max: {tempMax}°C</div>
     </div>
     <div className='mb-4 flex gap-x-2 text-sm'>
        <span className='mx-1 font-semibold'>SM :</span>
        <div className='bg-green-500 rounded-full text-white px-1'>Min: {moistMin} %</div>
        <div className='bg-red-500 rounded-full text-white px-1 '>Max: {moistMax} %</div>
     </div>
   </div>
  )
}

export default Crop