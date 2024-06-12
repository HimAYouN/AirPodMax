import React from 'react'
import Button from './Button'
import Airpod from '../assets/magic_smart_case__e1xikczc5eoi_medium.jpg'

function BottomPage() {
  return (
    <div className='flex bg-white w-full items-center h-screen'>
        <div className='w-1/2 flex flex-col px-32 '>
            <h1 className='text-6xl text-zinc-700 font-bold'>{["Magical", "experience"].map((word, index)=>(
                <span key={index} className='block'>{word}</span>
            ))}</h1>
            <p className='text-md text-zinc-500 pt-10'>AirPods Max inherit all of the wireless, effortless magic of the AirPods family.</p>
            <p className='text-md text-zinc-500 pb-10'>From setup to Siri commands, they make the listening experience completely fluid day to day, device to device. </p>
            <Button />
        </div>
        <div className='w-1/2'>
            <img src={Airpod} alt="" className='h-[100vh]'/>
        </div>
    </div>
  )
}

export default BottomPage