import React from 'react'
import { AiFillApple } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { BsBag } from "react-icons/bs"

function Header() {
  return (
    <div className="w-[100%] bg-[#323232] flex items-center justify-center">
    <ul className='w-[52%] h-[43px] text-[#999999] text-[12px] flex flex-row justify-between items-center bg-[#323232]'>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'><AiFillApple size={20} fill='#d6d6d6'/></li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'>Store</li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'>Mac</li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'>iPad</li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'>iPhone</li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'>Watch</li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'>AirPods</li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'>TV & Home</li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'>Accessories</li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'>Support</li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'><BiSearch size={17} fill="#d6d6d6"/></li>
      <li className='cursor-pointer hover:text-white/70 transition-all duration-200'><BsBag size={16} fill="#d6d6d6"/></li>
    </ul>
    </div>
  )
}

export default Header