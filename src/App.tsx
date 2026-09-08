import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Expertise from "./pages/Expertise/Expertise";
import Jobs from "./pages/Jobs/Jobs";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Navigation from "./components/Navigation/navigation";
import WebHeader from "./components/WebHeader/WebHeader";

function App() {
  return (
    <div>
      {/*Foto*/}
      <WebHeader></WebHeader>

      {/*Router*/}
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/team" element={<Team />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
