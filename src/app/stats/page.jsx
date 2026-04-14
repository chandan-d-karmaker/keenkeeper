'use client'
import React, { useContext } from 'react';
import { friendContext } from '../contextAPI/friendContext';

const StatsPage = () => {

    const { interaction } = useContext(friendContext);
    console.log("Interaction:", interaction);

    return (
        <div>
            <h3 className='text-5xl font-bold text-[#1F2937]'>Friendship Analytics</h3>

            <div>

            </div>
        </div>
    );
};

export default StatsPage;