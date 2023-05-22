import { AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import useStyles from './styles';

const pages = ['OSRS Gold', 'RS3 Gold', 'Sell RS Gold', 'OSRS Items', 'OSRS Accounts', 'Reward Chests'];

const Header = ({currency, setCurrency}) => {
  const styles = useStyles()
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    return (<AppBar position="static" color='secondary'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 4}}>
            {pages.map((page) => (
              // <Box
              //   key={page}
              //   onClick={handleCloseNavMenu}
              //   className={styles.navItem}
              //   sx={{ my: 2, color: 'white', display: 'block' }}
              // >
              //   {page}
              // </Box>
              page === 'RS3 Gold' ? <Link sx={{color: '#E9B10A'}} className={styles.rs3}><span className={styles.rs3Border}>RS3</span>&nbsp;Gold</Link> : <Link className={styles.navItem}>{page}</Link>
            ))}
          </Box>
          <Box className={styles.rightContainer}>
            <Select 
              value={currency} 
              inputProps={{
                classes: {
                  icon: styles.icon,
                  root: styles.root,
                  },
              }} 
              onChange={e => setCurrency(e.target.value)} 
              className={styles.select}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
              <MenuItem value={'GBP'}>GBP</MenuItem>
              <MenuItem value={'AUD'}>AUD</MenuItem>
              <MenuItem value={'CAD'}>CAD</MenuItem>
            </Select>
            <Button sx={{display: { xs: 'none', md: 'flex' }}}>Sign Up</Button>
            <Button autoCapitalize={false} variant='contained'>Log In</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>)
}

export default Header