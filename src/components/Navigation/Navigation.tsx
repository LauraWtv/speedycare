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
      {/* Desktop navigation */}
      <Tabs
        value={location.pathname}
        onChange={handleChange}
        className="nav desktop-nav"
        centered
      >
        <Tab
          icon={<span className="material-symbols-outlined">home</span>}
          iconPosition="start"
          label="Home"
          value="/"
        />

        <Tab
          icon={
            <span className="material-symbols-outlined">medical_services</span>
          }
          iconPosition="start"
          label="Expertise"
          value="/expertise"
        />

        <Tab
          icon={<span className="material-symbols-outlined">groups</span>}
          iconPosition="start"
          label="Team"
          value="/team"
        />

        <Tab
          icon={<span className="material-symbols-outlined">work</span>}
          iconPosition="start"
          label="Jobs"
          value="/jobs"
        />

        <Tab
          icon={<span className="material-symbols-outlined">mail</span>}
          iconPosition="start"
          label="Contact"
          value="/contact"
        />
      </Tabs>

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
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMobileNavigation("/")}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleMobileNavigation("/expertise")}
              >
                <ListItemText primary="Expertise" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMobileNavigation("/team")}>
                <ListItemText primary="Team" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMobileNavigation("/jobs")}>
                <ListItemText primary="Jobs" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleMobileNavigation("/contact")}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
}

export default Navigation;
