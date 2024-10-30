import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Stack, TextField, Tooltip, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: "95%",sm:600},
  bgcolor: 'background.paper',
  borderRadius:"6px",
  boxShadow: 24,
  p: 4,
};

const AddPosts = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Tooltip title="Create Post" sx={{position:"fixed", bottom:"20px", left:"20px"}}>
    <Fab 
    onClick={handleOpen}
    color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </Tooltip>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2" sx={{mb:1}}
          textAlign={"center"}>
            Create Post
          </Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Avatar 
          sx={{mr: "13px", width  :"65px", height:"65px"}}
          alt="Ahmed Shawky" src="./Image/mee.jpg" />
          <Typography variant="body1" >
            Ahmed Shawky
          </Typography>
          </Stack>
          <TextField
          id="outlined-multiline-static"
          sx={{mt:2 , width:"100%"}}
          multiline
          rows={4}
          placeholder="What's on your mind, Ahmed ?"
        />
        <Stack direction={"row"} spacing={1} alignItems={"center"} sx={{my:3}}>
          <EmojiEmotionsIcon color="warning"/>
          <ImageIcon color="secondary"/>
          <VideoCameraBackIcon color="success"/>
          <PersonAddIcon color="error"/>
        </Stack>
        
        <Button variant="contained" color="primary" sx={{width:"75%", ml:"15%"}}
        
        >
          Post
        </Button>
          
      
        </Box>
      </Modal>





    </>
  )
}

export default AddPosts