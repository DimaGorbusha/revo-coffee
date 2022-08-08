import React from 'react'
import coffee_morning from './img/coffee_morning.png'
import coffee_origin from './img/coffee_origin.png'
import coffee_everyday from './img/coffee_everyday.png'
import coffee_dam_da from './img/coffee_dam_da.png'

export default function CoffeeSets() {
  return (
      <div className="" id="coffee_sets">
        <div className="text-center">
            <h2 className="text-[20px] font-nunito-semibold text-main items-right">Choose Your Favorite</h2>
            <h1 className="text-[30px] font-mon-black text-main items-center">CHUẨN GU ĐÚNG VỊ</h1>
        </div>

        <div className='w-auto m-auto flex mb-[100px]'>
          <div className='flex mt-[72px] flex-col ml-[130px] mr-[100px]'>

            <div className='flex rounded-[10px]'>
              <img src={coffee_morning} alt="" className='w-[235px] h-[256px] rounded-[10px] mb-[50px]'/>
              <div className='ml-[44px] mt-[42px]'>
                <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>99.000</h2>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[24px]'>REVO Morning</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>đắng, hậu ngọt, hương hoa</p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px] hover:text-accent_dark transition delay-75 ease-in-out'>CHI TIẾT</p>
                </div>
              </div>
            </div>

            <div className='flex rounded-[10px]'>
              <img src={coffee_origin} alt="" className='w-[235px] h-[256px] rounded-[10px]'/>
              <div className='ml-[44px] mt-[42px]'>
                <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>139.000</h2>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[24px]'>REVO Origin</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>hậu ngọt, ít đắng, vị chua dâu</p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px] transition delay-75 ease-in-out hover:text-accent_dark'>CHI TIẾT </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex mt-[72px] flex-col'>
            <div className='flex rounded-[10px]'>
              <img src={coffee_everyday} alt="" className='w-[235px] h-[256px] rounded-[10px] mb-[50px]'/>
              <div className='ml-[44px] mt-[42px]'>
                <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>85.000</h2>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[24px]'>REVO Everyday</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>cân bằng, hậu đắng, vị chocolate</p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px] transition delay-75 ease-in-out hover:text-accent_dark'>CHI TIẾT</p>
                </div>
              </div>
            </div>

            <div className='flex rounded-[10px]'>
              <img src={coffee_dam_da} alt="" className='w-[235px] h-[256px] rounded-[10px]'/>
              <div className='ml-[44px] mt-[42px]'>
                <h2 className='font-nunito-semibold text-accent_dark text-[20px]'>75.000</h2>
                <h1 className='font-nunito-bold text-[#232C38] text-[24px] mb-[24px]'>REVO Đậm Đà</h1>
                <p className='font-nunito-light text-dark_gray text-[16px] mb-[22px]'>đậm đà, đắng, truyền thống</p>
                <div className='flex text-center align-middle'>
                  <a href="#" className=' font-nunito-bold text-[#F9FBFF] text-[16px] pr-[25px] pl-[25px] pt-[6px] pb-[6px] bg-accent_dark rounded-[19px] transition delay-75 ease-in-out hover:text-accent_dark hover:bg-[#ECEFF4] '>MUA NGAY</a>
                  <p className='font-nunito-bold text-[16px] text-main mt-[6px] ml-[29px] transition delay-75 ease-in-out hover:text-accent_dark'>CHI TIẾT</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
  )
}
