import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {Box,Button,Modal,Typography} from '@mui/material';
import { historyActions } from '../../store';

const VideoModel = ({id,name,subtitle,open,handleClose}) => {

  const dispatch = useDispatch();

  useEffect(()=>{ 
    if(open){
          console.log("opened");
          dispatch(historyActions.appendTo({data:{id:id,name:name,subtitle:subtitle}}))
    }
  },[open])
  

  return (
    <div>
        <Modal open={open} onClose={handleClose}>
            <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60%",
                height:'60%',
                bgcolor: "white",
                border: "2px solid #000",
                boxShadow: 24,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 4,
            }}
            >
            <Typography id="title" variant="h6" component="h2" sx={{marginBottom:3}}>
                <b>{name}</b> by <b>{subtitle}</b>
            </Typography>
            <iframe width="560" height="315" style={{bottom: 10,left: 0, width: '100%',height: "100%"}} src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Button onClick={handleClose} style={{marginTop:'10px'}} variant='outlined' color='error'>Close</Button>
            </Box>
        </Modal>
    </div>
  )
}

export default VideoModel