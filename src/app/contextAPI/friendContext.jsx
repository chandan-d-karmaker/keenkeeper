'use client';
import React, { createContext, use, useState } from 'react';
import { toast } from 'react-toastify';

export const friendContext = createContext();
const friendPromise = fetch('/friends.json').then(res => res.json());



const FriendContextProvider = ({ children }) => {
    const friends = use(friendPromise);

    const [timeline, setTimeline] = useState([]);
    const [call, setCall] = useState([]);
    const [sms, setSms] = useState([]);
    const [video, setVideo] = useState([]);

    const handleCall = (friend)=>{
        toast('Calling friend...');
        setCall([...call, friend]);
        setTimeline([...timeline, {
            friend,
            type: 'Call',
            timestamp: new Date().toISOString()
        }]);
    }
    const handleSms = (friend)=>{
        toast('Sending SMS...');
        setSms([...sms, friend]);
        setTimeline([...timeline, {
            friend,
            type: 'SMS',
            timestamp: new Date().toISOString()
        }]);
    }
    const handleVideo = (friend)=>{
        toast('Starting video call...');
        setVideo([...video, friend]);
        setTimeline([...timeline, {
            friend,
            type: 'Video Call',
            timestamp: new Date().toISOString()
        }]);
    }

    const data = {
        friends,
        timeline,
        interaction: timeline,
        handleCall,
        handleSms,
        handleVideo
    };

    return (
        <friendContext.Provider value={data}>
            {children}
        </friendContext.Provider>
    );
};

export default FriendContextProvider;
        

