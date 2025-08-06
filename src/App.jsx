import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";
// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SmartHiring from "./Pages/SmartHiring/SmartHiring";
import HowItWorks from "./Pages/howItWorks/howItWorks";
import VA from "./Pages/VA/VA";
import Client from "./Pages/Client/Client";
import Contact from "./Pages/Contact/Contact";
import Loader from "./Components/Loader/Loader";

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const minDuration = new Promise((resolve) => setTimeout(resolve, 400));

    const waitForPageTop = new Promise((resolve) => {
      const checkScroll = () => {
        if (window.pageYOffset === 0) {
          resolve();
        } else {
          requestAnimationFrame(checkScroll);
        }
      };
      requestAnimationFrame(checkScroll);
    });

    Promise.all([minDuration, waitForPageTop]).then(() => {
      setIsLoading(false);
    });
  }, [location]);

  return (
    <>
      {isLoading && <Loader />}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SmartHiring" element={<SmartHiring />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/VA" element={<VA />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
