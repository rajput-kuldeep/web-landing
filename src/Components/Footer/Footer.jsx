import React from 'react'

function Footer() {
    return (
       <div className='w-full h-[474px] pr-20 pl-20 bg-[#0F172A] '>
         <nav className='flex justify-between flex-wrap text-white h-24 pt-6 pb-6 pr-20 pl-20'>
                
                <div className='flex flex-wrap items-center gap-12 w-2/4 h-9'>
                <h3 className='text-3xl font-bold '>Tareeq</h3>
                    <a href="#">Home</a>
                    <a href="#">Solutions</a>
                    <a href="#">View Features</a>
                    <a href="#">Pricing</a>
                </div>
                <button className='bg-white px-5 py-2 rounded-full text-black font-bold z-10'>Join Us</button>
            </nav>

            <div className='flex gap-24 ml-20 pt-3 text-white'>
                <div>
                    <ul className='flex flex-col gap-2' >
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Overview</li>
                    </ul>
                </div>
                <div className='flex gap-20'>
                    <ul className='flex flex-col gap-2'>
                        <li>Solutions</li>
                        <li>Brainstorming</li>
                        <li>Ideation</li>
                        <li>Wireframing</li>
                        <li>Research</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li>View Features</li>
                        <li>Brainstorming</li>
                        <li>Ideation</li>
                        <li>Wireframing</li>
                        <li>Research</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li>Supports</li>
                        <li>Contact Us</li>
                        <li>Developers</li>
                        <li>Documentation</li>
                        <li>Integrations</li>
                    </ul>
                    </div>

                    <div className='relative'>
                        <ul className='flex flex-col gap-2 '>
                            <li>Company</li>
                            <li>About</li>
                            <li>Press</li>
                            <li>Events</li>
                            <li>Request Demo <img src="/arrow-right.svg" alt="" className='absolute right-[-33px] bottom-[-2px]' /> </li>
                        </ul>
                    
                </div>
            </div>

            <div className='flex  w-full h-36 items-center justify-between text-white pt-12 pb-12'>
                <div>
                    <ul className='flex gap-12 ml-20'>
                        <li>Tareeq@2024</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Manage Cookies</li>
                    </ul>
                </div>

                <div className='flex gap-12'>
                    <img src="/SocialIcons.svg" alt="" />
                    <img src="/AppDownload.svg" alt="" />
                </div>
            </div>
                

       </div> 
    )
}

export default Footer
