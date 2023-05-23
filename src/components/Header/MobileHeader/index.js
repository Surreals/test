import { Box, Button, IconButton, Menu, MenuItem, Typography, Select } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import useStyles from "../styles";
import { theme } from "../../../utils/themeCreator";
import { currencies, flagURLs } from "../../../utils/currencies";

const MobileHeader = ({ handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages, currency, setCurrency }) => {
  const styles = useStyles();

  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
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
            display: "block",
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: theme.palette.secondary.main,
                "& .MuiMenuItem-root": {
                  paddingRight: 4,
                },
              },
            },
          }}
        >
          {pages.map((page) => (
            <MenuItem divider key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
          <MenuItem selected={false}>
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              variant="standard"
              sx={{
                width: '100%',
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: theme.palette.secondary.main,
                    "& .MuiMenuItem-root": {
                      paddingRight: 4,
                    },
                  },
                },
              }}
            >
              {Object.keys(currencies).map((currency) => (
                <MenuItem value={currency} key={currency} SelectDisplayProps={{ className: styles.selectItem }}>
                  <img className={styles.flag} src={flagURLs[currency]} alt={currency} />
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </MenuItem>
        </Menu>
      </Box>
      <AdbIcon sx={{ display: "flex", mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: "flex",
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
      <Button autoCapitalize="false" variant="contained">
        Log In
      </Button>
    </>
  );
};

export default MobileHeader;
