import logo from "../../assets/logo.jpg";
import "./WebHeader.css";

function WebHeader() {
  return (
    <header className="web-header">
      <img
        className="web-header__logo"
        src={logo}
        alt="SpeedyCare logo"
      />
    </header>
  );
}

export default WebHeader;