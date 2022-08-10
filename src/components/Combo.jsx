import React from 'react'
import combo1 from './img/combo1.png'
import combo2 from './img/combo2.png'
import combo3 from './img/combo3.png'

export default function Combo() {
  return (
    <div>
        <div className="text-center pt-[86px] mb-[64px]">
            <h2 className="text-[20px] font-nunito-semibold text-main items-right">Your Personalized Coffee</h2>
            <h1 className="text-[30px] font-mon-black text-main items-center">COMBO PHIN PHÊ</h1>
        </div>

        <div className='flex justify-evenly mb-[128px]'>

            <div className='bg-white'>
                <img src={ combo1 } alt="" />
                    <div className='flex align-middle mt-[42px]'>
                        <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>147.000</h2>
                        <h2 className='font-nunito-semibold text-main text-[14px] line-through ml-[19px] mt-[5px]'>155.000</h2>
                    </div>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[5px]'>Combo Revo Đậm Đà</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>Hàm lượng caffein trong Revo Đậm Đà<br/>đủ mạnh để làm bạn tỉnh táo làm việc...</p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px] transition delay-75 ease-in-out hover:text-accent_dark cursor-pointer'>CHI TIẾT</p>
                </div>
            </div>

            <div className='bg-white'>
                <img src={ combo2 } alt="" />
                    <div className='flex align-middle mt-[42px]'>
                        <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>155.000</h2>
                        <h2 className='font-nunito-semibold text-main text-[14px] line-through ml-[19px] mt-[5px]'>165.000</h2>
                    </div>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[5px]'>Combo Revo Everyday</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>Revo Everyday được phối trộn giữa vị<br/>đắng của hạt Robusta và hương thơm...</p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px] transition delay-75 ease-in-out hover:text-accent_dark cursor-pointer'>CHI TIẾT</p>
                </div>
            </div>

            <div className='bg-white'>
                <img src={ combo3 } alt="" />
                    <div className='flex align-middle mt-[42px]'>
                        <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>275.000</h2>
                        <h2 className='font-nunito-semibold text-main text-[14px] line-through ml-[19px] mt-[5px]'>299.000</h2>
                    </div>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[5px]'>Combo Revo Honey</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>Honey – trong tên gọi Revo Honey đến<br/>từ phương pháp chế biến hạt Arabica...</p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px] transition delay-75 ease-in-out hover:text-accent_dark cursor-pointer'>CHI TIẾT</p>
                </div>
            </div>

        </div>
        <div className='text-center bg-light_gray'>
            <h2 className='text-[16px] font-nunito-lihtitalic pt-[18px]'>© Revo Coffee Việt Nam - 2022</h2>
            <h3 className='text-[12px] font-nunito-lihtitalic pb-[10px]'>Made with coffee by Dmitrii Gorbunov</h3>
        </div>
    </div>
  )
}
