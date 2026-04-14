'use client'

import React, { use } from 'react';
import FriendCard from './FriendCard';


const Friends = ({ friendPromise }) => {

    const friends = use(friendPromise);


    return (
        <>

            <h2 className='mb-4 text-2xl font-semibold'>Your Friends</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {
                    friends.map(friend => (<FriendCard key={friend.id} friend={friend} />))
                }

            </div>

        </>
    );
};

export default Friends;