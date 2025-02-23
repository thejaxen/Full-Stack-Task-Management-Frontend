import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {ListItemAvatar} from "@mui/material";
import {ListItem} from "@mui/material";
import Logo from "./../../logo.svg"
import {Avatar} from '@mui/material'
import {ListItemText} from "@mui/material";
import {Divider} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

const tasks = [1,1,1,1]

export default function UserList({handleClose,open}) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {
                    tasks.map((item,index)=>
                        <>
                        <div className='flex items-center justify-between w-full'>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={Logo}></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                secondary="Mert Duyar"
                                primary={"Kim Teknoloji"}
                            >
                            </ListItemText>
                        </ListItem>
                        <div>
                            <Button className='customButton'>Select</Button>
                        </div>
                    </div>
                            {index!== tasks.length-1 && <Divider variant='inset' />}
                        </>
                        )
                    }
                </Box>
            </Modal>
        </div>
    );
}