import {
  AppBar,
  Container,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React from "react";
// import useStyles from "./styles";
import DesktopHeader from "./DesktopHeader";
import { theme } from "../../utils/themeCreator";
import MobileHeader from "./MobileHeader";

const pages = ["OSRS Gold", "RS3 Gold", "Sell RS Gold", "OSRS Items", "OSRS Accounts", "Reward Chests"];

const Header = ({ currency, setCurrency }) => {
  // const styles = useStyles();
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
