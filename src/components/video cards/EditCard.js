import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Tooltip, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch, useSelector } from 'react-redux';
import { videoActions } from '../../store';

const EditCard = ({open,handleClose,name,id,subtitle,type}) => {
    
    // const [open,setOpen] = React.useState(false);
    const [ename,setName] = React.useState(name);
    const [eid,setId] = React.useState(id);
    const [esubtitle,setSubtitle] = React.useState(subtitle);
    const [etype,setType] = React.useState(type);
    const buckets = useSelector((state)=>state.videos.VideosData.buckets)
    const dispatch = useDispatch();

    // useEffect(()=>{
    // },[])

    const handleEditCard = (e) => {
        e.preventDefault();
        console.log("----------")
        console.log(name,id,subtitle,type)
        console.log(ename,eid,esubtitle,etype)
        console.log("----------")

        dispatch(videoActions.editVideo({data:{name:ename,id:eid,subtitle:esubtitle,type:etype},original:{name:name,id:id,subtitle:subtitle,type:type}}))
        handleClose();
    }

  return (
    <>
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
                Edit Card
            </Typography>
            <form>
                <FormControl>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={ename}
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
                    value={esubtitle}
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
                    value={eid}
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
                        value={etype}
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
                        handleEditCard(e);
                    }}
                >
                    Create
                </Button>
                <Button onClick={handleClose} variant='outlined' color='error'>cancel</Button>
                </div>
            </form>
            </Box>
        </Modal>
    </>
  )
}

export default EditCard