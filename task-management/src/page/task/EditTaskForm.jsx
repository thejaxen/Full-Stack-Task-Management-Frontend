import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksById, updateTask } from "../../reduxtoolkit/TaskSlice";
import { Modal, Box, Grid, TextField, Autocomplete, Typography, Button } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useLocation } from "react-router-dom";

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

const tagsOptions = ["Arge", "Fırın", "Bakım", "Üretim", "Kompozit", "Depo", "Kalite", "Poligon", "Taşlama", "Kesim", "İdari Bina Alt Kat", "İdari Bina Üst Kat"];

export default function EditTaskForm({ handleClose, open }) {
    const dispatch = useDispatch();
    const location = useLocation();

    // QUERY PARAMS'DAN TASK ID'Yİ ALIYORUZ
    const queryParams = new URLSearchParams(location.search);
    const taskId = queryParams.get("taskId");

    const taskDetails = useSelector(state => state.task.taskDetailsById?.[taskId]);

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        description: "",
        comment: "",
        tags: [],
        deadline: new Date(),
    });

    // 1. Modal açılınca ilgili task'ı getir
    useEffect(() => {
        if (taskId) {
            dispatch(fetchTasksById(taskId));
        }
    }, [taskId, dispatch]);

    // 2. Task geldiğinde formu doldur
    useEffect(() => {
        if (taskDetails) {
            setFormData({
                title: taskDetails.title || "",
                image: taskDetails.image || "",
                description: taskDetails.description || "",
                comment: taskDetails.comment || "",
                tags: taskDetails.tags || [],
                deadline: taskDetails.deadline ? new Date(taskDetails.deadline) : new Date(),
            });
        }
    }, [taskDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTagsChange = (event, value) => {
        setFormData(prev => ({
            ...prev,
            tags: value,
        }));
    };

    const handleDeadlineChange = (date) => {
        setFormData(prev => ({
            ...prev,
            deadline: date,
        }));
    };

    const formatDate = (input) => {
        if (!input) return null;
        const date = new Date(input);
        return date.toISOString();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedFormData = {
            ...formData,
            deadline: formatDate(formData.deadline),
        };

        console.log("Güncellenecek formData:", updatedFormData);

        dispatch(updateTask({
            id: taskId,
            updatedTaskData: updatedFormData
        }));

        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="edit-task-modal"
            aria-describedby="edit-task-description"
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Edit The Task
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Title"
                                fullWidth
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Image"
                                fullWidth
                                name="image"
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
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Comment"
                                fullWidth
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                options={tagsOptions}
                                value={formData.tags}
                                onChange={handleTagsChange}
                                renderInput={(params) => <TextField {...params} label="Tags" fullWidth />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    label="Deadline"
                                    value={formData.deadline}
                                    onChange={handleDeadlineChange}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                sx={{ mt: 2 }}
                                variant="contained"
                            >
                                Update Task
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
}
