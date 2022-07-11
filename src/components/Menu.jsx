import React from 'react'

export default function Menu() {
  return (
    <div className='bg-main'>
      <div className='flex flex-col pl-[56px] pr-[164px]'>
        <p className='pt-[230px] font-nunito-bold text-menu'>TRANG CHỦ</p>
        <a className='mt-[30px] font-nunito-light text-menu hover:font-nunito-bold' href="#">COFFEE</a>
        <a className='mt-[30px] font-nunito-light text-menu hover:font-nunito-bold' href="#">PHIN MẠ MÀU</a>
        <a className='mt-[30px] font-nunito-light text-menu hover:font-nunito-bold' href="#">COMBO PHIN PHÊ</a>
        <a className='mt-[30px] font-nunito-light text-menu hover:font-nunito-bold' href="#">GIFTSET</a>
        <a className='mt-[30px] font-nunito-light text-menu hover:font-nunito-bold' href="#">LIÊN HỆ</a>
      </div>
    </div>
  )
}
