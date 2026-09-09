import { useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Navigation() {
  /* React router hooks */
  const navigate =
    useNavigate(); /* changes url without reloading the entire page */
  const location =
    useLocation(); /* shows where you are, Find out what URL you're currently on */

  /* When a tab is clicked, navigate to the URL stored in that tab's value. */
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Tabs value={location.pathname} onChange={handleChange}>
      <Tab
        icon={<span className="material-symbols-outlined">home</span>}
        iconPosition="start"
        label="Home"
        value="/"
      ></Tab>
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
  );
}

export default Navigation;
