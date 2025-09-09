import React from 'react'
import Flex from '../Layout/Flex'


const Imagecarosel = () => {
  return (
    <div >
      <Flex className="gap-[30px]">
        <img className='w-[25%]' src="/unsplash_1.png" alt="" />
        <img className='w-[25%]' src="/unsplash_2.png" alt="" />
        <img className='w-[25%]' src="/unsplash_3.png" alt="" />
        <img className='w-[25%]' src="/unsplash_4.png" alt="" />
      </Flex>
    </div>
  )
}

export default Imagecarosel
