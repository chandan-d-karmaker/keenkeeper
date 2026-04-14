'use client'

import React, { use } from 'react';
import FriendCard from './FriendCard';

const friendPromise = fetch('/friends.json').then(res => res.json());

const Friends = () => {

    const friends = use(friendPromise);  
    

    return (
        <div>

            {
                friends.map(friend => ( <FriendCard key={friend.id} friend={friend} /> ))
            }

        </div>
    );
};

export default Friends;