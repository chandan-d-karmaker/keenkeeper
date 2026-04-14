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
            <div className='flex justify-between'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;