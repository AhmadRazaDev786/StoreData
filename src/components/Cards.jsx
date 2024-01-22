import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img src={Single} alt="sinlge" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='font-bold text-2xl text-center py-8'>Single User</h2>
          <p className='font-bold text-4xl text-center'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8 '>1 Graunted User</p>
            <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] text-black rounded-md w-[200px] font-medium my-6 mx-auto py-3 px-6"'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
          <img src={Double} alt="double" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
          <h2 className='font-bold text-2xl text-center py-8'>Partnership</h2>
          <p className='font-bold text-4xl text-center'>$199</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
            <p className='py-2 border-b mx-8 '>3 User Allowed</p>
            <p className='py-2 border-b mx-8 '>Send up to 10 GB</p>
          </div>
          <button className='bg-black text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto py-3 px-6"'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img src={Triple} alt="triple" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='font-bold text-2xl text-center py-8'>Group Account</h2>
          <p className='font-bold text-4xl text-center'>$299</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
            <p className='py-2 border-b mx-8 '>10 User Allowed</p>
            <p className='py-2 border-b mx-8 '>Send up to 20 GB</p>
          </div>
          <button className='bg-[#00df9a] text-black rounded-md w-[200px] font-medium my-6 mx-auto py-3 px-6"'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards