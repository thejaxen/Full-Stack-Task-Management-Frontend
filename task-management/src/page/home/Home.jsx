import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import TaskList from "../tasklist/TaskList";

const Home = () => {
    return (
        <div className='lg:flex px-5 lg:px-20 pt-[2.9vh] min-h-screen'>
            <div className='hidden lg:flex w-[20vw]'>
                <Sidebar/>
            </div>
            <div className='flex-1 flex justify-center'>
                <TaskList/>
            </div>
        </div>
    )
}

export default Home;