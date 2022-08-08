import React from 'react'
import one from './img/1.png'
import two from './img/2.png'
import three from './img/3.png'
import four from './img/4.png'

export default function Description() {
  return (
    <div className="mb-[128px]">
        <div className='flex flex-col align-middle items-center mt-[87px]'>
            <p className="font-nunito-semibold text-main text-[20px] p-0">Your Personalized Coffee</p>
            <h1 className="font-mon-black text-main text-[30px] p-0">COFFEE BUILD YOUR BASE</h1>
        </div>
        <div className='flex items-center mt-[91px]'>
            <div className='flex flex-col items-center align-middle ml-[148px]'>
                <img src={one} alt="" />
                <h2 className='font-nunito-bold text-[24px] mt-[42px]'>Nguồn gốc</h2>
                <p className='font-nunito-light text-[16px]'>Những hạt cà phê Arabica,</p>
                <p className='font-nunito-light text-[16px]'>Robusta đạt chất lượng theo</p>
                <p className='font-nunito-light text-[16px]'>tiêu chuẩn quốc tế.</p>
            </div>
            <div className='flex flex-col items-center align-middle ml-[110px]'>
                <img src={two} alt="" />
                <h2 className='font-nunito-bold text-[24px] mt-[42px]'>Chất lượng</h2>
                <p className='font-nunito-light text-[16px]'>Từng một hạt cà phê là cả một</p>
                <p className='font-nunito-light text-[16px]'>quá trình tập trung cao độ của</p>
                <p className='font-nunito-light text-[16px]'>nghệ nhân cà phê.</p>
            </div>
            <div className='flex flex-col items-center align-middle ml-[110px]'>
                <img src={three} alt="" />
                <h2 className='font-nunito-bold text-[24px] mt-[42px]'>Các loại hạt</h2>
                <p className='font-nunito-light text-[16px]'>70% chất lượng tách cà phê</p>
                <p className='font-nunito-light text-[16px]'>đến từ nguồn gốc và chất lượng</p>
                <p className='font-nunito-light text-[16px]'>green bean.</p>
            </div>
            <div className='flex flex-col items-center align-middle ml-[110px]'>
                <img src={four} alt="" />
                <h2 className='font-nunito-bold text-[24px] mt-[42px]'>Pha chế</h2>
                <p className='font-nunito-light text-[16px]'>Những hạt cà phê được lột xác</p>
                <p className='font-nunito-light text-[16px]'>qua quá trình rang xay kỹ lưỡng</p>
                <p className='font-nunito-light text-[16px]'>và nghiêm ngặt.</p>
            </div>
        </div>
    </div>
  )
}
