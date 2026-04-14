'use client';

import React, { useContext } from 'react';
import { friendContext } from '../contextAPI/friendContext';

const TimelinePage = () => {
    const { timeline } = useContext(friendContext);

    return (
        <div className='space-y-6'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div>
                    <h3 className='text-5xl font-bold text-[#1F2937]'>Timeline</h3>
                </div>
                <select defaultValue="All interactions" className='select max-w-xs'>
                    <option>All interactions</option>
                    <option>Call</option>
                    <option>SMS</option>
                    <option>Video Call</option>
                </select>
            </div>

            <div className='space-y-4'>
                {timeline.length > 0 ? (
                    timeline.map((item, index) => (
                        <div key={index} className='p-6 bg-base-100 rounded-2xl border border-white shadow-md'>
                            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
                                <div>
                                    <p className='text-lg font-semibold text-[#1F2937]'>{item.type}</p>
                                    <p className='text-sm text-[#64748B]'>with {item.friend.name}</p>
                                </div>
                                <p className='text-xs text-[#64748B]'>{new Date(item.timestamp).toLocaleString()}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='p-6 bg-base-100 rounded-2xl border border-white shadow-md'>
                        <p className='text-[#64748B]'>No interactions recorded yet. Use Call, Text, or Video on a friend detail page to create one.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelinePage;