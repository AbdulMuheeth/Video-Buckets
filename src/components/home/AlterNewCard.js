import { Button, FormControl, IconButton, InputLabel, Menu, MenuItem, Modal, Select, TextField, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { videoActions } from '../../store';
import InfoIcon from '@mui/icons-material/Info';

const AlterNewCard = () => {

  const [open, setOpen] = React.useState(false);
  const [newName, setName] = React.useState("");
  const [newId, setId] = React.useState("");
  const [newSubtitle,setSubtitle] = React.useState("");
  const [type,setType] = React.useState("-1");

  const dispatch = useDispatch();
  const buckets = useSelector((state)=> state.videos.VideosData.buckets)
  
  const navigate = useNavigate();
  
  const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const createVideoCard = (e) => {
        
        e.preventDefault();
        const newVideo = {
            name: newName,
            subtitle: newSubtitle,
            id: newId
        };
        
        dispatch(videoActions.append({data:newVideo,type:type}));
    };


  const validateForm = () => {
    if(newName !== "" || newName.length!==0)
      return true;
    alert("Please enter Name");
    return false;
  }

  return (
    <>
    <div style={{
            display:'flex',
            justifyContent:'flex-end'
    }}>
        <Button
            onclick={handleOpen}
            variant="contained"
            color='success'
            sx={{
                fontSize:'20px',
                margin:'1%',
                marginRight:'3%'

            }}
        >
            + New Card
        </Button>
    </div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
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
            Create New Video Card
          </Typography>
          <form>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                // error={!newName}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                sx={{ width: 250,marginBottom:1 }}
                required
              />
            </FormControl>
            <br />
            <FormControl>
              <TextField
                label="SubTitle/Artist *"
                variant="outlined"
                onChange={(e) => {
                  setSubtitle(e.target.value);
                }}
                sx={{ width: 250,marginBottom:2 }}
              />
            </FormControl>
            <br />
            <FormControl>
              <TextField
                label={
                    <div>
                        Youtube Video ID: *
                        <Tooltip title="https://www.youtube.com/watch?v=THIS_IS_ID">
                            <InfoIcon/>
                        </Tooltip>
                    </div>
                }
                variant="outlined"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                sx={{ width: 250,marginBottom:3 }}
              />
            </FormControl>
            <br />
            <FormControl sx={{ minWidth: 250, marginBottom:2,color: "black" }} >
                <InputLabel id="bucket-label">Bucket Type *</InputLabel>
                <Select
                    labelId="bucket-label"
                    id="buck"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    label="Bucket Type"
                >
                    <MenuItem value='-1' key='-1'>
                        select Bucket
                    </MenuItem>
                    {buckets.map((bucket, i) => (
                    <MenuItem value={bucket.name} key={'buck' + String(i)}>
                        {bucket.name}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div style={{display:'flex',justifyContent:'space-around'}}>
              <Button
                type="submit"
                variant='outlined'
                color='success'
                onClick={(e) => {
                    createVideoCard(e);
                    handleClose();
                }}
              >
                Create
              </Button>
              <Button onClick={handleClose} sx={{display:'flex'}} justifyContent='center' variant='outlined' color='error'>cancel</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default AlterNewCard