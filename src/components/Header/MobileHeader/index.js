// import { Box, IconButton } from '@mui/material';
// import React from 'react';

// const MobileHeader = () => {
//     return <>
//     <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//     <IconButton
//       size="large"
//       aria-label="account of current user"
//       aria-controls="menu-appbar"
//       aria-haspopup="true"
//       onClick={handleOpenNavMenu}
//       color="inherit"
//     >
//       <MenuIcon />
//     </IconButton>
//     <Menu
//       id="menu-appbar"
//       anchorEl={anchorElNav}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "left",
//       }}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "left",
//       }}
//       open={Boolean(anchorElNav)}
//       onClose={handleCloseNavMenu}
//       sx={{
//         display: { xs: "block", md: "none" },
//       }}
//     >
//       {pages.map((page) => (
//         <MenuItem key={page} onClick={handleCloseNavMenu}>
//           <Typography textAlign="center">{page}</Typography>
//         </MenuItem>
//       ))}
//     </Menu>
//     </Box>
//   <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//   <Typography
//     variant="h5"
//     noWrap
//     component="a"
//     href=""
//     sx={{
//       mr: 2,
//       display: { xs: "flex", md: "none" },
//       flexGrow: 1,
//       fontFamily: "monospace",
//       fontWeight: 700,
//       letterSpacing: ".3rem",
//       color: "inherit",
//       textDecoration: "none",
//     }}
//   >
//     LOGO
//   </Typography>
// </>
// }