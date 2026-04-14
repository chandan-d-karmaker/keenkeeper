import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* banner title n button*/}
            <div className='space-y-8'>
                <div className='space-y-4 text-center'>
                    <h2 className='text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h2>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='btn bg-[#244D3F] text-white font-semibold'>+ Add a friend</button>
                </div>
            </div>

            {/* banner stats */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10'>
                <div className='p-8 rounded-xl bg-base-100 text-center border border-white shadow-md'>
                    <h1>0</h1>
                    <h2 className='text-[#64748B] text-[18px]'>Total Friends</h2>
                </div>
                <div className='p-8 rounded-xl bg-base-100 text-center border border-white shadow-md'>
                    <h1>0</h1>
                    <h2 className='text-[#64748B] text-[18px]'>On Track</h2>
                </div>
                <div className='p-8 rounded-xl  bg-base-100 text-center border border-white shadow-md'>
                    <h1>0</h1>
                    <h2 className='text-[#64748B] text-[18px]'>Need Attention</h2>
                </div>
                <div className='p-8 rounded-xl bg-base-100 text-center border border-white shadow-md'>
                    <h1>0</h1>
                    <h2 className='text-[#64748B] text-[18px]'>Interactions This Month</h2>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;