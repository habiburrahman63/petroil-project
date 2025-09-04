import React from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'

const Navber = () => {
  return (
    <div className='bg-red-500 py-[27px]'>
      <Container>
        <div className='flex justify-between items-center'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <ul className='flex items-center gap-[47px] text-white text-[16px] font-semibold'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Gallery</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li className='border-2 border-[#fff] py-[13px] px-[32px]'>
                    <a href="#">CONTACT</a>
                </li>
            </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navber
