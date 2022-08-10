import React from 'react'
import giftset from './img/giftset.png'
import giftset_coffee_semen from './img/giftset_coffee_semen.png'
import giftset_mountain from './img/giftset_mountain.png'

export default function GiftSet() {
  return (
    <div className='bg-light_gray mt-[127px]'>
        <div className="text-center pt-[86px]">
            <h2 className="text-[20px] font-nunito-semibold text-main items-right">Best Gift For Best Friend</h2>
            <h1 className="text-[30px] font-mon-black text-main items-center">GIFTSET</h1>
        </div>

        <div className="flex mt-[68px] align-top">
            <div className="bg-white inline-block ml-[230px]">
                <div className="flex pr-[64px]">
                    <img src={giftset} alt="" />
                    <div className='mt-[64px]'>
                        <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>285.000</h2>
                        <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[15px]'>Giftset "Cà phê phin Việt Nam"</h1>
                        <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê<br/>được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí<br/>quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình<br/>yêu, sự đam mê của người làm cà phê… tạo ra những tách cà<br/>phê tinh khiết chỉ dành riêng cho bạn.</p>
                        <div className='flex'>
                            <div className='flex-col'>
                                <div className='flex mb-[46px]'>
                                    <img src={giftset_coffee_semen} alt="" />
                                    <div className='flex-col ml-[12px]'>
                                        <h2 className='font-nunito-light text-[#232C38] text-[16px]'>Loại hạt</h2>
                                        <h1 className='font-nunito-semibold text-[#232C38] text-[16px]'>Fine Robusta Blend</h1>
                                    </div>
                                </div>
                                <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                            </div>

                            <div className='flex-col ml-[90px]'>
                                <div className='flex mb-[46px]'>
                                    <img src={giftset_mountain} alt="" />
                                    <div className='flex-col ml-[12px]'>
                                        <h2 className='font-nunito-light text-[#232C38] text-[16px]'>Độ cao</h2>
                                        <h1 className='font-nunito-semibold text-[#232C38] text-[16px]'>700 - 800m</h1>
                                    </div>
                                </div>
                                <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px] hover:text-accent_dark transition delay-75 ease-in-out'>CHI TIẾT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className='flex-col'>
                    <div className=''>
                        <h1 className='font-mon-black text-main text-[30px] pt-[65px] pr-[37px] pl-[37px] pb-[65px] bg-white cursor-pointer'>1</h1>
                    </div>
                </div>

                <div className='flex-col'>
                    <div className=''>
                        <h1 className='font-mon-black text-main text-[30px] pt-[65px] pr-[37px] pl-[37px] pb-[65px] bg-white cursor-pointer'>2</h1>
                    </div>
                </div>

                <div className='flex-col'>
                    <div className=''>
                        <h1 className='font-mon-black text-main text-[30px] pt-[65px] pr-[37px] pl-[37px] pb-[65px] bg-white cursor-pointer'>3</h1>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}
