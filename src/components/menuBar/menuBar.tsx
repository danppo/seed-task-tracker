import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const MenuBar = () => {
  const navigate = useNavigate();

  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Button
              onClick={() => {navigate('/')}}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>
            <Button
              onClick={() => {navigate('/about')}}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              About
            </Button>
            <Button
              onClick={() => {navigate('/dashboard')}}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Dashboard
            </Button>
            <Button
              onClick={() => {navigate('/new')}}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Add Growth
            </Button>
            <Button
              onClick={() => {navigate('/history')}}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              History
            </Button>
            <Button
              onClick={() => {navigate('/public')}}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Public 
            </Button>
            <Button
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link to="/login">Login / Register</Link>
            </Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Outlet /> */}
    </>
  )
};

export default MenuBar;
