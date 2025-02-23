import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useState} from 'react';
import Grid from "@mui/material/Grid";
import {Autocomplete, TextField} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from "@mui/material/Typography";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const tags =["Arge","Fırın","Bakım","Üretim","Kompozit","Depo","Kalite","Poligon","Taşlama","Kesim","İdari Bina Alt Kat","İdari Bina Üst Kat"]

export default function CreateNewTaskForm({handleClose,open}){

    const [formData,setFormData]=useState({
        title:"",
        image:"",
        description:"",
        comment:"",
        tags:[],
        deadline: new Date(),
    });

    const [selectedTags,setSelectedTags] = useState([]);

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleTagsChange=(event,value)=>{
        setSelectedTags(value);
    }

    return(
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create New Task
                    </Typography>
                   <form>
                       <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <TextField
                                label="Title"
                                fullWidth
                                name='title'
                                value={formData.title}
                                onChange={handleChange}
                                />
                            </Grid>
                           <Grid item xs={12}>
                               <TextField
                                   label="Image"
                                   fullWidth
                                   name='image'
                                   value={formData.image}
                                   onChange={handleChange}
                               />
                           </Grid>
                           <Grid item xs={12}>
                               <TextField
                                   label="Description"
                                   fullWidth
                                   multiline
                                   rows={4}
                                   name='description'
                                   value={formData.description}
                                   onChange={handleChange}
                               />
                           </Grid>
                           <Grid item xs={12}>
                               <TextField
                                   label="Comment"
                                   fullWidth
                                   multiline
                                   rows={1}
                                   name='comment'
                                   value={formData.comment}
                                   onChange={handleChange}
                               />
                           </Grid>
                           <Grid item xs={12}>
                               <Autocomplete
                                   multiple
                                   id="multiple-limit-tags"
                                   options={tags}
                                   onChange={(event, value) => handleTagsChange(value)}
                                   getOptionLabel={(option) => option}
                                   renderInput={(params) => (
                                       <TextField {...params} label="Tags" fullWidth />
                                   )}
                               />
                           </Grid>
                           <Grid item xs={12}>
                               <LocalizationProvider dateAdapter={AdapterDayjs}>
                                   <DateTimePicker
                                       label="Deadline"
                                       value={formData.deadline}
                                       onChange={(newValue) => setFormData({ ...formData, deadline: newValue })}
                                       renderInput={(params) => <TextField {...params} fullWidth />}
                                   />
                               </LocalizationProvider>
                           </Grid>
                       </Grid>
                   </form>
                </Box>
            </Modal>
        </div>
    )
}