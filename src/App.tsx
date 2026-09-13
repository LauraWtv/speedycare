import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Expertise from "./pages/Expertise/Expertise";
import Jobs from "./pages/Jobs/Jobs";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import WebHeader from "./components/WebHeader/WebHeader";
import Footer from "./components/Footer/Footer";
import PrivacyCookies from "./pages/PrivacyCookies/PrivacyCookies";

function App() {
  /* TODO: add font */
  /*https://mui.com/material-ui/react-card/ */
  return (
    <BrowserRouter basename="/speedycare">
      <div className="app">
        {/*Foto*/}
        <WebHeader></WebHeader>

        {/*Router*/}

        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/team" element={<Team />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacyCookies" element={<PrivacyCookies />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
