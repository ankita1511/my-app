import { Avatar, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material';
import React, { useState } from 'react';
import {Box} from '@mui/system';

const StyledModal=styled(Modal)({
    display:"flex",
    alignitem:"center",
    justifyContent:"center"
});

const UserBox=styled(Box)({
    display:"flex",
    alignitem:"center",
    gap:"10px",
    marginBottom:"20px"
});

const Add = () => {
    const[open, setOpen]=useState(false);
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
        title="Add Post" sx={{position:"fixed", bottom:20 , left:{xs:"calc(50%)", md:30}}} >
            <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>  
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
      <Box width={420} height={290} bgcolor="white" p={3} borderRadius={5}>
        <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
        <UserBox>
            <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"
            sx={{width:30, height:30}}>
            </Avatar>
            <Typography fontWeight={500} variant="Span">John Deo</Typography>
        </UserBox>
        <TextField sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
  <Button>Post</Button>
  <Button
    sx={{width:"100px"}}>
    <DateRange/></Button>
  
</ButtonGroup>
      </Box>
    </StyledModal>
    </>
  )
}

export default Add
