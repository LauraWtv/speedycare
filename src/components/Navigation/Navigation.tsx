import { useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
import "../../styles/variables.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../assets/logo2.png";
import { useState } from "react";

function Navigation() {
  /* React router hooks */
  const navigate =
    useNavigate(); /* changes url without reloading the entire page */
  const location =
    useLocation(); /* shows where you are, Find out what URL you're currently on */

  const [menuOpen, setMenuOpen] = useState(false);

  /* When a tab is clicked, navigate to the URL stored in that tab's value. */
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  const handleMobileNavigation = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="nav">
        {/* Logo stays visible on all screen sizes */}
        <img className="web-header__logo" src={logo} alt="SpeedyCare logo" />

        {/* Desktop navigation */}
        <div className="desktop-tabs">
          <Tabs value={location.pathname} onChange={handleChange}>
            <Tab label="Home" value="/" />
            <Tab label="Expertise" value="/expertise" />
            <Tab label="Team" value="/team" />
            <Tab label="Jobs" value="/jobs" />
            <Tab label="Contact" value="/contact" />
          </Tabs>
        </div>

        {/* Mobile navigation */}
        <div className="mobile-nav">
          <IconButton
            className="menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </IconButton>

          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          >
            <List className="mobile-menu">
              {[
                { label: "Home", path: "/" },
                { label: "Expertise", path: "/expertise" },
                { label: "Team", path: "/team" },
                { label: "Jobs", path: "/jobs" },
                { label: "Contact", path: "/contact" },
              ].map(({ label, path }) => (
                <ListItem key={path} disablePadding>
                  <ListItemButton
                    selected={location.pathname === path}
                    onClick={() => handleMobileNavigation(path)}
                  >
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      </div>
    </>
  );
}

export default Navigation;
