import React from 'react'

const TaskCard = () => {
    return(
        <div>
            <div className='card lg:flex justify-between'>
                <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
                    <div className=''>
                        <img className='lg:w-[7ren] lg:h-[rem] object-cover'
                             src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Ftr%2Fstok-foto%25C4%259Fraflar%2Fdo%25C4%259Fa-ve-manzaralar&psig=AOvVaw00vF3s4AtLkyFN-6ag3kYe&ust=1739993181026000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCMiO75zYsDFQAAAAAdAAAAABAE"
                             alt=""/>
                    </div>
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-lg'>Not appropriate</h1>
                            <p className='text-gray-500 text-sm'>use latest frameworks and technology to make this</p>
                        </div>
                        <div className='flex flex-wrap gap-2 items-center'>
                            {[1,1,1,1].map((item)=> <span className='py-1 px-5 rounded-full techStack'>
                            Angular
                            </span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard