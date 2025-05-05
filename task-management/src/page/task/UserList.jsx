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
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUserList} from "../../reduxtoolkit/AuthSlice";
import {useSelector} from "react-redux";
import { List } from '@mui/material'

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
    const dispatch = useDispatch();
    const {auth} = useSelector(store=>store);

    useEffect((item) => {
        dispatch(getUserList(localStorage.getItem("jwt")))
    }, []);
    
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6" mb={2}>User List</Typography>
                <List>
                    {auth.users?.length > 0 ? (
                        auth.users.map((item, index) => (
                            <React.Fragment key={item.id || index}>
                                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                    <ListItem disableGutters>
                                        <ListItemAvatar>
                                            <Avatar src={Logo} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.fullName}
                                            secondary={`@${item.fullName.split(" ").join("_").toLowerCase()}`}
                                        />
                                    </ListItem>
                                    <Button className='customButton'>Select</Button>
                                </Box>
                                {index !== auth.users.length - 1 && <Divider variant="inset" />}
                            </React.Fragment>
                        ))
                    ) : (
                        <Typography textAlign="center" mt={2}>No users found.</Typography>
                    )}
                </List>
            </Box>
        </Modal>
    );
}