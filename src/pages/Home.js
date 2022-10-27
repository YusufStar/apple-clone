import React from 'react'
import { BsChevronRight } from "react-icons/bs"
import Header from "../Components/Header"
import heroLarge from "../images/hero_large.jpg"
import heroComboLarge from "../images/hero_combo_large.jpg"
import heroIphoneLarge from "../images/hero_iphone_large.jpg"

function Home() {
  return (
    <div className='h-screen overflow-y-scroll bg-white flex flex-col gap-y-3'>
        {/* Header */}
        <Header/>
        <div className="w-[100%] h-[70%] flex relative flex-row items-center justify-center">
          <img src={heroLarge} className="h-[90%] mr-[10%]" alt="hero-1"/>
          <div className="flex flex-col gap-3 absolute right-[675px] items-center">
            <h1 className='font-bold text-6xl'>iPad</h1>
            <h1 className='text-2xl'>Lovable. Drawable. Magical.</h1>
            <div className="flex flex-row gap-5">
              <a href="#" className='flex flex-row items-center justify-center font-[500] text-[20px] hover:underline text-[#0066cc]'>Learn more {">"}</a>
              <a href="#" className='flex flex-row items-center justify-center font-[500] text-[20px] hover:underline text-[#0066cc]'>Buy {">"}</a>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[70%] flex relative flex-row items-center bg-black justify-center">
          <img src={heroComboLarge} className="h-[100%] ml-[30%]" alt="hero-1"/>
          <div className="flex flex-col gap-3 absolute left-[675px] items-center">
            <h1 className='font-bold text-6xl text-white'>iPad Pro</h1>
            <h1 className='text-2xl flex text-white items-center justify-center gap-2'>Supercharged by <img className='w-[50px]' src="https://www.apple.com/v/ipad-pro/al/images/overview/hero/m2_logo__90ungfqgnsiu_large.png" /></h1>
            <div className="flex flex-row gap-5">
              <a href="#" className='flex flex-row items-center justify-center font-[500] text-[20px] hover:underline text-[#0066cc]'>Learn more {">"}</a>
              <a href="#" className='flex flex-row items-center justify-center font-[500] text-[20px] hover:underline text-[#0066cc]'>Buy {">"}</a>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[70%] flex flex-col items-center bg-black justify-center">
          <div className="flex flex-col gap-3 items-center">
            <h1 className='font-bold text-6xl mt-5 text-white'>iPhone 14 Pro</h1>
            <h1 className='text-2xl flex text-white items-center justify-center gap-2'>Pro. Beyond</h1>
            <div className="flex flex-row gap-5">
              <a href="#" className='flex flex-row items-center justify-center font-[500] text-[20px] hover:underline text-[#0066cc]'>Learn more {">"}</a>
              <a href="#" className='flex flex-row items-center justify-center font-[500] text-[20px] hover:underline text-[#0066cc]'>Buy {">"}</a>
            </div>
          </div>
          <img src={heroIphoneLarge} className="h-[100%] mt-5 w-[30%]" alt="hero-1"/>
        </div>
    </div>
  )
}

export default Home