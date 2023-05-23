import { Box, Button, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material';
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';
import useStyles from '../styles';

const MobileHeader = ({handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages, currency, setCurrency}) => {
    const styles = useStyles()

    return <>
    <Box sx={{ flexGrow: 1, display: 'flex'}}>
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: 'block'
      }}
    >
      {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
    </Box>
  <AdbIcon sx={{ display: 'flex', mr: 1 }} />
  <Typography
    variant="h5"
    noWrap
    component="a"
    href=""
    sx={{
      mr: 2,
      display: 'flex',
      flexGrow: 1,
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: "inherit",
      textDecoration: "none",
    }}
  >
    LOGO
  </Typography>
  <Button autoCapitalize={false} variant="contained">
        Log In
    </Button>
</>
}

export default MobileHeader