import React from 'react'
import coffe1 from './coffe1'

export default function Carousel() {
  return (
      <div>
        <div className="text-center">
            <h2 className="text-[20px] font-nunito-semibold text-main items-right">Choose Your Favorite</h2>
            <h1 className="text-[30px] font-mon-black text-main items-center">CHUẨN GU ĐÚNG VỊ</h1>
        </div>
        <div className='w-[800px] m-auto'>
          <div className='flex overflow-x-auto'>
            <div className='w-[559px] h-[256px] flex'>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}
