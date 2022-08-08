import React from 'react'
import coffe1 from './img/coffe1.png'

export default function Carousel() {
  return (
      <div>
        <div className="text-center">
            <h2 className="text-[20px] font-nunito-semibold text-main items-right">Choose Your Favorite</h2>
            <h1 className="text-[30px] font-mon-black text-main items-center">CHUẨN GU ĐÚNG VỊ</h1>
        </div>
        <div className='w-auto m-auto mb-[100px]'>
          <div className='flex overflow-x-auto mt-[72px] snap-x snap-mandatory'>

            <div className='flex rounded-[10px] mr-[29px] min-h-full min-w-[50%] ml-[149px]'>
              <img src={coffe1} alt="" className='w-[235px] h-[256px] rounded-[10px]'/>
              <div className='ml-[44px] mt-[42px]'>
                <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>99.000</h2>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[24px]'>REVO Morning</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>đắng, hậu ngọt, hương hoa </p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px]'>CHI TIẾT</p>
                </div>
              </div>
            </div>

            <div className='flex rounded-[10px] mr-[29px] min-h-full min-w-[50%]'>
              <img src={coffe1} alt="" className='w-[235px] h-[256px] rounded-[10px]'/>
              <div className='ml-[44px] mt-[42px]'>
                <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>99.000</h2>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[24px]'>REVO Morning</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>đắng, hậu ngọt, hương hoa </p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px]'>CHI TIẾT</p>
                </div>
              </div>
            </div>

            <div className='flex rounded-[10px] mr-[29px] min-h-full min-w-[50%]'>
              <img src={coffe1} alt="" className='w-[235px] h-[256px] rounded-[10px]'/>
              <div className='ml-[44px] mt-[42px]'>
                <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>99.000</h2>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[24px]'>REVO Morning</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>đắng, hậu ngọt, hương hoa </p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px]'>CHI TIẾT</p>
                </div>
              </div>
            </div>

            <div className='flex rounded-[10px] mr-[29px] min-h-full min-w-[50%]'>
              <img src={coffe1} alt="" className='w-[235px] h-[256px] rounded-[10px]'/>
              <div className='ml-[44px] mt-[42px]'>
                <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>99.000</h2>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[24px]'>REVO Morning</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>đắng, hậu ngọt, hương hoa </p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px]'>CHI TIẾT</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}
