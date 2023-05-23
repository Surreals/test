import { Box, Button, Link, MenuItem, Select, Typography, useMediaQuery } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import React from "react";
import { currencies, flagURLs } from "../../../utils/currencies";
import useStyles from "./styles";
import { theme } from "../../../utils/themeCreator";

const DesktopHeader = ({pages, currency, setCurrency}) => {
    const styles = useStyles()
    const medium = useMediaQuery(theme.breakpoints.up("lg"));


    return <>
    <AdbIcon sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: medium ? 4 : 2,
              display: 'flex',
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: 'flex', gap: medium ? 4 : 2 }}>
            {pages.map((page) =>
              page === "RS3 Gold" ? (
                <Link sx={{ color: "#E9B10A" }} className={styles.navActive} key={page}>
                  {page}
                </Link>
              ) : (
                <Link className={styles.navItem} key={page}>{page}</Link>
              )
            )}
          </Box>
          <Box className={styles.rightContainer}>
            <Select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)} 
                variant="standard" 
                MenuProps={{
                    PaperProps: {
                        sx: {
                            bgcolor: theme.palette.secondary.main,
                            '& .MuiMenuItem-root': {
                                paddingRight: 4,
                            },
                        },
                    },
            }}>
              {Object.keys(currencies).map((currency) => (
                <MenuItem value={currency} key={currency} SelectDisplayProps={{className: styles.selectItem}}>
                    <img className={styles.flag} src={flagURLs[currency]} alt={currency} />
                    {/* <Typography sx={{color: 'white', display: 'inline'}}> */}
                        {currency}
                        {/* </Typography> */}
                </MenuItem>
              ))}
            </Select>

            <Link sx={{ display: 'flex' }} className={styles.navItem}>
              Sign Up
            </Link>
            <Button autoCapitalize='false' variant="contained" className={styles.logInButton}>
              Log In
            </Button>
          </Box>
    </>
        
}

export default DesktopHeader;