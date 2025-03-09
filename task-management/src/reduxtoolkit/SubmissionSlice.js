import { createAsyncThunk } from "@reduxjs/toolkit";
import {api, setAuthHeader} from "../api/api";

export const submitTask=createAsyncThunk("submissions/submitTask",
    async({taskId,githubLink})=>{
        setAuthHeader(localStorage.getItem("jwt",api))

        try{
            const {data}=await api.post(`/api/submissions?task_id=${taskId}&github_link=${githubLink}`,
                {}
            );
            console.log("submitted task",data)
            return data;
        }catch(error){
            console.log("catch ",error)
            throw Error(error.response.data.error)
        }
    }
)

export const fetchAllSubmissions=createAsyncThunk("submissions/fetchAllSubmissions",
    async()=>{
        setAuthHeader(localStorage.getItem("jwt",api))

        try{
            const {data}=await api.get(`/api/submissions`,
                {}
            );
            console.log("submitted tasks",data)
            return data;
        }catch(error){
            console.log("catch ",error)
            throw Error(error.response.data.error)
        }
    }
)

export const fetchSubmissionsByTaskId=createAsyncThunk("submissions/fetchSubmissionsByTaskId",
    async(taskId)=>{
        setAuthHeader(localStorage.getItem("jwt",api))

        try{
            const {data}=await api.get(`/api/submissions/task/${taskId}`,
                {}
            );
            console.log("submitted tasks",data)
            return data;
        }catch(error){
            console.log("catch ",error)
            throw Error(error.response.data.error)
        }
    }
)

export const acceptDeclineSubmission=createAsyncThunk("submissions/fetchSubmissionsByTaskId",
    async(taskId)=>{
        setAuthHeader(localStorage.getItem("jwt",api))

        try{
            const {data}=await api.get(`/api/submissions/task/${taskId}`,
                {}
            );
            console.log("submitted tasks",data)
            return data;
        }catch(error){
            console.log("catch ",error)
            throw Error(error.response.data.error)
        }
    }
)


