import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {

    const [SelectedUser, setSelectedUser] = useState(false);

    return (
        <div className='border w-full h-screen flex justify-center items-center sm:px-[15%] sm:py-[5%]'>
            <div className={`w-[100%] backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${SelectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
                <Sidebar SelectedUser={SelectedUser} setSelectedUser={setSelectedUser}/>
                <ChatContainer/>
                <RightSidebar/>
            </div>
        </div>
    )
}

export default HomePage