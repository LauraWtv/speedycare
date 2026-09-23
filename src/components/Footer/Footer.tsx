import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.jpg";

function Footer() {
  return (
    <div className="footer">
      <div><p>© {new Date().getFullYear()} SpeedyCare. Alle rechten voorbehouden.</p></div>
      <div>
        <img className="footer_logo" src={logo} alt="logo SpeedyCare" />
      </div>
      <div><Link className="link-accent" to="/privacyCookies">Privacy- & cookiebeleid</Link></div>
    </div>
  );
}

export default Footer;
