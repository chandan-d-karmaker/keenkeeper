import Image from 'next/image';
import React from 'react';


const TimelineCard = ({ item }) => {
    return (
        <div className='p-6 bg-base-100 rounded-2xl border border-white shadow-md'>
            <div className='flex items-center gap-4'>
                <div>
                    {item.type === 'Call' && <Image src="/imgs/call.png" alt="call" width={40} height={40} />}
                    {item.type === 'SMS' && <Image src="/imgs/text.png" alt="text" width={40} height={40} />}
                    {item.type === 'Video Call' && <Image src="/imgs/video.png" alt="video" width={40} height={40} />}
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-center items-center gap-2'>
                        <p className='text-lg font-semibold text-[#1F2937]'>{item.type}</p>
                        <p className='text-sm text-[#64748B] text-right md:text-start'>with {item.friend.name}</p>
                    </div>
                    <p className='text-xs text-[#64748B]'>{new Date(item.timestamp).toLocaleString()}</p>
                </div>

            </div>
        </div>
    );
};

export default TimelineCard;