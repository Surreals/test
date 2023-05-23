import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import useStyles from "./styles";
import { currencies, flagURLs } from "../../utils/currencies";
import DesktopHeader from "./DesktopHeader";
import { theme } from "../../utils/themeCreator";
import MobileHeader from "./MobileHeader";

const pages = ["OSRS Gold", "RS3 Gold", "Sell RS Gold", "OSRS Items", "OSRS Accounts", "Reward Chests"];

const Header = ({ currency, setCurrency }) => {
  const styles = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {desktop ? <DesktopHeader 
            handleOpenNavMenu={handleOpenNavMenu} 
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
            currency={currency} 
            setCurrency={setCurrency} 
          /> 
          :
          <MobileHeader 
            handleOpenNavMenu={handleOpenNavMenu} 
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
            currency={currency} 
            setCurrency={setCurrency} 
          />}
       
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
