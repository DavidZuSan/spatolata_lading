import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="bg-background min-h-screen">
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default App;
