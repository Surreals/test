import { Box, Button, IconButton, Link, Menu, MenuItem, Select, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { currencies } from "../../../utils/currencies";
import useStyles from "./styles";

const DesktopHeader = ({handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages, currency, setCurrency}) => {
    const styles = useStyles()
    return <>
    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 4 }}>
            {pages.map((page) =>
              page === "RS3 Gold" ? (
                <Link sx={{ color: "#E9B10A" }} className={styles.navActive}>
                  {page}
                </Link>
              ) : (
                <Link className={styles.navItem}>{page}</Link>
              )
            )}
          </Box>
          <Box className={styles.rightContainer}>
            <Select value={currency} onChange={(e) => setCurrency(e.target.value)} variant="standard">
              {Object.keys(currencies).map((currency) => (
                <MenuItem value={currency}>{currency}</MenuItem>
              ))}
            </Select>

            <Link sx={{ display: { xs: "none", md: "flex" } }} className={styles.navItem}>
              Sign Up
            </Link>
            <Button autoCapitalize={false} variant="contained">
              Log In
            </Button>
          </Box>
    </>
        
}

export default DesktopHeader;