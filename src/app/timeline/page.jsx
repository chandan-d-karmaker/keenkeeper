'use client';

import React, { useContext, useState } from 'react';
import { friendContext } from '../contextAPI/friendContext';
import TimelineCard from '@/components/TimelineCard';

const TimelinePage = () => {
    const { timeline } = useContext(friendContext);
    

    const [filteredTimeline, setFilteredTimeline] = useState(timeline);

    return (
        <div className='space-y-6'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h3 className='text-5xl font-bold text-[#1F2937]'>Timeline</h3>
                </div>
                <select defaultValue="Filter timeline" className='select max-w-xs'>
                    <option>Filter timeline</option>
                    <option>Call</option>
                    <option>SMS</option>
                    <option>Video Call</option>
                </select>
            </div>

            <div className='space-y-4'>
                {timeline.length > 0 ? (
                    timeline.map((item, index) => (
                        <TimelineCard key={index} item={item} />
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