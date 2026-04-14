import React from 'react';

const FriendDetails = async ({params}) => {

    const { friendId } = await params;
    // console.log(params);
    return (
        <div>
            <h3>This is friends details page of {friendId}</h3>
        </div>
    );
};

export default FriendDetails;