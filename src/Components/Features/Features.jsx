import React from 'react'

function Features() {
    return (
        <div className='w-full h-screen custom-class'>
            <nav className='flex justify-between flex-wrap text-[#24CCA8] pt-6 pl-20 pr-10'>
                
                <div className='flex flex-wrap items-center gap-10'>
                <h3 className='text-3xl font-bold '>Tareeq</h3>
                    <a href="#">Home</a>
                    <a href="#">Solutions</a>
                    <a href="#">View Features</a>
                    <a href="#">Pricing</a>
                </div>
                <button className='bg-[#24CCA8] text-white px-5 py-2 rounded-full mr-10  font-bold z-10'>Join Us</button>
            </nav>

            <div className='w-full h-screen flex relative justify-between'>
                <div className='w-[556px] h-[645px] flex flex-col justify-center ml-20'>
                    <h3 className='text-[48px] leading-[52.8px] font-extrabold mb-4'>Automate every thing</h3>
                    <p className='text-[18px] leading-[28.8px] font-normal'>Our powerful app builder will help you build your desired app in minutes without coding knowledge and once your app is ready, you can publish it on Google Play and App Store.</p>
                    <img src="/Line9.svg" alt="" className='absolute left-16' />
                </div>

            <div className='flex flex-col relative overflow-hidden mt-2'>
                <img src="/BG.svg" alt="" className='relative bottom-10' />
                <img src="/iPhone.png" alt="" className=' absolute right-32' />
                
            </div>
            </div>
        </div>
    )
}

export default Features
