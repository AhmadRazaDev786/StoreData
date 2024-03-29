import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="laptop/img" />
            <div className='flex flex-col justify-center mx-auto'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Mangae Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iste in tempora labore non dolore. Amet beatae delectus laudantium libero, consequuntur voluptates atque dolores asperiores animi qui, quaerat corporis eius!
                </p>
                <button className='bg-black text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics