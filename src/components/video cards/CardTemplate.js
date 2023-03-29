import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import VideoModel from "./VideoModel";
import { useDispatch } from "react-redux";
import { videoActions } from "../../store";
import EditCard from "./EditCard";


const CardTemplate = ({name,subtitle,id,type}) => {

  const [open,setOpen] = React.useState(false);
  const [editOpen,setEditOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleEditOpen = () => {
    setEditOpen(true);
  }

  const handleEditClose = () => {
    setEditOpen(false);
  }

  const removeVideo = (id,type) => {
    console.log(id,type);
    dispatch(videoActions.removeVideo({id:id,type:type}))
  }


  return (
    <div>
      {/* <SliderIn> */}
        <div>
          <Card sx={{ display: "flex",height:'250px',border:'1px solid grey',margin:'0px 10px' }} >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }} onClick={handleOpen}>
                <Typography component="div" variant="h5">
                  {name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {subtitle}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="remove/delete" onClick={()=>removeVideo(id,type)}>
                  <DeleteIcon sx={{ height: 38, width: 30 }} />
                </IconButton>
                <IconButton aria-label="play/pause" onClick={handleOpen}>
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="Edit" onClick={handleEditOpen}>
                  <EditIcon sx={{ height: 38, width: 30 }} />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ minWidth: "151", display: "block" }}
              image={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
              alt="Live from space album cover"
              onClick={handleOpen}
            />
          </Card>
        </div>
        <VideoModel id={id} name={name} subtitle={subtitle} open={open} handleClose={handleClose}/>
        <EditCard open={editOpen} handleClose={handleEditClose} name={name} id={id} subtitle={subtitle} type={type} />
      {/* </SliderIn> */}
    </div>
  );
};

export default CardTemplate;
