import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import TopFlavours from "./components/TopFlavours/TopFlavours";
import ArrowUpIcon from "./assets/icons/ArrowUpIcon";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const App = () => {
  const [showButton, setSchowButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= window.innerHeight / 2) {
        setSchowButton(true);
      } else {
        setSchowButton(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NavBar />
      <HeroSection />
      <TopFlavours />
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="scrollToTopButton"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon />
        </button>
      )}
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      // Hola //
    </div>
  );
};

export default App;
