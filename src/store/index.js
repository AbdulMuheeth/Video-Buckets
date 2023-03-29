import {createSlice,configureStore} from '@reduxjs/toolkit';
import { type } from '@testing-library/user-event/dist/type';
import { useSelector } from 'react-redux';
import { demoData } from '../others/defaultdata';

const initialVideoState = { VideosData: demoData }

// const buckets = useSelector((state)=>state.videos.VideosData.buckets)
// const bucketNames = buckets.map((bucket)=>bucket.name)
// console.log(buckets.name)

const videoSlice = createSlice({
    name:'VideosData',
    initialState: initialVideoState,
    reducers:{
        append(state,payload){
            state.VideosData.buckets.map((bucket)=>{
                if (bucket.name === payload.payload.type)
                {
                    bucket.vids.push({name:payload.payload.data.name,subtitle:payload.payload.data.subtitle,id:payload.payload.data.id})
                }
            })
        },
        removeVideo(state,payload){

            const filterList = state.VideosData.buckets.filter((bucket)=> bucket.name === payload.payload.type)
            const videos = filterList[0].vids;
            const updatedVids = videos.filter((vid)=>vid.id != payload.payload.id);

            state.VideosData.buckets.map((bucket)=>{
                if (bucket.name === payload.payload.type){
                    bucket.vids = updatedVids;
                }
            })
        },
        editBucketName(state,payload){
            // const buckets = state.VideosData.buckets;
            state.VideosData.buckets.map((bucket)=>{
                if (bucket.name === payload.payload.type){
                    bucket.name = payload.payload.updatedName;
                }
            })
        }
        ,
        editVideo(state,payload){
            if (payload.payload.original.type === payload.payload.data.type){
                state.VideosData.buckets.map((bucket)=>{
                if(bucket.name === payload.payload.original.type){
                    bucket.vids.map((video)=>{
                        if (video.id === payload.payload.original.id && video.name === payload.payload.original.name && video.subtitle === payload.payload.original.subtitle){
                                video.name = payload.payload.data.name;
                                video.id = payload.payload.data.id;
                                video.subtitle = payload.payload.data.subtitle;
                            }
                        })
                    }
                })
            }
            else{
                // 1.removing in original list
                const filterList = state.VideosData.buckets.filter((bucket)=> bucket.name === payload.payload.original.type)
                const videos = filterList[0].vids;
                const updatedVids = videos.filter((vid)=>vid.id != payload.payload.original.id);
                state.VideosData.buckets.map((bucket)=>{
                    if (bucket.name === payload.payload.original.type){
                        bucket.vids = updatedVids;
                    }
                })
                // 2.appending in new bucket
                state.VideosData.buckets.map((bucket)=>{
                    if (bucket.name === payload.payload.data.type)
                    {
                        bucket.vids.push({name:payload.payload.data.name,subtitle:payload.payload.data.subtitle,id:payload.payload.data.id})
                    }
                })
            }
        }
    }
})

const initialHistoryState = { history: [] }

const historySlice = createSlice({
    name:'historyData',
    initialState:initialHistoryState,
    reducers:{
        appendTo(state,payload){
            // console.log(" payload .......",payload);
            // console.log(state.history)
            state.history.push({name:payload.payload.data.name,subtitle:payload.payload.data.subtitle,id:payload.payload.data.id});
        }
    }
})


const store = configureStore({
    reducer: {videos : videoSlice.reducer, history: historySlice.reducer }
})

export const videoActions = videoSlice.actions;
export const historyActions = historySlice.actions;

export default store;