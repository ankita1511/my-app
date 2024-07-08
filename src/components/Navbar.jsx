import React, { useState } from 'react'
import {AppBar,Avatar,Badge,Box,InputBase,Menu,Toolbar, Typography, styled,MenuItem} from '@mui/material'
import{Mail, Pets, Notifications} from '@mui/icons-material'

const StyleToolbar= styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
const Search= styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}))
const Icons= styled(Box)(({theme})=>({
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
    }));

const UserBox= styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    }));

const Navbar = () => {
    const [open, setOpen]= useState(false)
  return (
    <AppBar position='sticky'>
        <StyleToolbar>
            <Typography variant="h6" sx={{ display:{ xs:"none" , sm:"block"}}}>
                LAMA DEV
            </Typography>
            <Pets sx={{ display:{ xs:"block" , sm:"none"}}}/>
            <Search><InputBase placeholder="search..."/></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                <Mail/>
                </Badge>
                <Badge badgeContent={4} color="error">
                <Notifications/>
                </Badge>
                <Avatar sx={{width:30, height:30}} 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"
                onClick={e=>setOpen(true)}/>
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
                <Avatar sx={{width:30, height:30}} 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"
                />
                <Typography variant='span'>John</Typography>
            </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
         anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;
