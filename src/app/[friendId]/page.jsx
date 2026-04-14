import React from 'react';

const FriendDetails = async ({params}) => {

    const { friendId } = await params;
    console.log(friendId);
    return (
        <div>
           
        </div>
    );
};

export default FriendDetails;