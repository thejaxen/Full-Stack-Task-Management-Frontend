import React from 'react'
import TaskCard from "../task/taskcard/TaskCard";

const TaskList = () => {
    return(
        <div className='space-y-5 w-[67vw]'>
            {
                [1,1,1,1].map((item)=><TaskCard/>)
            }
        </div>
    )
}
export default TaskList;