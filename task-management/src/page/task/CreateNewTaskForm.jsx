import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Grid from "@mui/material/Grid";
import { Autocomplete, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createTask } from "../../reduxtoolkit/TaskSlice";
import dayjs from 'dayjs';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
};

const tags = ["Arge", "Fırın", "Bakım", "Üretim", "Kompozit", "Depo", "Kalite", "Poligon", "Taşlama", "Kesim", "İdari Bina Alt Kat", "İdari Bina Üst Kat"];

export default function CreateNewTaskForm({ handleClose, open }) {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        description: "",
        comment: "",
        tags: [],
        deadline: new Date(),
    });

    const [selectedTags, setSelectedTags] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTagsChange = (event, value) => {
        setSelectedTags(value);
    };

    const handleDeadlineChange=(date)=>{
        setFormData({
            ...formData,
            deadline:date
        })
    }

    const formateDate=()=>{
        let{
            $y: year,
            $M: month,
            $D: day,
            $H: hours,
            $m: minutes,
            $s: seconds,
            $ms: miliseconds,
        } = input;

        const date = new Date (year,month,day,hours,minutes,seconds,miliseconds);

        const formatedDate=date.toISOString();

        return formatedDate;
    }


    const formatedDate=date.toISOString();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: Image ve Tags boşsa işlem yapma
        if (!formData.image.trim()) {
            alert("Task must have an image!"); // Uyarı ver
            return;
        }
        if (selectedTags.length === 0) {
            alert("Task must have at least one tag!"); // Uyarı ver
            return;
        }

    };

    return (
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
                <form onSubmit={handleSubmit}>
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
                                value={selectedTags}
                                onChange={handleTagsChange}
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
                                    onChange={(newValue) => setFormData(prev => ({ ...prev, deadline: newValue }))}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                className="customButton"
                                type="submit"
                                sx={{ padding: ".9rem" }}
                                disabled={!formData.image.trim() || selectedTags.length === 0} // Eğer image veya tags yoksa butonu pasif yap
                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
}
