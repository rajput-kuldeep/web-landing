import React from 'react'

function Home() {
    return (
        <>
        <div className='w-full h-screen bg-[#24CCA8] custom-class'>
            
        <nav className='flex justify-between flex-wrap text-white pt-6 pl-20 pr-10'>
                
                <div className='flex flex-wrap items-center gap-10'>
                <h3 className='text-3xl font-bold '>Tareeq</h3>
                    <a href="#">Home</a>
                    <a href="#">Solutions</a>
                    <a href="#">View Features</a>
                    <a href="#">Pricing</a>
                </div>
                <button className='bg-white px-5 py-2 rounded-full text-black font-bold z-10'>Join Us</button>
            </nav>

            <div className='flex w-full h-screen justify-between '>
                <div className='w-[556px] h-96 pl-20'>
                    <h1 className='text-[96px] text-white font-bold mt-14 leading-[105.6px]'>Manage Your class</h1>
                    <h3 className='text-[40px] leading-[44px] text-white font-semibold mt-2'>For iOS and Android</h3>
                    <p className='text-white text-md mt-4 mb-3'>Our powerful app builder will help you build your desired app in minutes without coding knowledge and once your app is ready, you can publish it on Google Play and App Store.</p>
                    <h4 className='text-white text-2xl font-normal mt-6 mb-6 leading-tight'>DOWNLOAD APP NOW</h4>
                    <div className='flex gap-3 mt-6 mb-6'>
                        <img src="/toppng1.png" alt="" />
                        <img src="/PngItem2.png" alt="" />
                    </div>
                    <p className='text-white mt-6 text-lg'>View Fratures</p>
                </div>
            

                <div className='w-[800px] h-[820px] relative'>
                   <img src="/Group.svg" alt="" className='absolute top-[-52px] w-5/6 right-0'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
