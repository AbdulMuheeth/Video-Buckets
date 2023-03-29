import { Button, FormControl, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { videoActions } from '../../store';

const EditTypeName = ({open,handleClose,type}) => {

    const [name,setName] = React.useState(type);

    const dispatch = useDispatch();
    
    useEffect(()=>{
        setName(type);
    },[type])

    console.log("modal",name,type);

    const handleEdit = (e) => {
        e.preventDefault();
        // console.log(type,name);
        dispatch(videoActions.editBucketName({type:type,updatedName:name}))
        handleClose();
      };

  return (
    <div>
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
                Edit Bucket Name
            </Typography>
            <form>
                <FormControl>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    // error={!newName}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    sx={{ width: 250,marginBottom:1 }}
                    required
                />
                </FormControl>
                <br />
                <Button
                    type="submit"
                    variant='outlined'
                    color='success'
                    onClick={(e) => {
                        handleEdit(e)
                    }}
                >
                    Edit
                </Button>
                </form>
            </Box>
        </Modal>
    </div>
  )
}

export default EditTypeName