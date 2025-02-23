import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import {Button,IconButton} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';



const SubmissionCard =()=>{

    const handleAcceptDecline=(status)=>{
        console.log(status)
    }

    return(

        <div className='rounded-md bg-black p-5 flex items-center justify-between'>
            <div className='space-y-2'>
                <div className='flex-items-center gap-2'>
                    <span>Comment</span>
                    <div className='flex items-center gap-2 text-[#4169e1]'>
                        <ImageIcon/>
                        <a>See the image.</a>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-xs'>
                    <p>Submission time: </p>
                    <p className='text-gray-400'>2025-02-19T14:44:13.6163407</p>
                </div>
            </div>

            <div>
                {   true?<div className="flex gap-5">
                        <div className="text-green-500">
                            <IconButton color="success" onClick={()=>handleAcceptDecline("ACCEPTED")}>
                                <CheckIcon/>
                            </IconButton>
                        </div>
                        <div className="text-red-500">
                            <IconButton color="error" onClick={()=>handleAcceptDecline("DECLINED")}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </div>:
                    <Button color={true?"success":"error"} size="small" variant="outlined">
                        Accept
                    </Button>
                }
            </div>
        </div>
    )
}

export default SubmissionCard;