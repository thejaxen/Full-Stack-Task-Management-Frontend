import React from 'react';
import {Avatar} from "@mui/material";

export const Navbar = () => {
    return (
        <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10, flex justify-between items-center'>
            <p className="font-bold text-lg">İç Denetim Sistemi</p>

            <div className='flex items-center gap-5'>
                <p>Mert Duyar</p>
                <Avatar>C</Avatar>
            </div>
        </div>
    )
}

export default Navbar;

